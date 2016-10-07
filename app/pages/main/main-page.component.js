class MainPageController {
    constructor($mdMedia, firebase, $firebaseObject) {
        'ngInject';
        this.$mdMedia = $mdMedia;
        this.firebase = firebase;
        this.$firebaseObject = $firebaseObject;
    }

    $onInit() {
        this.getProducts();
    }

    getProducts() {
        const dbRefObjectProducts = this.firebase.database().ref('api/v1').child('products').orderByChild('promoted').equalTo(true);
        this.promotedData = this.$firebaseObject(dbRefObjectProducts);
    }

}

const MainPageComponent = {
    controller: MainPageController,
    template: require('./main-page.html')
};

export default MainPageComponent;
