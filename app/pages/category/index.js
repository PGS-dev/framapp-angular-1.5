import CategoryViewComponent from './category.component';
import './category.scss';

const categoryViewModule = angular
    .module('app.pages.categoryViewModule', [])
    .component('categoryViewComponent', CategoryViewComponent)
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
