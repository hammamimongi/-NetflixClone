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

  
  data =[
    {type:"Classic",id: Number(1), image:'../../assets/images/Netflix-avatar1.png'},
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
  
  profileImage =[
    {type:"Classic",TypePath:"text",idType: Number(1), images:[
      {idImage: Number(1),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcxDDkbrWUAyGlZAEbC3B_I5lqotYZpD5J8LaH_DVYfFoTFthVOVNuMhWKtXptziiwcEOgjpTv5gUS7gyA_EZ6sYTuJnMOPnew.png?r=f16'},
      {idImage: Number(2),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYQ6yTLcByRsw8BVZBs7rBkMbIWlNkuTvinrWYq_st6WJLRRTdD4XWc8gfak93NQ0rek-ddxtaSfUtEUFIVDWFDjajLaMYWRXw.png?r=870'},
      {idImage: Number(3),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXBr-0p6w9G0eDgub4y6wjJZGZTPpN5pUQxvdaueIOa2GEoFSv49TCR26pgIg7zqAK9DA5Kpp11LYOwDKkZkBuJ0Co9c1Tl7SQ.png?r=552'},
      {idImage: Number(4),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRNxh2T8XhS7jBOLKwI1j-R0CJFhtTa-nxz5EhkX0EL4ue-amefp4mC1fsf0-rd8vynj9TXF2unD7iD4vFlh5kp5XCMtfUa4NA.png?r=a16'},
      {idImage: Number(5),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABafGsF7RLiQlTUx1eVpITxBZ5Me8s0M3fvgIbDNpwk1-2dnsNGRdzVOyajfwonpnfF3MKRdPt2l5GejDXr3cbGE8fVV1YWdHhw.png?r=ce4'},
      {idImage: Number(6),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcVQpnZKvDFkrGbvZ1Z5QXziVqAK3aaBrGCqsgltpUilQBRAFFYvmyqlRlZF3WubCdfFfzDnVyeNa3kFjxLgif-qYdfJbpj8VQ.png?r=15e'},
      {idImage: Number(7),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWP7dngMuFj6d4Hr3kCkJAijucivMNIbY6ak4NJtbCgEWKSEqE_31Kp6kTIip3kS0JUhEnA78GnsLSq0M829d2jpc4aqffP5ng.png?r=558'},
      {idImage: Number(8),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABd148B0ZT3d_N6KcgB2_xM2k57VsubEa0FQBp3lj_WPe1m9Zzbgq_KkVdLNfvUmTN5hm7kvTTd0JF9QMxEjW_-TaX5u9vo2QBg.png?r=181'},
      {idImage: Number(10),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZf5kiIAuiZG_DvLse1xSkgukFUqHQQR5d6qSDQBlw720nd7cYHcXavvtFNfg5814g1njOdPHGbrKYs9KdWq9hnEqL2-xxh5MA.png?r=1d4'},
      {idImage: Number(11),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfMnIhIdkM8LdU5BZaYVaxoVTrMGzIjafPBzCQUwebzxeK7JKvcI7-Jm-5AituzcdJYIT_45NSkbbTwfVva-E01G9J1YVVBveA.png?r=e6e'},
      {idImage: Number(12),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV0j-bGEVAaWomcgXqIMEfw-h-in8B5DB_edifknx-3aNWWIQKU1KMFN9OZtzQMTCYp2ovDEaPHJlCkDBmdtDUTJwUb0-c_BBg.png?r=a4b'},
    ]},
    {type:"https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABawD84z7BWA9FsECNI-t_2o2C3JI-nJJE_aminZxBWtmnz_Ka_ue4WG3uB1bT5qgkwBTIgkANZkClhbMFUYGOGsh1Oz9T5QyAg.png?r=23b",
    TypePath:"image",idType: Number(2), images:[
      {idImage: Number(1),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTR1b7Q6SIwjB-mGmniPUfV5HO9qwHGHtBkP4RTmvcJ9zz0YEy0kz4BbGXOQGSrHMZ7h33TZ1VFtka0l52uGInQ6F7oKrqWB4A.png?r=360'},
      {idImage: Number(2),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcRBwDUS5fstzj3af8r3a39uLwxnC9KHGxsn1ceZLD1ygyQUBEH9mokENBKE6ORNEekxSOJKgRgvvU4fVu9RkjHFNxXpd6i0og.png?r=74d'},
      {idImage: Number(3),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVX1CG1EOhUoYBocgC0SFJ71RdkULeRZHhjU95Vm3aaPRX8zTzr1X3lFnG0IrRFhBZJAQnwhAg0QjZBT__UnUqw1HqIAMCNUww.png?r=3c0'},
      {idImage: Number(4),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcb6rk1YdLdVcVfaqA8PgdV9NzzPWXR2CShGJe8EPVptQoDhFe7TCcM3eD2nOA5hSANjtEZ25DlOg_n6URpL46C_adxWxFePYQ.png?r=49c'},
      {idImage: Number(5),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWHo-caRQ4TY8mdpLq6_ZIcSQv1AIR1PbVAranrUCaO6NsDgm1sADOc0ZI-kmsjt59GkV_j4g5GMMjtSph0yyImNAnj5NK9Q1w.png?r=f70'},
      {idImage: Number(6),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbGCO_La8I3LBlPguOsZbQNZS2NtYAzfJhW_2m6xXOEI-4WounbalBWyPO3Umy_koO9rcUQlhkOOltgqhHfA-AsxsTFaSWUTUA.png?r=4ef'},
      {idImage: Number(7),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABc77LbbNaGQXrSj_ctYAYpRvzXBF8HG0hNS6eqtBfxjOcaaKFd1nFLztwOyrHpRjd2DsIULFiQPiGxOCAT_ojVcJ_hFrxaLEkQ.png?r=8f7'},
      {idImage: Number(8),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYs-UuPJci6NIOkYsf9CKJiWzWQZS5ORX5t7vn-aNYD36YC_PnQbrBkkskf-ZSlUrza0KzsP20JfDaHgpLqPEme2CAzgDbXsxA.png?r=d2d'},
    ]},
    {type:"https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABY9wLYkYkt6xZTtOApy6AJahRqHWpAb81UdycBWUsTVO6gwC5H_P09isElcaZOnZnd0vSuV_Th5qI6lhoKS25rK3wGDmcKB-.png?r=368",
    TypePath:"image",idType: Number(3), images:[
      {idImage: Number(1),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXQUMMx69IEI_OgaAoAbFN9hyPd8GH20FwJFDD31dixgf7VkVHyuUOWRVudbMiHec_G4BKci9yCzEmy-SrUN-iSrbfnzep9imA.png?r=7da'},
      {idImage: Number(2),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZRSvA099y0TZBCOMM0x_glYS4FmR4tVoe80JKcdvNo7RdT4a2YslxZTUPMcaI5bFrCqUGjTDNVA-4x85CpFXnMjl9Y8DEkehg.png?r=059'},
      {idImage: Number(3),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRaZtokFRvU9P0SCNzzPKnQPebj8-cax1jadU-NYoLSigGbEMH_mjUIUg4GFqFveOP5ijDB95u3PHJ8BWsW5cB-ygQOLUk3kpQ.png?r=897'},
      {idImage: Number(4),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABaPrYDwD4CvUnQVHaXN4rqSzyCCbpyK6W4bMdGcLR7Nv29SbwT72oG6fYRyBYrv52IMV9bAEsSdfqPtj6sNv03Sd4xtlImG13g.png?r=34e'},
      {idImage: Number(5),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXV9m-1tH2CczQ748E6sw2GuoovSGTTCoXiTdaPK68bY6pxUIEL_wjltolJN-vBkoy_skZ32eNp2lFaQrSv7NMdCFyvnljIIvA.png?r=54a'},
      {idImage: Number(6),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABT4aLNvesdrUAA4tfNOT6YOJ_XetXTHrvunk3jCvOYivrcqJaIZubginpPfQjx3AAoC25j9MCVD_9w2E8kzWmkYd5VyvDeXboA.png?r=823'},
      {idImage: Number(7),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTy6R6hhOD1ECPRhQIhCI7dw8D_0ePVgEK7C-rd4BV3TFfz3fYVbL9VmPTPuJ6e3PI-HJt79qDEHgWxbAsLsFGWSXl5oz8hbsw.png?r=5fd'},
      {idImage: Number(8),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABek05gdpGN_ypnJActfZFW7tNl4jfCo3668HALDG6SH8DwaB7oVCOG0YMLZNh1CiOWld_HtQ4VJhExFjJ2W6H-w2p8CO0DMS0g.png?r=3c3'},
      {idImage: Number(9),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVy0BGoTOaj5BQ4NQDPopqWL8X1ZCnS1sLVmhxtKMLaDnnePNuquscUF0mQl_rvRRHi_pJKZ1_4M6SavQ_7hi8XOx2evCq47UQ.png?r=a29'},
      {idImage: Number(10),image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQy-r3BAVV4g7ynm7173md_RPD_YaS48pjCA5j65eG8D3mQSjc0TTLG9THYUDSa3aTTpD28oiSORrXyMJ_kAXiU3A3mlmEVUcQ.png?r=f45'},
    ]},
    /*
    {type:"Classic",
    TypePath:"text",idType: Number(1), images:[
      {idImage: (1),image:''},
      {idImage: Number(2),image:''},
      {idImage: Number(3),image:''},
      {idImage: Number(4),image:''},
      {idImage: Number(5),image:''},
      {idImage: Number(6),image:''},
      {idImage: Number(7),image:''},
      {idImage: Number(8),image:''},
      {idImage: Number(9),image:''},
    ]},*/
  ];


  ngOnInit(): void {
    console.log(this.ProfilsData.image+"---------"); 
    console.log(this.profileImage[0].images[0].image);
    console.log(this.profileImage[0].images[0].idImage);
   }

  
  ImagePath="Netflix-avatar1.png";




  customOptions: OwlOptions = {
    loop: true,
    autoWidth:false,
    autoHeight:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ["<div id='navTest' class='nav-button owl-prev' style='height:240px'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
      0: {
        items: 4
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
