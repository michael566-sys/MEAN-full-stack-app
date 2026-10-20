import { NgModule } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { AppComponent } from './app.component';
import { AppModule } from './app-module';
import { serverRoutes } from './app.routes.server';

// from main.ts, angular then parses the angular module, 
// register the components, import otehr modeules
// detects the bootstrap array, and check the pages running with selector App component
@NgModule({
  imports: [AppModule],
  providers: [provideServerRendering(withRoutes(serverRoutes))],
  bootstrap: [AppComponent],  // 
})
export class AppServerModule {}


// Difference between app.module vs appmodule.server: -- to be reviewed
// app.module: runs in browser, use main.ts to bootstrap, use 'BrowserModule, provideClientHydration()' to setup
// app.module.server: runs on server, use main.server.ts which exports to server.ts, use steup: provideServerRendering(withRoutes(serverRoutes)), plus serverRoutes from app.routes.server.ts, which sets RenderMode.Prerender
