angular.module('app.final', [])

.controller('FinalController', ['$scope', '$rootScope', '$location', '$log', '$localStorage',
                                function ($scope, $rootScope, $location, $log, $localStorage) {


        $rootScope.title = 'Čestitamo!!!';
        $scope.user = $rootScope.firstName + ' ' + $rootScope.lastName;
        $log.info($localStorage.user.correctAnswers);
        $scope.score = $localStorage.user.correctAnswers;

}]);