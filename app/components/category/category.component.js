class CategoryController {
    constructor($state, firebase, $firebaseObject) {
        'ngInject';
        this.$state = $state;
        this.firebase = firebase;
        this.$firebaseObject = $firebaseObject;
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
        const dbRefObjectCategories = this.firebase.database().ref('api/v1').child('categories');
        this.categoriesDataFire = this.$firebaseObject(dbRefObjectCategories);
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
