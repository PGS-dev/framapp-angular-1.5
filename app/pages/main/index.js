import MainPageComponent from './main-page.component';
import './main-page.scss';
import MainService from './main-page.service';

const mainPageModule = angular
    .module('app.pages.mainPageModule', [])
    .component('mainPageComponent', MainPageComponent)
    .service('mainService', MainService)
    .config(($stateProvider) => {
        'ngInject';
        
        $stateProvider
            .state('app.main', {
                url: '/',
                views: {
                    'main@': 'mainPageComponent'
                }
            });
    })
    .name;

export default mainPageModule;
