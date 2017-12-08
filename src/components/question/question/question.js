angular.module("app").controller("questionCtrl", function($scope, mainSrvc) {
  $scope.test = "connected";
  mainSrvc.getQuestions().then(response => {
    $scope.questions = response.data;
  });
});
