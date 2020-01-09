import { Component, OnInit } from '@angular/core';
import { DetranContactsService } from '../detran-contacts.service';

@Component({
  selector: 'app-detran-contacts',
  templateUrl: './detran-contacts.component.html',
  styleUrls: ['./detran-contacts.component.css']
})
export class DetranContactsComponent implements OnInit {

  searchText: ''
  name: ''
  detranContacts: Array<any> = []

  constructor(private _detranContactsService: DetranContactsService) { }

  ngOnInit() {
    this._detranContactsService.getDetranContacts()
    .subscribe(      
      res => this.detranContacts = res,
      err => console.log(err)
    )
  }

}
