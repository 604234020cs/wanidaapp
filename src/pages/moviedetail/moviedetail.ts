import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the MoviedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviedetail',
  templateUrl: 'moviedetail.html',
})
export class MoviedetailPage {
  detail: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams,public moviedetail: MovieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviedetailPage');
    this.detail = this.navParams.data;
    console.log(this.detail);
  }
  Moviedetail(nowmovie){
    this.navCtrl.push("MoviedetailPage",nowmovie);
  }

}
