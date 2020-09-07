import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-blank',
  templateUrl: './blank.page.html',
  styleUrls: ['./blank.page.scss'],
})
export class BlankPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  GoBack(){
    this.router.navigate(['/login'])
  }

}
