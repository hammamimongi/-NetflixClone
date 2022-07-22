import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Profils =[
    {id: Number(1),nom:"Norman" ,image:'../../assets/images/Netflix-avatar1.png'},
    {id: Number(2),nom:"linda the asian" ,image:'../../assets/images/Netflix-avatar2.png'},
    {id: Number(3),nom:"nathan" ,image:'../../assets/images/Netflix-avatar3.png'},
    {id: Number(4),nom:"Jenn" ,image:'../../assets/images/Netflix-avatar4.png'},
    {id: Number(4),nom:"Bensin" ,image:'../../assets/images/Netflix-avatar5.png'},

  ];
  

}
