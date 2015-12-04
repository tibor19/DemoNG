namespace DemoNG.Components.MainPage {
    
    class MainPageController{
        static controllerName = 'mainPageCtrl';

        private data;

        static $inject = ['myService'];
        constructor(private myService: Services.IMyService) {
            myService.getData().then(data => this.data = data);
        }
    }
    angular.module('main')
        .controller(MainPageController.controllerName, MainPageController); 
}