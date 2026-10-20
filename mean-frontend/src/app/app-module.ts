import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent 
    // register the new PostCreateComponent to link the component class 
    // with html template
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
