Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  index: 0,

  data: {
    scriviTxt: '',
    searchResult:[],
  },
  mounted () {
		axios.get('https://api.themoviedb.org/3/configuration?api_key=6f4bba30f4fdd35743414ebb5116c305')
			.then((configs) => {
				let size = configs.data.images.logo_sizes[4];
				let base = configs.data.images.base_url;
				this.baseImgPath = base+size;

			})
    },
  methods: {
    cercafilm: function(scriviTxt) {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=6f4bba30f4fdd35743414ebb5116c305&language=it-IT&query='+ scriviTxt)
      .then((response) => {
        this.searchResult = response.data.results;

      })

    }
  }



  })
