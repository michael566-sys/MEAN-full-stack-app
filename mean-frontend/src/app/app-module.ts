import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent 
    // register the new PostCreateComponent to link the component class 
    // with html template
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
