import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Post } from "../post.model";

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
  // `Eager` is the old `Default` behaviour, so the list re-checks every time and sees the pushed item.
  // (Angular 22 components are OnPush by default, which ignores push() because the array reference is unchanged.)
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: [ './post-list.component.css' ]
})
/* A normal TypeScript class that holds the component's data and logic
   (properties and methods). It is empty for now, so there is no logic yet.
   `export` lets other files import it, e.g. app-module.ts to register it. */
export class PostListComponent {
   // add posts to the post list
   // posts = [
   //    { title: 'First Post', content: "This is the first post's content" },
   //    { title: 'Second Post', content: "This is the second post's content" },
   //    { title: 'Third Post', content: "This is the third post's content" }
   // ];
   // this post list might be fetched from back end, so we don't know in advance how many elements I need
   // need something dynamically looping it 

   // now we want to receive the posts from create post component
   @Input() posts: Post[] = [];
   ngOnChanges() {
      console.log(`posts lists: ${this.posts}`);
   }
   // bind posts from outside only for the 
}