class CategoryController {
    constructor($mdMedia, firebase, $firebaseObject, $state) {
        'ngInject';
        this.$mdMedia = $mdMedia;
        this.firebase = firebase;
        this.$firebaseObject = $firebaseObject;
        this.$state = $state;
    }

    $onInit() {
        this.getProducts();
    }

    getProducts() {
        const dbRefObjectProducts = this.firebase.database().ref('api/v1').child('products').orderByChild('category').equalTo(this.$state.params.id);
        this.productDataFire = this.$firebaseObject(dbRefObjectProducts);
    }

}

const CategoryViewComponent = {
    controller: CategoryController,
    template: require('./category.html')
};

export default CategoryViewComponent;
