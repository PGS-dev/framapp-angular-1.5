class CategoriesAdminController {
    constructor($mdMedia, $location, firebase, dataService) {
        'ngInject';
        this.$mdMedia = $mdMedia;
        this.$location = $location;
        this.firebase = firebase;
        this.dataService = dataService;
    }

    $onInit() {
        this.redirectUser();
        this.getCategories();
    }

    redirectUser() {
        this.firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.$location.path('/');
            }
        });
    }

    getCategories() {
        this.dataService.getCategories()
            .then(data => {
                this.data = data;
            })
    }
}

const CategoriesAdminComponent = {
    controller: CategoriesAdminController,
    template: require('./categories.html')
};

export default CategoriesAdminComponent;
