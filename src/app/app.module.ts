import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ManagerProfilesComponent } from './manager-profiles/manager-profiles.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageComponent } from './manage/manage.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    HeaderComponent,
    ManagerProfilesComponent,
    EditProfilComponent,
    ManageComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
