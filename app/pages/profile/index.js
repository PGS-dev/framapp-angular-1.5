import ProfileComponent from './profile.component';
import './profile.scss';
import ProfileService from './profile.service';

const profileModule = angular
    .module('app.pages.profileModule', [])
    .component('profileComponent', ProfileComponent)
    .service('profileService', ProfileService)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.profile', {
                url: '/profile',
                views: {
                    'main@': 'profileComponent'
                }
            });
    })
    .name;

export default profileModule;
