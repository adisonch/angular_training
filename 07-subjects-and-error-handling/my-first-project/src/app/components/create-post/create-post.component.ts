import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  public postForm: FormGroup | any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      name: new FormControl(''),
      post: new FormControl(''),
    });
  }
  
  submit() {
    const post = {
      name: this.postForm.get('name').value,
      post: this.postForm.get('post').value,
    };
    this.sharedService.setPost(post);
  }
}
