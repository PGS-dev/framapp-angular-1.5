class CategoryCreateController {
    constructor($mdMedia, $location, firebase, dataService, categoryCreateService) {
        'ngInject';
        this.$mdMedia = $mdMedia;
        this.$location = $location;
        this.firebase = firebase;
        this.dataService = dataService;
        this.categoryCreateService = categoryCreateService;
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

    createNewCategory(inputs) {
        this.categoryCreateService.createNewCategory(inputs);
    }
}

const CategoryCreateComponent = {
    controller: CategoryCreateController,
    template: require('./category-create.html')
};

export default CategoryCreateComponent;