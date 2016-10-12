class ProductEditService {
    constructor(firebase, toastService) {
        'ngInject';

        this.firebase = firebase;
        this.toastService = toastService;
    }

    updateProduct(inputs, productId) {
        if(inputs.title && inputs.category && inputs.price && inputs.imageUrl && inputs.amount && inputs.description) {
            const updateProductData = {
                'title': inputs.title,
                'promoted': inputs.promoted,
                'category': inputs.category,
                'price': inputs.price,
                'imageUrl': inputs.imageUrl,
                'amount': inputs.amount,
                'description': inputs.description,
                'edit': new Date().toLocaleString('pl-PL')
            };

            return this.firebase.database().ref(`api/v1/products/${productId}`).update(updateProductData)
                .then(this.responseSuccess(inputs.title))
                .catch(this.responseWarning);
        }
    }

    responseSuccess(response) {
        this.toastService.showSuccessToast(`Product "${response} has been updated.`);
    }

    responseWarning() {
        this.toastService.showSuccessToast(`Something went wrong.`);
    }
}

export default ProductEditService;
