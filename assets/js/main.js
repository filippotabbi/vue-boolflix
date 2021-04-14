Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  index: 0,

  data: {
    scriviTxt: '',
    searchResultMovie:[],
    searchResultTV:[],
    searchResult:[],
    uri: 'https://api.themoviedb.org/3/',
    apikey: '6f4bba30f4fdd35743414ebb5116c305',
  },
  mounted () {

    },
  methods: {
    cercafilm: function(scriviTxt) {
      axios.get( `${this.uri}search/movie?api_key=${this.apikey}&language=it-IT&query= ` + scriviTxt)
      .then((response) => {
        this.searchResult = response.data.results;
      })
        axios.get( `${this.uri}search/tv?api_key=${this.apikey}&language=it-IT&query= ` + scriviTxt)
        .then((response) => {
          this.searchResultTV = response.data.results;
        })
      },
      getTitle: function(obj) {
        if (obj.title) {
          return obj.title
        }
        else {
          return (obj.name);
        }
      },
      getTitleOriginal: function(obj) {
        if (obj.original_title) {
          return obj.original_title
        }
        else {
          return (obj.original_name);
        }
      },
      getLang: function (obj) {
        let str = obj.original_language;
        return (str.toLowerCase());
      },
      getStar: function (rating) {
			let decimi = parseFloat(rating);
			let quinti = Math.round(decimi / 2);
			return quinti
		},
    getPoster: function (obj) {
      console.log(obj.poster_path);
      if (obj.poster_path) {
        return ('https://image.tmdb.org/t/p/w342/${film.poster_path}');
      }
      else {
        return this.noposter;
      }
  },



}



  })
