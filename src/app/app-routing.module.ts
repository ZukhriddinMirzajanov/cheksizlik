import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatasComponent } from './datas/datas.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReadingComponent } from './reading/reading.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "malumotlar", component: DatasComponent },
  { path: "malumotlar/:_id", component: ReadingComponent },
  { path: "data", component: AdminComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
