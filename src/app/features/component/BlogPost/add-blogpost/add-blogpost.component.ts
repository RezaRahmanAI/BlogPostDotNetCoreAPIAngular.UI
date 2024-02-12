import { Component } from '@angular/core';
import { AddBlogPost } from '../../../models/BlogPost/add-blogpost-request.model';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrl: './add-blogpost.component.css',
})
export class AddBlogpostComponent {
  model: AddBlogPost;

  constructor() {
    this.model = {
      title: '',
      description: '',
      content: '',
      urlHandle: '',
      featureImgUrl: '',
      createdDate: new Date(),
      author: '',
      isVisible: false,
    };
  }
  
  onSubmit(): void {
    console.log(this.model);
  }
}
