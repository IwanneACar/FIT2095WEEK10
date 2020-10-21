import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ListactorsComponent } from './listactors/listactors.component';
import { AddactorComponent } from './addactor/addactor.component';
import { UpdateactorComponent } from './updateactor/updateactor.component';
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Actor2movieComponent } from './actor2movie/actor2movie.component';

const appRoutes: Routes= [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "addmovie", component: AddmovieComponent },
  { path: "listmovies", component: ListmoviesComponent },
  { path: "updatemovie", component: UpdatemovieComponent },
  { path: "deletemovie", component: DeletemovieComponent },
  { path: "actor2movie", component: Actor2movieComponent },
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  { path: "**", component:NotfoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DeleteactorComponent,
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    AddmovieComponent,
    ListmoviesComponent,
    UpdatemovieComponent,
    DeletemovieComponent,
    NotfoundComponent,
    Actor2movieComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,RouterModule.forRoot(appRoutes,{useHash: true})
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
