import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeIt, 'it-IT');
@NgModule({
  imports: [BrowserModule, DynamicFormModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'it-IT' }]
})
export class AppModule {}
