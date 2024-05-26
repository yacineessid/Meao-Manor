import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { CatDetailsComponent } from 'src/components/cat-details/cat-details.component';
import { CatListComponent } from 'src/components/cat-list/cat-list.component';
import { SucessStoryComponent } from 'src/components/sucess-story/sucess-story.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatDetailsComponent,
    CatListComponent,
    SucessStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
