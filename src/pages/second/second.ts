import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { ThirdPage } from './../third/third';
import { AnimationService, AnimationBuilder } from 'css-animator';
/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  @ViewChild('myElement') myElem;
  private animator: AnimationBuilder;
  constructor(public navCtrl: NavController,animationService: AnimationService) {
    this.animator = animationService.builder();
   // this.navCtrl.setRoot(SecondPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }
  tapEvent() {
    this.navCtrl.push(ThirdPage);
  }
  animateElem() {
    this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }
}
