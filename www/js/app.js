// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


angular.module('Blooming', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('list',{
        url:'/list:{user_id}',
        templateUrl:'templates/list.html',
        controller:'listController'
      })

      .state('flowinglist',{
        cache: false,
        url:'/flowinglist:{user_id}',
        templateUrl:'templates/flowinglist.html',
        controller:'flowinglistController'
      })

      .state('detail',{
        url:'/detail:{user_id}/{place_id}/{name}',
        templateUrl:'templates/detail.html',
        controller:'detailController'
      })

      .state('login',{
        url:'/login',
        templateUrl:'templates/login.html',
        controller:'loginController'
      })

      .state('bloom',{
        url:'/bloom:{user_id}/{variety_id}/{place_id}/{name}',
        templateUrl:'templates/bloom.html',
        controller:'bloomController'
      })

      .state('scan',{
        url:'/scan:{clonecode}',
        templateUrl:'templates/scan.html',
        controller:'scanController'
      })

    $urlRouterProvider.otherwise('/login')
})

.service('GlobalService',function(){
  return {
      // hostname : "http://www.canebreeding.com/webservice/"
      hostname : "http://192.168.8.1/canebreeding/webservice/"
  }

});
