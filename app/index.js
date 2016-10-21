import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import localStorage from 'angular-local-storage';
import firebase from 'firebase';
import ngFirebase from 'angularfire';
import ngLoading from 'angular-loading-bar';
import componentsModule from './components';
import pagesModule from './pages';
import './style/sass/common.scss';
import * as firebase_config from '../config/firebase';

const root = angular
    .module('app', [
        // 3rd party modules
        uiRouter,
        ngMaterial,
        ngMessages,
        ngAnimate,
        localStorage,
        ngFirebase,
        ngLoading,

        // App modules
        componentsModule,
        pagesModule
    ])
    .constant("BASE_URL", firebase_config.BASE_URL)
    .constant("firebaseConfig", firebase_config)
    .constant("firebase", firebase)
    .config(($stateProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider, cfpLoadingBarProvider) => {
        'ngInject';

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        localStorageServiceProvider.setPrefix('framapp');

        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    'navbar@': 'navbarComponent'
                }
            });

        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');

        cfpLoadingBarProvider.includeBar = true;
    })
    .name;

export default root;
