import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detran-contact-add',
  templateUrl: './detran-contact-add.component.html',
  styleUrls: ['./detran-contact-add.component.css']
})
export class DetranContactAddComponent implements OnInit {

  _userData = {
    name: '',
    phone: '',
    email: '',
    additionalInfo: '',
  }
  constructor() { }

  ngOnInit() {
  }

  addDetranContact(){

  }

}
