app.controller('ProjectController',function($scope, ProjectService){
  $scope.vw = {};
  $scope.vw.projects = ProjectService.all;
})
