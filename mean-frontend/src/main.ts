import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';

// this line use platformBrowser
// bootstrapModule => pass link from AppModule
// start angular app with this module in mind
platformBrowser().bootstrapModule(AppModule, {
  
})
  .catch(err => console.error(err));
