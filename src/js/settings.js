export const select = {
  containerOf: {
    HOME: '#home',
    SEARCH: '#search',
    DISCOVER: '#discover',
    song:'#song-list',
  },

  templateOf:{
    homePage: '#template-home-page',
    songList: '#template-song-list',
  },
};

export const settings = {
  db:{
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    songs: 'songs',
    player: '.player-script'
  },

  player:{
    author: '.author',
    filename: '.filename',
    player:'player'
  }
};

export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  songList: Handlebars.compile(document.querySelector(select.templateOf.songList).innerHTML),

};
