import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDocComponent } from './components/add-doc/add-doc.component';
import { DisplayDocumentComponent } from './components/display-document/display-document.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'addDoc' , component:AddDocComponent},
  {path:'displayDocument/:id' , component:DisplayDocumentComponent},
  {path:'editDocument/:id' , component:AddDocComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
