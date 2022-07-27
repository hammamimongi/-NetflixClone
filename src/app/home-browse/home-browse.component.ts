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
  showPopup:boolean;
  constructor() {
    this.HoverType=false;
    this.HoverBtn=false;
    this.showPopup=false; 
  }

  ngOnInit(): void {
  }

  data =[
    {id: Number(1), image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe1K0jvXMRWrtduB7dyvz3z3k8HN-5pWEB4VgSodCnItRKQahxxWcwprEVfbKCzTelyimoH7Z0uDHFDEt4YikrHaRmtio6UHlbfu4f-FN7CGFjreivtIb7ZY0SnxQIS4g_3U.jpg?r=5e6'},
    {id: Number(2), image:'https://static.themoscowtimes.com/image/article_1360/95/nacosKopie.JPG'},
    {id: Number(3), image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZXiravz1GGOFhA-rtNJGsotUV7Lx8xDI55ky0-IIYuwpCT7zu3ryBbxgte1Yh4w5Ma1wdZknBlAGLH47NhgCh2UjsU1oE0jJgI.webp?r=f52'},
    {id: Number(4), image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABalZ6SsKAy55RD0GIBzwr9gWRk8wB6rsPrjk2G80BJmBXRbB3Z8ZFJ0eRMdWMtfQB8_oBZiqXpbaG2wtWutalKYznk3PsDvp6H4.webp?r=b16'},
    {id: Number(5), image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSe7zsukYn1EQPJ-0SQOSMJAnF2JLILJ8ruu4GfrEg_IU8Joqe2Xm-YuQfTvTuT9oxJAao1iKUfWkCWdqt5REVesDnwqRzj5Dg0.webp?r=fe2'},
    {id: Number(6), image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYEZ9nx1-vvPxEiUPWJjLEDZzcokBpxRefS0-vV_CYBukPhfmflcnDUM2LzBX4YQPjkXxenHrK87n6lSKmhw4ZQ3vp9F9Hc2vEuEp2anlzX2BokxMAF-267G5cVjm3UPlik9.jpg?r=f3d'},
    {id: Number(7), image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTqgUmZ8nG1J9pvEtaMmIzYihIDYcbyXdLH254CAwGvnIy5pTsD_RZkLyF-g2JoDMuUiTBZ97KbN9coIqjukTyU_PelQfUyqcZO192DwbJk2nceqIo5wtCsyHMIzqFbNEO5y.jpg?r=0a4'},
    {id: Number(8), image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbupwXIkR3OVvdHCK1gSdxHOYnukLY17lU5V1HNZp5_HSpmwRUnpL5Hfj24l6Vb-xQn8G8S5LLCZLzufr5G1ahk4m_4C8iOhD87RxI2V12gs3FDQvIEPJQPfKC34gWcAzE9l.jpg?r=234'},
    {id: Number(9), image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUp3n1FNTe234egJf3X5PrWKuYj0zkqg_ZA6CqDKjM1p90xDDUQGeDtbasEvHMEuTNDrECBPOE0nIPwwMEw72ADAWQf-9lM9B2iKIkQNb9pIoRzwIHba8DdprDXyKU7SHglj.jpg?r=72f'},
    {id: Number(10), image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUmOhuX61a8ATU8nW2TW1OeKc8NuAu_7lMCXxwgPWYdrkL5KxPSDi_OfmENvD8JnBZlBNAoZdzJMxOICOKzTcg-SiNdzPMpymPY.webp?r=3aa'}
  ];
  myList =[
    {id: Number(9), image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUb-CgEknPiDCFT9YDbgQCFYBIp1V4NSzMNZxgqjQLJJ_-otKbEp0mnN2UDRXQv3akM2K8Lbwge6dRmgAzfbP-s7xjl2ZPNaxw4.webp?r=e01'}  ];

  customOptions: OwlOptions = {
    loop: true,
    autoWidth:true,
    autoHeight:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
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
        items: 6
      }
    },
    nav: false
  }

  showPopupFnT() {
    this.showPopup=true;
    console.log("trrrrrrrr"+this.showPopup);
  }
}
