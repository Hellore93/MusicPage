import { templates, select, settings } from '../settings.js';
import utils from '../utils.js';
import GreenAudioPlayer from './GreenAudioPlayer.js';

export class Songs{
  constructor(id, data){
    const thisSongs = this;
    thisSongs.id = id;
    thisSongs.data = data;
    thisSongs.player();
    thisSongs.renderInMenu();
    thisSongs.getElement();
  }
  renderInMenu(){
    const thisSongs = this;
    const generatedHTML = templates.songList(thisSongs.data);
    thisSongs.element = utils.createDOMFromHTML(generatedHTML);
    const songContainer = document.querySelector(select.containerOf.song);
    songContainer.appendChild(thisSongs.element);
    console.log(thisSongs.element);
    // const audioPlayer = document.querySelectorAll(settings.db.player);
    // console.log(audioPlayer);

    // const playPlayer = document.querySelectorAll('.player1').then(playPlayer.classList.add('player'));
    // console.log(playPlayer);
    // playPlayer = classList.add(settings.db.player);
    // thisSongs.player = thisSongs.dom.querySelector('.player1');
    // console.log(thisSongs.dom.player);

  }

  player(){
    document.addEventListener('DOMContentLoaded', function(){
      GreenAudioPlayer.init({
        selector: '.player',
        stopOthersOnPlay: true
      });
      GreenAudioPlayer.init({
        selector: '.player-with-download',
        stopOthersOnPlay: true,
        showDownloadButton: true,
        enableKeystrokes: true
      });

      GreenAudioPlayer.init({
        selector: '.player-with-accessibility',
        stopOthersOnPlay: true,
        enableKeystrokes: true
      });
    });
  }

  getElement(){
    const thisSongs = this;
    thisSongs.song = thisSongs.element.querySelector(settings.db.player);
    console.log('get element', thisSongs.song);
    thisSongs.song.classList.add('player');
    thisSongs.song = thisSongs.player();
  }

  // initPlayer(){
  //   const thisSongs = this;
  // }
}