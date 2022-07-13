import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { ManageComponent } from './manage/manage.component';
import { ManagerProfilesComponent } from './manager-profiles/manager-profiles.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: 'browser', component: ProfilComponent },
  { path: 'ManageProfiles', component: ManagerProfilesComponent },
  { path: 'editProfil', component: EditProfilComponent },
  { path: 'manage', component: ManageComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }