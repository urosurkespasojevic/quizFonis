angular.module('app', [
    
    'ngRoute',
    'ngAnimate',
    'ngStorage',
    'toastr',
    
    
    //route Module
    'app.route',
    
    
    //controllers
    'app.home',
    'app.quiz',
    'app.final',
    
    
    //services
    'app.services.quiz'
    
    
]);