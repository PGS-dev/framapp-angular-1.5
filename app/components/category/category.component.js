class CategoryController {
    constructor($state, firebase, dataService) {
        'ngInject';

        this.$state = $state;
        this.firebase = firebase;
        this.dataService = dataService;
    }

    $onInit() {
        this.getCategories();
        this.selectedCategory = this.$state.params.id;
        this.userData = {};
        this.isUserLogged();
    }

    selectCategory(newCategory) {
        this.selectedCategory = newCategory;
    }

    getCategoryClass(category) {
        return this.selectedCategory == category ? "md-raised" : "";
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
