import CategoryViewComponent from './category.component';
import './category.scss';

const categoryViewModule = angular
    .module('app.components.categoryViewModule', [])
    .component('categoryViewComponent', CategoryViewComponent)
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
