import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  EditImageProfil=false;
  @Input() TesteditProfil: any;
  @Input() DeleteProfil: any;
  @Input() ProfilsData:any;
  @Output() public childTestEdit= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log("1010  ------------"+this.ProfilsData);
    console.log("1010  ------------"+this.ProfilsData.nom);

  }
  TesteditProfilTest(){
    console.log("fnct child  before ------------"+this.TesteditProfil);

    this.TesteditProfil=!this.TesteditProfil;
    this.childTestEdit.emit(this.TesteditProfil);
    console.log("fnct child  after ------------"+this.TesteditProfil);
  }

  TestDeleteProfil(){
    console.log("fnct child  before ------------"+this.DeleteProfil);

    this.TesteditProfil=!this.TesteditProfil;
    this.childTestEdit.emit(this.TesteditProfil);
    console.log("fnct child  after ------------"+this.DeleteProfil);
  }

  EditImageProfilFn(){
    this.EditImageProfil=!this.EditImageProfil;
  }
  

}
