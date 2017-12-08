
angular.module('app').component('question', {
    templateUrl: './../../../question.html',
    controllerAs: 'questionCtrl',
    controller: function questionComp(mainSrvc, $state) {
        mainSrvc.getQuestions().then(response => {
            this.questions = response.data
            console.log(response.data)
        })
    }
})

