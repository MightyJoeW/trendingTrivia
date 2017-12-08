angular.module("app").factory("mainSrvc", function($http) {
  return {
    getQuestions() {
      const apiUrl = "https://practiceapi.devmountain.com/";
      return $http.get(`${apiUrl}/api/trivia/questions`).then(console.log);
    }
  };
});
