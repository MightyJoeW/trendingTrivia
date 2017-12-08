angular.module("app").component("questionList", {
    
    controllerAs: "questionsCtrl",

  controller: function(mainSrvc) {
    // this.questions = mainSrvc.getQuestions();
    mainSrvc.getQuestions().then(response => {
        this.questions = response.data
    })
  }
});
