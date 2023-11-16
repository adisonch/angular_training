import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsCountComponent } from './components/posts-count/posts-count.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { ErrorHandlingDemoComponent } from './error-handling-demo/error-handling-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    PostsComponent,
    PostsCountComponent,
    ErrorHandlingDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
