import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export  class PopularPage {
  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';


  constructor(public navCtrl: NavController, public navParams: NavParams,public popularmovie: MovieProvider) {
    this.loadnowdata();
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }
  loadnowdata(){
    this.popularmovie.getPopularMovie().subscribe(nowmovies =>{
      this.moviesArray=nowmovies['results'];
    });
  
  }
  Moviedetail(upcomingmovie){
    this.navCtrl.push("MoviedetailPage",upcomingmovie);
  }
}
