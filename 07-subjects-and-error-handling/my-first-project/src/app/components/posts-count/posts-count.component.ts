import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-posts-count',
  templateUrl: './posts-count.component.html',
  styleUrls: ['./posts-count.component.scss'],
})
export class PostsCountComponent {
  public postsCount = 0;
  public postsSubscription: Subscription | any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.postsSubscription = this.sharedService
      .getPosts()
      .subscribe((response) => {
        this.postsCount++;
      });
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
