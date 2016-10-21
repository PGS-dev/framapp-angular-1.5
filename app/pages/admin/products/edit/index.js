import ProductEditComponent from './product-edit.component';
import './product-edit.scss';
import ProductEditService from './product-edit.service';

const productEditModule = angular
    .module('app.pages.productEditModule', [])
    .component('productEditComponent', ProductEditComponent)
    .service('productEditService', ProductEditService)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.product-edit', {
                url: '/products/:id',
                views: {
                    'main@': 'productEditComponent'
                }
            });
    })
    .name;

export default productEditModule;
