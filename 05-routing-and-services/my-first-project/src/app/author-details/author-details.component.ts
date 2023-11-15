import { Component, OnInit } from "@angular/core";
import { authorDetails } from "../data/author-details";
import { AuthorDetail } from "../models/author-detail";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-author-details",
  templateUrl: "./author-details.component.html",
  styleUrls: ["./author-details.component.scss"]
})
export class AuthorDetailsComponent implements OnInit {
  details: AuthorDetail | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.paramMap.get("id") || '0';
    this.details = authorDetails.get(Number(id)) || null;
  }
}
