import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SSchedulePickerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-s-schedule-picker',
  templateUrl: 's-schedule-picker.html',
})
export class SSchedulePickerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SSchedulePickerPage');
  }
  public schedule = {
    date: '2017-08-19',
    timeStart: '07:30',
    timeEnd: '08:30'
  }

}
