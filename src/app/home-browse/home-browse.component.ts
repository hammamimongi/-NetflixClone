import { Component, HostListener, OnInit,Output,Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home-browse',
  templateUrl: './home-browse.component.html',
  styleUrls: ['./home-browse.component.css']
})
export class HomeBrowseComponent implements OnInit {

  HoverType:boolean;
  HoverBtn:boolean;
  constructor() {
    this.HoverType=false;
    this.HoverBtn=false; }

  ngOnInit(): void {
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
  myList =[
    {id: Number(9), image:'../../assets/wrapperFilm/wrapperFilm.webp'}  ];

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
        items: 2
      },
      740: {
        items: 5
      },
      940: {
        items: 7
      }
    },
    nav: false
  }

}
