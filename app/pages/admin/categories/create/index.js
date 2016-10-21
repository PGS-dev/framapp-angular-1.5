import CategoryCreateComponent from './category-create.component';
import './category-create.scss';
import CategoryCreateService from './category-create.service';

const categoryCreateModule = angular
    .module('app.pages.categoryCreateModule', [])
    .component('categoryCreateComponent', CategoryCreateComponent)
    .service('categoryCreateService', CategoryCreateService)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.category-create', {
                url: '/category-create',
                views: {
                    'main@': 'categoryCreateComponent'
                }
            });
    })
    .name;

export default categoryCreateModule;
