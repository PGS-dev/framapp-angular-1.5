class CategoriesAdminController {
    constructor($mdMedia, $location, firebase) {
        'ngInject';
        this.$mdMedia = $mdMedia;
        this.$location = $location;
        this.firebase = firebase;
    }

    $onInit() {
        this.redirectUser();
    }

    redirectUser() {
        this.firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.$location.path('/');
            }
        });
    }
}

const CategoriesAdminComponent = {
    controller: CategoriesAdminController,
    template: require('./categories.html')
};

export default CategoriesAdminComponent;
