import { Injectable } from '@angular/core';
import { Post } from './post.model';

// option 2: providedin => provide on root level, angular can find this
// at root level, the angular will have only one instance
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts]; 
    // add square bracket to create new array
    // add three dots take all elements of the posts array and add into the new array
    // add and remove element with the new array will not affect the original array
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post); // add post into the posts list
  }
}