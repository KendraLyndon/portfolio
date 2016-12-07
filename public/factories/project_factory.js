app.factory('ProjectService', function(){
  return {
    all : [
      {
        name: 'Pianissimo',
        first: true,
        images: ['../images/PianissimoSplash.jpg'],
        video: 'https://www.youtube.com/embed/rJhstTNNCgM',
        tech: 'Android Studio  |  Java  |  XML',
        liveLink: 'https://play.google.com/store/apps/details?id=com.kendralyndon.pianopractice&hl=en',
        gitHub: 'https://github.com/KendraLyndon/Pianissimo',
        blurb: 'Native app featuring an interactive piano, available in '+
               'the Google Play store. '+
               'Imitates the natural tones of a grand piano with a full '+
               'scrollable keyboard.'
      },
      {
        name: 'CoffeeSnob',
        images: ['../images/coffee-snob-scrnsht.png'],
        video: null,
        tech: 'Node.js  |  Express  |  Jade  |  PostgreSQL  |  Google Maps API',
        liveLink: 'http://coffeesnob-kl.herokuapp.com/',
        gitHub: 'https://github.com/KendraLyndon/Coffee-Snob',
        blurb: 'Web-based app where users can find local coffee shops '+
        'in their city and save their favorite cafes to their account.'
      },
      {
        name: 'Shoptacular',
        images: ['../images/shoptacular-scrnsht.png'],
        video: null,
        tech: 'AngularJS  |  BootstrapCSS',
        liveLink: 'https://shopify-fdcbf.firebaseapp.com/',
        gitHub: 'https://github.com/KendraLyndon/MEANtea',
        blurb: 'E-commerce shopping cart where users can add items and checkout.'
      }
    ]
  }
})
