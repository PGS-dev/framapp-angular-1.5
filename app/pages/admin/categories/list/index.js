import CategoriesAdminComponent from './categories.component';
import './categories.scss';

const categoriesAdminModule = angular
    .module('app.pages.categoriesAdminModule', [])
    .component('categoriesAdminComponent', CategoriesAdminComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.categories', {
                url: '/categories',
                views: {
                    'main@': 'categoriesAdminComponent'
                }
            });
    })
    .name;

export default categoriesAdminModule;
