angular.module('app.quiz', [])

.controller('QuizController', ['$scope', '$routeParams', '$log', '$location', '$rootScope', '$localStorage', function ($scope, $routeParams, $log, $location, $rootScope, $localStorage) {



    $rootScope.title = 'Quiz!';
    $scope.user = $localStorage.user.firstName + ' ' + $localStorage.user.lastName;
    $scope.noQuestion = parseInt($routeParams.id) + 1;
    $scope.question = $localStorage.allQuestions[parseInt($routeParams.id)];
    $scope.noQuestion = parseInt($routeParams.id) + 1;
    $scope.q = $scope.question.fields;
    var counter = parseInt($routeParams.id);


    $scope.activate = function () {
        $scope.user = $localStorage.user.firstName + ' ' + $localStorage.user.lastName;
    };
    $scope.activate();


    $scope.submit = function () {

        if (myForm.answer.value == 'true') {
            $localStorage.user.correctAnswers++;
        }
        var userAnswer = {
            id: -1,
            answer: false
        };

        userAnswer.id = $scope.question.pk;
        userAnswer.answer = myForm.answer.value;
        var found = false;
        
        for (var i = 0; i < $localStorage.user.answers.length; i++) {
            if ($localStorage.user.answers[i].id == userAnswer.id) {
                    $localStorage.user.answers[i].answer = userAnswer.answer;
                    found = true;
            }
        }
        

        if(found === false){
            $localStorage.user.answers.push(userAnswer);
        }
        $routeParams.id++;
        if ($localStorage.allQuestions.length === $routeParams.id) {
            $location.path('/final');
            $log.info($localStorage.user);
        } else {

            $location.path('/quiz/' + $routeParams.id);
        }


        /*$rootScope.counterOfQuestions++;*/




    };



            }]);