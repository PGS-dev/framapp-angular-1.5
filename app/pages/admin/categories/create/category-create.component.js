class CategoryCreateController {
    constructor($mdMedia, $state, firebase, categoryCreateService) {
        'ngInject';

        this.$mdMedia = $mdMedia;
        this.$state = $state;
        this.firebase = firebase;
        this.categoryCreateService = categoryCreateService;
    }

    $onInit() {
        this.redirectUser();
    }

    redirectUser() {
        this.firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.$state.go('app.main');
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
