import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public urlInstagram = "https://www.instagram.com";
  public urlTwitter = "https://www.twitter.com";
  public urlFacebook = "https://www.facebook.com";
  public diaActual = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
