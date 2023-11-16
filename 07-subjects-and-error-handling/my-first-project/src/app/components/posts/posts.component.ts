import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  public posts: any[] = [];
  public postsSubscription: Subscription | any;

  constructor(private shareService: SharedService) {}

  ngOnInit(): void {
    this.postsSubscription = this.shareService
      .getPosts()
      .subscribe((response) => {
        this.posts.push(response);
      });
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
