import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddDocComponent } from './components/add-doc/add-doc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { DisplayDocumentComponent } from './components/display-document/display-document.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddDocComponent,
    EditDocumentComponent,
    DisplayDocumentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
