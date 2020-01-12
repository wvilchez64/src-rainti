import { Component, OnInit } from '@angular/core';
import { DetranContactsService } from '../detran-services/detran-contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detran-contacts',
  templateUrl: './detran-contacts.component.html',
  styleUrls: ['./detran-contacts.component.css']
})
export class DetranContactsComponent implements OnInit {

  searchText: ''
  name: ''
  detranContacts: Array<any> = []

  constructor(private _detranContactsService: DetranContactsService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.paramMap
    .subscribe(
      params => {
        this._detranContactsService.getDetranContacts(params.get('id'))
          .subscribe(      
            res => this.detranContacts = res,
            err => console.log(err)
          )
      }
    )    
  }

  addDetranContact(){
    this._route.paramMap
    .subscribe(
      params => {
        this._router.navigate(['/detran-adicionar-contato/'+params.get('id')])           
      }
    )
  }

}
