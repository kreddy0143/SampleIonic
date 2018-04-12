import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from './../../providers/rest/rest';
/**
 * Generated class for the FourthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fourth',
  templateUrl: 'fourth.html',
})
export class FourthPage {

  countries: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public rest: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FourthPage');
    this.getCountries()
  }
   getCountries() {
    this.rest.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }
}
