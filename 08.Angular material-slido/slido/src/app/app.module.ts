import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from "@angular/material";
import { SidebarListComponent } from './components/shared/sidebar-list/sidebar-list.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { EventLiveComponent } from './components/events/event-live/event-live.component';
import { EventPostQuestionComponent } from './components/events/event-post-question/event-post-question.component';
import { EventQuestionInfoComponent } from './components/events/event-question-info/event-question-info.component';
import { MyFirestoreModule } from "./firebase.module";

@NgModule({
  declarations: [
    AppComponent,
    SidebarListComponent,
    ToolbarComponent,
    HomeComponent,
    EventLiveComponent,
    EventPostQuestionComponent,
    EventQuestionInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MyFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
