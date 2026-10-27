import { Component, EventEmitter, Output } from "@angular/core"; // angular scans for certain features

//
@Component({ // component decorator
  selector: 'app-post-create',// selector can use the component
  templateUrl: './post-create.component.html', // location of the template
  standalone: false, // Angular 19 and later components are standalone by default
  // standalone means the component doesn't below to an NgModule, it declare what is needs itself,
    // no module needed, Other components, or the router, import the component directly.
  // NgModule: delare module and import give every component in it access to other moduldes, directives, and pipes
  styleUrls: [ './post-create.component.css' ]
}) 
export class PostCreateComponent {
  // enteredValue = ''; 
  // newPost = '';

  // // onAddPost(postInput: HTMLTextAreaElement) { 
  // //   console.dir(postInput);
  // //   this.newPost = this.enteredValue//postInput.value;
  // //   alert('Post added!')
  // // }

  // add posts
  enteredTitle = "";
  enteredContent = "";
  // 
  @Output() postCreated = new EventEmitter();

  onAddPost() { 
    const post = { 
      title: this.enteredTitle, 
      content: this.enteredContent 
    };
    this.postCreated.emit(post); // emit new event, pass post as argument
    console.log(`posts created: ${post.title}, ${post.content}`);
  }
}