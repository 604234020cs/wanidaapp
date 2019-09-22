import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpComingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-up-coming',
  templateUrl: 'up-coming.html',
})
export class UpComingPage {
  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams,public upcomingmovie: MovieProvider) {
    this.loadnowdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpComingPage');
  }
  loadnowdata(){
    this.upcomingmovie.getUPcomingMovie().subscribe(nowmovies =>{
      this.moviesArray=nowmovies['results'];
    });
  
  }
  Moviedetail(upcomingmovie){
    this.navCtrl.push("MoviedetailPage",upcomingmovie);
  }
}
