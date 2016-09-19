import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import componentsModule from './components';
import pagesModule from './pages';
import translateModule from './translate';
import localStorage from 'angular-local-storage';


import './style/sass/common.scss';

const root = angular
    .module('app', [
        uiRouter,         // 3rd party modules
        ngMaterial,       //
        ngMessages,       //
        localStorage,     //
        translateModule,  //
        componentsModule, // app modules
        pagesModule      //
    ])
    .config(($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider, localStorageServiceProvider) => {
        'ngInject';

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        localStorageServiceProvider
            .setPrefix('framapp');

        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    'navbar@': {
                        template: '<navbar-component></navbar-component>'
                    },
                    'footer@': {
                        template: '<footer-component></footer-component>'
                    }
                }
            });

        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange');
    })
    .name;

export default root;

