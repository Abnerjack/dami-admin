'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}])


.directive('routerLinkActive', ['$location', function($location) {
    return function(scope, elm, attrs) {
        scope.$on('$stateChangeSuccess',function (event){
           var path = $location.path();
            console.log(path);
           var href= elm.find('a').attr('href').substr(2);
           if(path.indexOf(href)!=-1){
             elm.addClass('active');
           }else{
               elm.removeClass('active');
           }
        })
    };
}]);