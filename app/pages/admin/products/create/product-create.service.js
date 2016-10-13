class ProductCreateService {
    constructor(firebase, toastService) {
        'ngInject';

        this.firebase = firebase;
        this.toastService = toastService;
    }

    createNewProduct(inputs) {
        if (inputs.title && inputs.category && inputs.price && inputs.imageUrl && inputs.amount && inputs.description) {
            inputs.promoted == null ? inputs.promoted = false : '';

            const createProductData = {
                'title': inputs.title,
                'promoted': inputs.promoted,
                'category': inputs.category,
                'price': inputs.price,
                'imageUrl': inputs.imageUrl,
                'amount': inputs.amount,
                'description': inputs.description,
                'created': new Date().toLocaleString('pl-PL')
            };

            const newProductKey = this.firebase.database().ref('api/v1').child('products').push().key;

            return this.firebase.database().ref(`api/v1/products/${newProductKey}`).set(createProductData)
                .then(this.responseSuccess(createProductData.title))
                .catch(this.responseWarning);
        }
    }

    responseSuccess(response) {
        this.toastService.showSuccessToast(`Category "${response} has been added.`);
    }

    responseWarning() {
        this.toastService.showWarningToast(`Something went wrong.`);
    }
}

export default ProductCreateService;
