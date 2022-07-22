import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-profiles',
  templateUrl: './manager-profiles.component.html',
  styleUrls: ['./manager-profiles.component.css']
})
export class ManagerProfilesComponent implements OnInit {
  editProfil =false;
  editManageProfilePic=false

  constructor() { }

  ngOnInit(): void {
    console.log("fnct parent  ------------"+this.editProfil);
  }
  
  Profils =[
    {id: Number(1),nom:"Norman" ,image:'../../assets/images/Netflix-avatar1.png'},
    {id: Number(2),nom:"linda the asian" ,image:'../../assets/images/Netflix-avatar2.png'},
    {id: Number(3),nom:"nathan" ,image:'../../assets/images/Netflix-avatar3.png'},
    {id: Number(4),nom:"Jenn" ,image:'../../assets/images/Netflix-avatar4.png'},
    {id: Number(4),nom:"Bensin" ,image:'../../assets/images/Netflix-avatar5.png'},

  ];

  editProfilFn(){ 
    
    this.editProfil=!this.editProfil;
  }
  editManageProfilePicFn(){ 
    
    this.editManageProfilePic=!this.editManageProfilePic;
  }
    

}
