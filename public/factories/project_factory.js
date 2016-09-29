app.factory('ProjectService', function(){
  return {
    all : [
      {
        name: 'Coffee Snob',
        image: '../images/coffee-snob-map.png',
        tech: 'Node.js  /  Express  /  Jade  /  PostgreSQL  /  Google Maps API  /  custom CSS',
        liveLink: 'http://coffeesnob-kl.herokuapp.com/',
        gitHub: 'https://github.com/KendraLyndon/Coffee-Snob',
        blurb: 'Enables users to search cities for local cafes and save their '+
               'favorite coffee shops'
      },
      {
        name: 'FRM',
        image: '../images/FRM-screenshot.png',
        tech: 'React  /  Node.js  /  Express /  PostgreSQL',
        liveLink: null,
        gitHub: 'https://github.com/KendraLyndon/FRM',
        blurb: 'Manages personal relationships through reminders '+
               'and shareable lists'
      },
      {
        name: 'Shoptacular',
        image: '../images/shoptacular-screenshot.png',
        tech: 'AngularJS  /  BootstrapCSS',
        liveLink: 'https://shopify-fdcbf.firebaseapp.com/',
        gitHub: 'https://github.com/KendraLyndon/MEANtea',
        blurb: 'Shopping app for buying unique teas'
      }
    ]
  }
})
