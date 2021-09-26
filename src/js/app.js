import GreenAudioPlayer from './component/GreenAudioPlayer.js';
import {settings} from './settings.js';
import {Songs} from './component/Songs.js';

export const app = {

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
  },

  initData: function(){
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.songs;
    fetch(url)
      .then(function(rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        // console.log('parsedResponse', parsedResponse);
        thisApp.data.songs = parsedResponse;
        thisApp.initMusic();
      });
  },

  initMusic: function(){
    const thisApp = this;
    for(let songsData in thisApp.data.songs){
      new Songs(thisApp.data.songs[songsData].id, thisApp.data.songs[songsData]);
    }
  }
};

app.player();
app.initData();


