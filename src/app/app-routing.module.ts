import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { FilmWrapperComponent } from './film-wrapper/film-wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderBrowseComponent } from './header-browse/header-browse.component';
import { HomeBrowseComponent } from './home-browse/home-browse.component';
import { ManageComponent } from './manage/manage.component';
import { ManagerProfilesComponent } from './manager-profiles/manager-profiles.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: 'browser', component: ProfilComponent },
  { path: 'ManageProfiles', component: ManagerProfilesComponent },
  { path: 'editProfil', component: EditProfilComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'filmWrapper', component: FilmWrapperComponent },
  { path: 'browse', component: HomeBrowseComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'headerBrowser', component: HeaderBrowseComponent },
  { path: 'deleteProfile', component: DeleteProfileComponent },

  { path: '**', component: ProfilComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }