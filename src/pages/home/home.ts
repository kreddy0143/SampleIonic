import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from './../second/second';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username')uname;
  @ViewChild('password')password;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
    
  }

  signIn() {
    if(this.uname.value=="walking" && this.password.value=="tree"){
      this.navCtrl.push(SecondPage);
      let alert = this.alertCtrl.create({
        title: 'Login Success!',
        buttons: ['OK']
      });
      alert.present();
      this.uname.value='';
      this.password.value='';
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Username or Password do not match!',
        buttons: ['OK']
      });
      alert.present();
    }
    }
  }

