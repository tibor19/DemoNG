namespace DemoNG {

    interface myRootService extends ng.IRootScopeService {
        message: string;
    }

    angular.module('main', [Services.moduleName, 'ngRoute']).
        config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
            $routeProvider.when('/', {
                templateUrl: '/app/components/mainPage/mainPage.html',
                controller: 'mainPageCtrl',
                controllerAs: 'vm'

            });
            $routeProvider.when('/second', {
                templateUrl: '/app/components/secondPage/secondPage.html'
                //controller: 'mainPageCtrl',
                //controllerAs: 'vm'

            });
        }]);
    //    .run(function ($rootScope: myRootService, myService: Services.IMyService) {
    //        myService.getData()
    //            .then(data => $rootScope.message = data);
    //````});
}