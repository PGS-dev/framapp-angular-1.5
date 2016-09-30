import CategoryViewComponent from './category.component';
import './category.scss';
import CategoryService from './category.service';

const categoryViewModule = angular
    .module('app.pages.categoryViewModule', [])
    .component('categoryViewComponent', CategoryViewComponent)
    .service('categoryService', CategoryService)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.category', {
                url: '/category/:id',
                views: {
                    'main@': 'categoryViewComponent'
                }
            });
    })
    .name;

export default categoryViewModule;
