import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  EditImageProfil=false;
  @Input() public TesteditProfil: any;
  @Output() public deleteProfilChild= new EventEmitter();
  @Input() public DeleteProfilTest:any;

  @Input() public ProfilsData:any;
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
    this.DeleteProfilTest=true;
    this.deleteProfilChild.emit(this.DeleteProfilTest);
  }

  EditImageProfilFn(){
    this.EditImageProfil=!this.EditImageProfil;
  }
  

}
