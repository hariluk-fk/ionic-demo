import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'deeplink',    // for navCtrl.push()
  segment: 'deeplink'  // becomes http(s)://<server>/#/search URL
})

@Component({
  selector: 'app-deeplink',
  templateUrl: './deeplink.page.html',
  styleUrls: ['./deeplink.page.scss'],
})
export class DeeplinkPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
