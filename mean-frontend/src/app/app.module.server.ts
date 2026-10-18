import { NgModule } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { App } from './app.component';
import { AppModule } from './app-module';
import { serverRoutes } from './app.routes.server';

// from main.ts, angular then parses the angular module, 
// register the components, import otehr modeules
// detects the bootstrap array, and check the pages running with selector App component
@NgModule({
  imports: [AppModule],
  providers: [provideServerRendering(withRoutes(serverRoutes))],
  bootstrap: [App],  // 
})
export class AppServerModule {}
