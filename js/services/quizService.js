angular.module('app.services.quiz', [])

.factory('QuizService', ['$http', function ($http) {

    var service = {};

    service.getQuestions = function () {

        return $http.get('../app.json');

    };

    service.sendUser = function (user) {
        return $http.post('', user);
    };

    return service;


}]);
