angular.module('app.home', [])

.controller('HomeController', ['$scope', '$routeParams', '$log', '$location', '$rootScope', '$localStorage', 'toastr', 'QuizService', function ($scope, $routeParams, $log, $location, $rootScope, $localStorage, toastr, QuizService) {



    $routeParams.id = 0;
    $rootScope.title = 'My app';
    

    $localStorage.user = {
        firstName: "",
        lastName: "",
        email: "",
        correctAnswers: 0,
        answers: []
    };
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.email = '';

    function activate() {

        QuizService.getQuestions().then(function (res) {
            $localStorage.allQuestions = res.data;
            //$log.info($localStorage.allQuestions.length);
        });

    }

    activate();


    $scope.go = function () {

        $localStorage.user.firstName = $scope.firstName;
        $localStorage.user.lastName = $scope.lastName;
        $localStorage.user.email = $scope.email;
        $location.path('/quiz/' + $routeParams.id);


    };





}]);