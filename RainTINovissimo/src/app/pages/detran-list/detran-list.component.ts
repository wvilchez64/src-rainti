import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-detran',
  templateUrl: './detran-list.component.html'
})
export class DetranComponent 
{
 
    public DetranTitle: String ="";
    public DetranDisable: Boolean;
    public mode ='ListDetran';
    

    constructor() {  }
 

  AddDetran(mode: string){
    this.mode = mode;
    this.DetranTitle ="Novo Detran";
    this.DetranDisable = false;
  
  }

  EditDetran(mode: string){
    this.mode = mode;
    this.DetranTitle ="Editar Detran";
    this.DetranDisable = false;
  
  }

  ConsultDetran(mode: string){
    this.mode = mode;
    this.DetranTitle ="";
    this.DetranDisable = true;
  
  }

  ListDetran(mode: string){
    this.mode = mode;
    this.DetranTitle ="";
  
  }
}
