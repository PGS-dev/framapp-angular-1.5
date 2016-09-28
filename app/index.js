import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import localStorage from 'angular-local-storage';
import firebase from 'firebase';
import ngFirebase from 'angularfire';
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
        localStorage,
        ngFirebase,
        // App modules
        componentsModule,
        pagesModule
    ])
    .constant("BASE_URL", "https://woven-patrol-127817.firebaseio.com/api/v1")
    .constant("firebaseConfig", firebase_config)
    .constant("firebase", firebase)
    .config(($stateProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider) => {
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
                    'navbar@': 'navbarComponent',
                    'footer@': 'footerComponent'
                }
            });

        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default root;
