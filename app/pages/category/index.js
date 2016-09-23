import CategoryViewComponent from './category.component';
import './category.scss';
import CategoryService from './category.service';

const categoryViewModule = angular
    .module('app.components.categoryViewModule', [])
    .component('categoryViewComponent', CategoryViewComponent)
    .service('categoryService', CategoryService)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.category', {
                url: '/:id',
                views: {
                    'main@': 'categoryViewComponent'
                }
            });
    })
    .name;

export default categoryViewModule;
