import { TypeModifier } from '@angular/compiler/src/output/output_ast';
import { Component, HostListener, OnInit,Output,Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  @Input() ProfilsData:any;
  @Output() public EditImageProfil = new EventEmitter();
  HoverType:boolean;
  HoverBtn:boolean;
  typeImgProfile:any;
  navbarfixed:boolean=false;
  constructor() { 
    this.HoverType=false;
    this.HoverBtn=false;
  }

  ngOnInit(): void {
    console.log(this.ProfilsData.image+"---------");
   }

  
  data =[
    {id: Number(1), image:'../../assets/images/Netflix-avatar1.png'},
    {id: Number(2), image:'../../assets/images/Netflix-avatar2.png'},
    {id: Number(3), image:'../../assets/images/Netflix-avatar3.png'},
    {id: Number(4), image:'../../assets/images/Netflix-avatar4.png'},
    {id: Number(5), image:'../../assets/images/Netflix-avatar5.png'},
    {id: Number(6), image:'../../assets/images/Netflix-avatar1.png'},
    {id: Number(7), image:'../../assets/images/Netflix-avatar2.png'},
    {id: Number(8), image:'../../assets/images/Netflix-avatar3.png'},
    {id: Number(9), image:'../../assets/images/Netflix-avatar4.png'},
    {id: Number(10), image:'../../assets/images/Netflix-avatar5.png'}
  ];
  
  ImagePath="Netflix-avatar1.png";




  customOptions: OwlOptions = {
    loop: true,
    autoWidth:false,
    autoHeight:false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<div id='navTest' class='nav-button owl-prev' style='height:240px'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: false
  }

  @HostListener('window:scroll',['$event']) onscroll(){
    if((window.scrollY>100))
    {
      this.navbarfixed=true;
    }
    else{
      this.navbarfixed=false;
    }
  }

  EditImageProfilFn(){
    this.EditImageProfil.emit(false);

  }

}
