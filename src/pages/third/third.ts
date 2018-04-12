import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FourthPage } from './../fourth/fourth';
/**
 * Generated class for the ThirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdPage');
  }
  
  animateView(){
    const animationsOptions = {
      animation: 'md-transition',
      duration: 1000
    }
    
    this.navCtrl.push(FourthPage, {}, animationsOptions);
  }

}
