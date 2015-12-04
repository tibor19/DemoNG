var DemoNG;
(function (DemoNG) {
    angular.module('main', [DemoNG.Services.moduleName, 'ngRoute']).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: '/app/components/mainPage/mainPage.html',
                controller: 'mainPageCtrl',
                controllerAs: 'vm'
            });
            $routeProvider.when('/second', {
                templateUrl: '/app/components/secondPage/secondPage.html'
            });
        }]);
})(DemoNG || (DemoNG = {}));
