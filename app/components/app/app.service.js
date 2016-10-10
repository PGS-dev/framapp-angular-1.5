class DataService  {
    constructor(firebase, toastService, $firebaseObject) {
        'ngInject';

        this.firebase = firebase;
        this.toastService = toastService;
        this.$firebaseObject = $firebaseObject;
    }

    getCategories() {
        const dbRefObjectCategories = this.firebase.database().ref('api/v1').child('categories');
        const categoriesDataFire = this.$firebaseObject(dbRefObjectCategories);

        return categoriesDataFire.$loaded().then(responseCategories => {
            return responseCategories;
        });
    }

}

export default DataService ;
