import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"]
})
export class TopbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  toogleSidebar() {
    $(".app").toggleClass("is-collapsed");
  }

  toogleSearch(){
    $('.search-box, .search-input').toggleClass('active');
    $('.search-input input').focus();
  }
}
