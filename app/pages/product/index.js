import ProductViewComponent from './product.component';
import './product.scss';

const productViewModule = angular
    .module('app.pages.productViewModule', [])
    .component('productViewComponent', ProductViewComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app.product', {
                url: '/product/:id',
                views: {
                    'main@': 'productViewComponent'
                }
            });
    })
    .name;

export default productViewModule;
