import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  HoverType:boolean;
  HoverBtn:boolean;
  constructor() { 
    this.HoverType=false;
    this.HoverBtn=false;
  }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: false,
    autoWidth:false,
    autoHeight:false,
    mouseDrag: false,
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
  

}
