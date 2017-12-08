
angular.module('app').component('question', {
    templateUrl: './question.html',
    controllerAs: 'questionCtrl',
    bindings: {
        item: '<',
        action: '&',
        actionLabel: '@'
    }
})

