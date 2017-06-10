import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { FavoriteProvider } from '../../providers/favorite/favorite';

@IonicPage()
@Component({
  selector: 'page-film-details',
  templateUrl: 'film-details.html',
})
export class FilmDetailsPage {
  film: any;
  isFavorite = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public favoriteProvider: FavoriteProvider,
    private emailComposer: EmailComposer) {
    this.film = this.navParams.get('film');
    this.favoriteProvider.isFavorite(this.film.episode_id).then(isFav => {
      this.isFavorite = isFav;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmDetailsPage');
  }

  favoriteFilm() {
    this.favoriteProvider.favoriteFilm(this.film.episode_id).then(() => {
      this.isFavorite = true;
    });
  }

  unfavoriteFilm() {
    this.favoriteProvider.unfavoriteFilm(this.film.episode_id).then(() => {
      this.isFavorite = false;
    });
  }

  shareFilm() {
    let email = {
      to: 'billy.nicart@gmail.com',
      subject: 'I love this one: ' + this.film.title,
      body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
      isHtml: true
    };

    this.emailComposer.open(email);
  }

  goBack() {
    this.navCtrl.pop();
  }

}
