class ProductCreateService {
    constructor($http, firebase, toastService) {
        'ngInject';

        this.$http = $http;
        this.firebase = firebase;
        this.toastService = toastService;
    }

    createNewProduct(inputs) {
        if (inputs.promoted && inputs.title && inputs.category && inputs.price && inputs.imageUrl && inputs.amount && inputs.description) {
            inputs.promoted == null ? inputs.promoted = false : "";
            inputs.created = new Date();

            const newProductKey = this.firebase.database().ref('api/v1').child('products').push().key;

            return this.firebase.database().ref(`api/v1/products/${newProductKey}`).set(inputs)
                .then(this.responseSuccess(inputs.title))
                .catch(this.responseWarning);
        }
    }

    responseSuccess(response) {
        this.toastService.showSuccessToast(`Category "${response} has been added.`);
    }

    responseWarning() {
        this.toastService.showSuccessToast(`Something went wrong.`);
    }
}

export default ProductCreateService;
