import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArry = [{name: 'nida', telephone: '0882629408', imageUrl: 'assets/imgs/1.jpg'},
                 {name: 'sama', telephone: '0888342938', imageUrl: 'assets/imgs/2.jpg'},
                 {name: 'ning', telephone: '0900735950', imageUrl: 'assets/imgs/3.jpg'}, 
                 {name: 'nas', telephone: '0660083086', imageUrl: 'assets/imgs/4.jpg'},
                 {name: 'vee', telephone: '0864845806', imageUrl: 'assets/imgs/5.jpg'}
                 ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }
  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);
  }

}//end class
