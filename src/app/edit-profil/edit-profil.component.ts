import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  @Input() TesteditProfil: any;
  //@Input() ImagePath="Netflix-avatar1.png";
  ImagePath="Netflix-avatar1.png";
  @Output() public childTestEdit= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  TesteditProfilTest(){
    console.log("fnct child  before ------------"+this.TesteditProfil);

    this.TesteditProfil=!this.TesteditProfil;
    this.childTestEdit.emit(this.TesteditProfil);
    console.log("fnct child  after ------------"+this.TesteditProfil);
  }
  

}
