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
  FilmDataNetflix:any;
  constructor() {
    this.HoverType=false;
    this.HoverBtn=false;
    this.showPopup=false; 
  }

  ngOnInit(): void {
    this.FilmDataNetflix =[
      {type:"Trending Now",idType: Number(1), images:[
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
      ]},
      {type:"TV Thrillers",idType: Number(2), images:[
        {idImage: Number(1),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSWYao-uhFstpKURv4x8s7PqLqTYtxb0jt23_y_DG6hVW4iX2phWRPYTF59rKzWWN6kfXoJ8ShwWvzfdHp2_pIKmR2no5CfJgYg.webp?r=425'},
        {idImage: Number(2),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ2eejwOmFWqyOd0caBviCBDM1tWDBRunzwQDiD-3eeBNp7Wy-dCxxPsm5zxpuSRyh5E0gZAejeJp20KYnrJZefTBkyGu9etx2k.webp?r=01d'},
        {idImage: Number(3),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe1K0jvXMRWrtduB7dyvz3z3k8HN-5pWEB4VgSodCnItRKQahxxWcwprEVfbKCzTelyimoH7Z0uDHFDEt4YikrHaRmtio6UHlbfu4f-FN7CGFjreivtIb7ZY0SnxQIS4g_3U.jpg?r=5e6'},
        {idImage: Number(4),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTme4YrKP_BkbNBgDiB1tT0CrCXPwVdZ1j1HD7J7N17nnfvcPimb_a4UtgcelzlXrE5TolZkKABI1GAkwrb3vU5Jr-HEI8erLeWx6SQoXgm5lBhQZW6mDzkhJa84oxwujhVK.jpg?r=8a4'},
        {idImage: Number(5),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRhcOWqeKz853mpstjpgamv1Y3Uup5f5qZLaOizBxCYmhwATW01C9Ci4vPn8ObRh8HVPhXggyRUo19SwucSjqRuDnCYt1evrnHSDfpqiVwlvS5PXiX4iXNFsckTJiLE2sxDd.jpg?r=0b2'},
        {idImage: Number(6),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdW9a4JnnUOPEVlGy5MdikwtGX0iV79s2d1LHCzeViKYy1BvQzEUTCVpnqfonKpy4qPlXkRlbOzpjFEmXcm1XQkoQiUOPKROykAaAy1MHB-AvE5oHbxHCiadxD0szXFJEyV7.jpg?r=13b'},
        {idImage: Number(7),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRuK6PMCMSVAeFkOgRlrhSiAKHDJnKBAHrA8WIiNN8uGKAMMO3wWYVVPx-e3ps5GU1XyvynRhZR5Eyi2bB_1LKA_BeyOk7ADIOSf8fhlBvWr_IMsXhLQmw9fSzcYcgT4GcmY.jpg?r=973'},
        {idImage: Number(8),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRkW_ebGcCDMM0hkcOqrw2FFnbE3T-725ztrAnXU6_7aCFcDT0ZRh3WYcl_-sz7lIxIrgalBTyHyH7f6GL5KJRZhMfLfFe6H8TC_EEsfiaP8xZcgD3gu6b5uMYSbeQoTt34f.jpg?r=b10'},
        {idImage: Number(10),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaVc7hqusAeE99UkbMXEFqnvMZ8IuIri2Vt4zEY3wxZT0gkj41c6HYvOZO1wPAgjA9JRXu_J_b4NnxkrbtI31D-s3ITiuQkTDnq85pWrriwMFEBF7RpMVpwCxnO1Cxp7wm3x.jpg?r=bca'},
        {idImage: Number(11),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVHFUCqIt_xvL-eS-ZsQgjEePL27JmFSNRpoC4srnop1HAVX_i8Lmw51ELeFWT-b5Bvbrjqhbs0n300pJL9egKA4ouYY2-Xg1o1dQRd4FsmJFHt_GOtx1H7dEtJaSuzTtf4B.jpg?r=b11'},
    ]},
  
    ];
  }

  


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
