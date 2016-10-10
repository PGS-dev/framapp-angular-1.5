import ProductCreateComponent from './product-create.component';
import './product-create.scss';
import ProductCreateService from './product-create.service';

const productCreateModule = angular
    .module('app.pages.productCreateModule', [])
    .component('productCreateComponent', ProductCreateComponent)
    .service('productCreateService', ProductCreateService)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.product-create', {
                url: '/product-create',
                views: {
                    'main@': 'productCreateComponent'
                }
            });
    })
    .name;

export default productCreateModule;
