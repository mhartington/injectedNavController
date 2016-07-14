import {Component} from '@angular/core';
import {Test} from '../../providers/test/test';
@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Test]
})
export class HomePage {
  constructor(
    private test: Test
  ) {

  }

  showLoading() {
    this.test.showLoading();
  }
}
