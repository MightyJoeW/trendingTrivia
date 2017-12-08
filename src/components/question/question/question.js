
angular.module('app').component('question', {
    templateUrl: 'src/components/question/question/question.html',
    controllerAs: 'questionCtrl',
    bindings: {
        item: '<',
        action: '&',
        actionLabel: '@'
    }
})

