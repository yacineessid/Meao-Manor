import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/components/about-us/about-us.component';
import { CatDetailsComponent } from 'src/components/cat-details/cat-details.component';
import { CatListComponent } from 'src/components/cat-list/cat-list.component';
import { PrivacyComponent } from 'src/components/privacy/privacy.component';
import { SucessStoryComponent } from 'src/components/sucess-story/sucess-story.component';

const routes: Routes = [
  { path: 'catList', component: CatListComponent },
  { path: 'catDetails/:id', component: CatDetailsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: AboutUsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'success-stories', component: SucessStoryComponent },


  // { path: '', redirectTo: '/catList', pathMatch: 'full' },
  // { path: '**', component: CatListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
