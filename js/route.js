angular.module('app.route', [])

.config(['$routeProvider', function ($routeProvider) {


    $routeProvider

        .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })

        .when('/quiz/:id', {
            templateUrl: 'views/quiz.html',
            controller: 'QuizController'
        })
        .when('/final', {
            templateUrl: 'views/final.html',
            controller: 'FinalController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);