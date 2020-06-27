import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbSidebarModule,
  NbMenuModule,
  NbSelectModule,
  NbActionsModule,
  NbCardModule, NbCalendarRangeModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({name: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSelectModule,
    FormsModule,
    NbActionsModule,
    NbCardModule,
    NbCalendarRangeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
