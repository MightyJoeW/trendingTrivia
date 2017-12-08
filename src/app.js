angular.module("app", ['ui.router']).config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state({
            name: 'questions',
            url: '/',
            component: 'questionsList'
        })
    $urlRouterProvider
        .otherwise('/');
})

