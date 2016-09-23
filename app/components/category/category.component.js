class CategoryController {
    constructor(dataService, $state) {
        'ngInject';
        this.dataService = dataService;
        this.$state = $state;
    }

    $onInit() {
        this.getCategories();
        this.data = {};
        this.selectedCategory = this.$state.params.id;
    }

    selectCategory(newCategory) {
        this.selectedCategory = newCategory;
    }

    getCategoryClass(category) {
        return this.selectedCategory == category ? "md-raised" : "";
    }

    getCategories() {
        this.dataService.getCategories()
            .then((data) => {
                this.data = data;
            })
    }
}

const CategoryComponent = {
    controller: CategoryController,
    template: require('./category.html')
};

export default CategoryComponent;
