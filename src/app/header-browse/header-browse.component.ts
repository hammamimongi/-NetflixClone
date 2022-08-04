import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-browse',
  templateUrl: './header-browse.component.html',
  styleUrls: ['./header-browse.component.css']
})
export class HeaderBrowseComponent implements OnInit {

  public hoverAnumation="";
  public OtherProfile=false;
  public basicNav:any;
  constructor() { }

  ngOnInit(): void {
  }

}
