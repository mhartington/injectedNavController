import { Injectable } from '@angular/core';
import {NavController, Loading} from 'ionic-angular';
@Injectable()
export class Test {

  constructor(private nav: NavController) { }

  showLoading() {
    let loading = Loading.create({
      content: 'Please wait...'
    });

    this.nav.present(loading);

  }

}
