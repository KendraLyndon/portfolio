app.factory('ProjectService', function(){
  return {
    all : [
      {
        name: 'Coffee Snob',
        image: '../images/coffee-snob-map.png',
        tech: 'Node.js  /  Express  /  Jade  /  PostgreSQL  /  Google Maps API  /  custom CSS',
        liveLink: 'http://coffeesnob-kl.herokuapp.com/',
        gitHub: 'https://github.com/KendraLyndon/Coffee-Snob',
        blurb: 'Use Coffee Snob to search cities for local cafes. '+
               'Users with an account can save their favorite cafes to '+
               'reference later.'
      },
      {
        name: 'FRM',
        image: '../images/FRM-screenshot.png',
        tech: 'React  /  Node.js  /  Express /  PostgreSQL',
        liveLink: null,
        gitHub: 'https://github.com/KendraLyndon/FRM',
        blurb: 'Manage your personal relationships with FRM. This site enables '+
               'users to set reminders to contact their friends and family '+
               'and create shareable lists.'
      },
      {
        name: 'Shoptacular',
        image: '../images/shoptacular-screenshot.png',
        tech: 'AngularJS  /  BootstrapCSS',
        liveLink: 'https://shopify-fdcbf.firebaseapp.com/',
        gitHub: 'https://github.com/KendraLyndon/MEANtea',
        blurb: 'With Shoptacular, users can browse various teas for sale, '+
                'add these teas to their shopping bag, and checkout.'
      }
    ]
  }
})
