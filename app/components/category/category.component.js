class CategoryController {
    constructor(firebase, dataService) {
        'ngInject';

        this.firebase = firebase;
        this.dataService = dataService;
    }

    $onInit() {
        this.getCategories();
        this.userData = {};
        this.isUserLogged();
    }

    getCategories() {
        this.dataService.getCategories()
            .then(data => {
                this.categoriesData = data;
            });
    }

    isUserLogged() {
        this.firebase.auth().onAuthStateChanged(userData => {
            if (userData) {
                return this.userData = userData;
            } else {
                return this.userData = {};
            }
        });
    }
}

const CategoryComponent = {
    controller: CategoryController,
    template: require('./category.html')
};

export default CategoryComponent;
