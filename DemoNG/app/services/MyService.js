var DemoNG;
(function (DemoNG) {
    var Services;
    (function (Services) {
        var MyService = (function () {
            function MyService($routeParams, $q) {
                this.$q = $q;
                console.log($routeParams);
                this.data = 'Hello World from MyService';
            }
            MyService.prototype.getData = function () {
                return this.$q.when(this.data);
            };
            MyService.$inject = ['$routeParams', '$q'];
            return MyService;
        })();
        angular.module(Services.moduleName).service('myService', MyService);
    })(Services = DemoNG.Services || (DemoNG.Services = {}));
})(DemoNG || (DemoNG = {}));
