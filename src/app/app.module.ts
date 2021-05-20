import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { ExtendedMatTableModule } from './modules/extended-mat-table/extended-mat-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ExtendedMatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
