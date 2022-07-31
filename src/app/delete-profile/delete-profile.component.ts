import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.css']
})
export class DeleteProfileComponent implements OnInit {

  @Output() public deleteProfilChild= new EventEmitter();
  public DeleteProfilTest=true;
  @Output() public childTestEdit= new EventEmitter();
  TesteditProfil=false;

  constructor() { }

  ngOnInit(): void {
  }

  TestDeleteProfil(){
    this.DeleteProfilTest=false;
    this.deleteProfilChild.emit(this.DeleteProfilTest);
  }

  TesteditProfilTest(){

    this.TesteditProfil=false;
    this.childTestEdit.emit(this.TesteditProfil);
    console.log("fnct child  after delete ------------"+this.TesteditProfil);
  }

}
