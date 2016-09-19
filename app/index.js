import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import componentsModule from './components';
import pagesModule from './pages';
import localStorage from 'angular-local-storage';
import './style/sass/common.scss';

const root = angular
    .module('app', [
        // 3rd party modules
        uiRouter,
        ngMaterial,
        ngMessages,
        localStorage,
        // App modules
        componentsModule,
        pagesModule
    ])
    .constant("categories", "https://project-5613440220430148247.firebaseio.com/api/v1/categories.json")
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
                    'navbar@': 'navbarComponent',
                    'footer@': 'footerComponent'
                }
            });

        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default root;
