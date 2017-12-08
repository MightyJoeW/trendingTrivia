angular.module("app").service("mainSrvc", function($http) {
  this.getQuestions = function() {
    const apiUrl = "https://practiceapi.devmountain.com";
    return $http.get(`${apiUrl}/api/trivia/questions`);
  };
});
