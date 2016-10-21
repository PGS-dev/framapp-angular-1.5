import CategoryEditComponent from './category-edit.component';
import './category-edit.scss';
import CategoryEditService from './category-edit.service';

const categoryEditModule = angular
    .module('app.pages.categoryEditModule', [])
    .component('categoryEditComponent', CategoryEditComponent)
    .service('categoryEditService', CategoryEditService)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.category-edit', {
                url: '/categories/:id',
                views: {
                    'main@': 'categoryEditComponent'
                }
            });
    })
    .name;

export default categoryEditModule;
