angular.module("app").component("questionList", {
    templateUrl: 'src/components/question/questionList/questionList.html',
    controllerAs: "questionsCtrl",
    controller: function questionComp(mainSrvc) {
        // this.questions = mainSrvc.getQuestions();
            mainSrvc.getQuestions().then(response => {
                this.questions = response.data;
            });
        }
    });

// angular.module("app").controller("questionsCtrl", function($scope, mainSrvc) {
  
//     mainSrvc.getQuestions().then(response => {
//       $scope.questions = response.data;
//     });
//   ;
// });
