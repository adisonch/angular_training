import { Component } from "@angular/core";
import { authors } from "../data/author-list";

@Component({
  selector: "app-author-list",
  templateUrl: "./author-list.component.html",
  styleUrls: ["./author-list.component.scss"]
})
export class AuthorListComponent {
  authors = authors;
}
