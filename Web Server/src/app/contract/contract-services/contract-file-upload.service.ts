import { EventEmitter  } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { AuthService } from "../../system-access/system-access-services/auth.service";
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractFileUploadService {
  private _appServerConfig = require('../../../assets/configs/config-app-server.json')
  private _fileUploadContractUrl = "http://"+this._appServerConfig.host+":"+this._appServerConfig.port+"/api/contract-register/file-upload"

  authService = this.injector.get(AuthService)

  public uploader:FileUploader = new FileUploader({  
                                      url: this._fileUploadContractUrl, 
                                      authToken:  `Bearer ${this.authService.getToken()}`,
                                      disableMultipart:true 
                                    });
  public queue: FileItem[];                                    
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e; 
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    if (typeof file === 'undefined' || file == null) {
      return 
    } 
    this.readBase64(file)
      .then(function(data) {
      console.log(data);
    })

  }

  readBase64(file): Promise<any> {
    var reader  = new FileReader();
    var future = new Promise((resolve, reject) => {
      reader.addEventListener("load", function () {
        resolve(reader.result);
      }, false);

      reader.addEventListener("error", function (event) {
        reject(event);
      }, false);

      reader.readAsDataURL(file);
    });
    return future;
  }

  constructor(
    private injector: Injector
  ) { 
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
  }
}
