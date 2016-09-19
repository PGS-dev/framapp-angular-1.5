import MainPageComponent from './main-page.component';
import './main-page.scss';

const mainPageModule = angular
    .module('app.pages.mainPageModule', [])
    .component('mainPageComponent', MainPageComponent)
    .config(($stateProvider) => {
        'ngInject';
        
        $stateProvider
            .state('app.main', {
                url: '/',
                views: {
                    'main@': {
                        template: '<main-page-component></main-page-component>'
                    }
                }
            });

    })
    .name;

export default mainPageModule;
    
