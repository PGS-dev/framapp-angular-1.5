class CategoryController {
    constructor(dataService, categoryNavService, $state, firebase) {
        'ngInject';
        this.dataService = dataService;
        this.categoryNavService = categoryNavService;
        this.$state = $state;
        this.firebase = firebase;
    }

    $onInit() {
        this.getCategories();
        this.data = {};
        this.objKeys = [];
        this.selectedCategory = this.$state.params.id;
        this.user = '';
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
                this.objKeys = this.categoryNavService.getObjectKeys(this.data);
            })
    }

    isUserLogged() {
        this.firebase.auth().onAuthStateChanged(user => {
            if (user) {
                return this.user = user;
            } else {
                return this.user = '';
            }
        });
    }
}

const CategoryComponent = {
    controller: CategoryController,
    template: require('./category.html')
};

export default CategoryComponent;
