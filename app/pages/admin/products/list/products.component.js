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
    }

    redirectUser() {
        this.firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.$location.path('/');
            }
        });
    }

    getProducts() {
        this.dataService.getProducts()
            .then(data => {
                this.productData = data;
            });
    }

    deleteProduct(productId, productTitle) {
        this.$mdDialog.show({
            locals: {selectedTitle: productTitle},
            controller: this.dialogDeleteProductFunction,
            templateUrl: 'deleteProductDialog.tmpl.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true
        })
            .then(n => {
                this.firebase.database().ref('api/v1/products').child(productId).remove();
                this.toastService.showSuccessToast(`Product '${productTitle}' has been removed`);
            })
            .catch(e => {
                console.log('Discard dialog box');
            });
    }

    dialogDeleteProductFunction($scope, $mdDialog, selectedTitle) {
        $scope.selectedTitle = selectedTitle;

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
