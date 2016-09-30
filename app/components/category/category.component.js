class CategoryController {
    constructor(dataService, categoryNavService, $state, firebase) {
        'ngInject';
        this.dataService = dataService;
        this.categoryNavService = categoryNavService;
        this.$state = $state;
        this.firebase = firebase;
        console.log(this.$state.params);
    }

    $onInit() {
        this.getCategories();
        this.data = {};
        this.categoryObjectKeys = [];
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
                this.data = data;
                this.categoryObjectKeys = this.categoryNavService.getObjectKeys(this.data);
            })
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
