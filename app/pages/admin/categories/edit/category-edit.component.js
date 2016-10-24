class categoryEditController {
    constructor($mdMedia, $state, firebase, dataService, categoryEditService) {
        'ngInject';

        this.$mdMedia = $mdMedia;
        this.$state = $state;
        this.firebase = firebase;
        this.dataService = dataService;
        this.categoryEditService = categoryEditService;
    }

    $onInit() {
        this.getCategory();
        this.redirectUser();
    }

    redirectUser() {
        this.firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.$state.go('app.main');
            }
        });
    }

    getCategory() {
        this.dataService.getCategory(this.$state.params.id)
            .then(data => {
                this.categoryData = data;
            });
    }

    updateCategory(inputs) {
        this.categoryEditService.updateCategory(inputs);
    }
}

const CategoryEditComponent = {
    controller: categoryEditController,
    template: require('./category-edit.html')
};

export default CategoryEditComponent;
