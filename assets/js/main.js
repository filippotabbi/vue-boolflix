Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  index: 0,

  data: {
    scriviTxt: '',
    searchResult:[],
    uri: 'https://api.themoviedb.org/3/',
    apikey: '6f4bba30f4fdd35743414ebb5116c305',
  },
  mounted () {
		axios.get( ` ${this.uri}configuration?api_key=${this.apikey} ` )
			.then((configs) => {
				let size = configs.data.images.logo_sizes[4];
				let base = configs.data.images.base_url;
				this.baseImgPath = base+size;

			})
      axios.get( ` ${this.uri}configuration?api_key=${this.apikey} ` )
        .then((configs) => {
          let size = configs.data.images.logo_sizes[4];
          let base = configs.data.images.base_url;
          this.baseImgPath = base+size;

        })
    },
  methods: {
    cercafilm: function(scriviTxt) {
      axios.get( `${this.uri}search/movie?api_key=${this.apikey}&language=it-IT&query= ` + scriviTxt)
      .then((response) => {
        this.searchResult = response.data.results;
      })
        axios.get( `${this.uri}search/tv?api_key=${this.apikey}&language=it-IT&query= ` + scriviTxt)
        .then((response) => {
          this.searchResult = response.data.results;
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
      }

}



  })
