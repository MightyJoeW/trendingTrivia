// angular.module("app").component("questionList", {
//   controllerAs: "questionsCtrl",

//   controller: function questionComp(mainSrvc) {
//     // this.questions = mainSrvc.getQuestions();
//     mainSrvc.getQuestions().then(response => {
//       this.questions = response.data;
//     });
//   }
// });

angular.module("app").controller("questionsCtrl", function($scope, mainSrvc) {
  $scope.getQuestions = function() {
    mainSrvc.getQuestions().then(response => {
      $scope.questions = response.data;
    });
  };
});
