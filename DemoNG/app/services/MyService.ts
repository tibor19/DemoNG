namespace DemoNG.Services {

    export interface IMyService {
        getData(): ng.IPromise<string>;
    }
    class MyService implements IMyService {

        private data : string;
        static $inject = ['$routeParams', '$q'];
        constructor($routeParams: ng.route.IRouteParamsService, private $q: ng.IQService) {
            console.log($routeParams);
            this.data = 'Hello World from MyService';
        }
        getData(): ng.IPromise<string>{
            return this.$q.when(this.data);
        }
    }
    angular.module(moduleName).service('myService', MyService);
    // angular.module('main').factory('myService', () => new MyService());
}