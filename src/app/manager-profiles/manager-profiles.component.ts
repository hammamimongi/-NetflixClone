import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-profiles',
  templateUrl: './manager-profiles.component.html',
  styleUrls: ['./manager-profiles.component.css']
})
export class ManagerProfilesComponent implements OnInit {
  editProfil =false;

  constructor() { }

  ngOnInit(): void {
    console.log("fnct parent  ------------"+this.editProfil);
  }
  

  editProfilFn(){ 
    
    this.editProfil=!this.editProfil;

  }
    

}
