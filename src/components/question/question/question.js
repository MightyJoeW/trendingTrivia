angular.module('app')
.controller('questionCtrl', function($scope, mainSrvc){
    $scope.test = "connected"
    mainSrvc.getPackages().then(response => {
        $scope.questions = response.data
        
    })
})