class ProductsAdminController {
    constructor($mdMedia, $mdDialog, $location, firebase, dataService, toastService) {
        'ngInject';
        this.$mdMedia = $mdMedia;
        this.$mdDialog = $mdDialog;
        this.$location = $location;
        this.firebase = firebase;
        this.dataService = dataService;
        this.toastService = toastService;
    }

    $onInit() {
        this.redirectUser();
        this.getProducts();
        this.getCategories();
        this.getCategoryFromURL = this.$location.search().category;
    }

    redirectUser() {
        this.firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.$location.path('/');
            }
        });
    }

    getProducts() {
        this.dataService.getProducts();
    }

    getCategories() {
        this.dataService.getCategories()
            .then(categoriesData => {
                this.categoriesData = categoriesData;
            });
    }

    deleteProduct(productId, productTitle) {
        this.$mdDialog.show({
            controller: this.dialogDeleteProductFunction,
            templateUrl: 'deleteProductDialog.tmpl.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true
        })
            .then(n => {
                this.firebase.database().ref('api/v1/products').child(productId).remove();
                this.toastService.showSuccessToast(`Product '${productTitle}' has been removed`);
                this.productDataWithObjectKey = {};
                this.getProducts();
            })
            .catch(e => {
                console.log('Discard dialog box');
            });
    }

    dialogDeleteProductFunction($scope, $mdDialog) {
        $scope.delete = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    }
}

const ProductsAdminComponent = {
    controller: ProductsAdminController,
    template: require('./products.html')
};

export default ProductsAdminComponent;
