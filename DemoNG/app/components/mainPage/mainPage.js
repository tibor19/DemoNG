var DemoNG;
(function (DemoNG) {
    var Components;
    (function (Components) {
        var MainPage;
        (function (MainPage) {
            var MainPageController = (function () {
                function MainPageController(myService) {
                    var _this = this;
                    this.myService = myService;
                    myService.getData().then(function (data) { return _this.data = data; });
                }
                MainPageController.controllerName = 'mainPageCtrl';
                MainPageController.$inject = ['myService'];
                return MainPageController;
            })();
            angular.module('main')
                .controller(MainPageController.controllerName, MainPageController);
        })(MainPage = Components.MainPage || (Components.MainPage = {}));
    })(Components = DemoNG.Components || (DemoNG.Components = {}));
})(DemoNG || (DemoNG = {}));
