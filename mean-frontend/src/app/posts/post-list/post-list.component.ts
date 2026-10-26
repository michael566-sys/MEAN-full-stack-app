import { Component } from "@angular/core";

/* @Component is a decorator: it sits on top of a class and tells Angular
   "this class is a component", not just a plain TypeScript class.
   The object inside is the component's configuration. */
@Component({
  // custom HTML tag: use this component with <app-post-list></app-post-list> in another template
  selector: 'app-post-list',
  // the HTML file that defines what this component displays
  templateUrl: './post-list.component.html',
  // false = not self-contained; it must be declared in an NgModule's `declarations` array
  // (e.g. app-module.ts) before Angular recognises <app-post-list>
  standalone: false,
  styleUrls: [ './post-list.component.css' ]
})
/* A normal TypeScript class that holds the component's data and logic
   (properties and methods). It is empty for now, so there is no logic yet.
   `export` lets other files import it, e.g. app-module.ts to register it. */
export class PostListComponent {
   // add posts to the post list
   posts = [
      { title: 'First Post', content: "This is the first post's content" },
      { title: 'Second Post', content: "This is the second post's content" },
      { title: 'Third Post', content: "This is the third post's content" }
   ];
   
}