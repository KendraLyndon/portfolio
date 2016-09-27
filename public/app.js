var app = angular.module('app', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $locationProvider) {
  $stateProvider
    .state('index', {
      url: "/",
      views: {
        "home": { templateUrl: "partials/home.html" },
        "about": { templateUrl: "partials/about.html" },
        "projects": { templateUrl: "partials/projects.html",
                      controller: "ProjectController"
                    },
        "skills": { templateUrl: "partials/skills.html" },
        "contact": { templateUrl: "partials/contact.html" }
      }
    })
    $locationProvider.html5Mode(true);
});
