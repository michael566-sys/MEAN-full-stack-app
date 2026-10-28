import { Component, signal } from '@angular/core';
import { Post } from './posts/post.model';
@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})

// rename the base component to standardize
export class AppComponent {
  // protected readonly title = signal('mean-course');
  storedPosts: Post[] = [];  // type is Post[]
  onPostAdded(post: Post) {
    /* push() mutates the existing array in place: storedPosts keeps the SAME reference.
       This only shows up in the UI because PostListComponent sets
       `changeDetection: ChangeDetectionStrategy.Eager` (post-list.component.ts).
       Without it, this will NOT work:
       - Angular 22 components are OnPush by default.
       - An OnPush component is re-checked only when an @Input() receives a NEW reference,
         an event fires in its own template, a signal it reads changes, or it is marked dirty.
       - [posts]="storedPosts" still points at the same array after push(), so Angular sees
         "no change" and never re-renders the list (it keeps showing "No posts added yet!"),
         and ngOnChanges in the list does not fire either.
       - Eager (the old Default) re-checks the list on every change-detection pass, so the
         pushed item is picked up.
       Alternative that works without Eager: this.storedPosts = [...this.storedPosts, post]
       (new reference, so the OnPush list updates). */
    this.storedPosts.push(post); // => this will not change the post list from "No posts added yet!" to show the post
    //this.storedPosts = [...this.storedPosts, post];
    console.log(`post received at app component listener: ${post.title}, ${post.content}`);
  }
  ngOnChanges() {
      console.log(`posts received at app component listener: ${this.storedPosts}`);
   }
}
