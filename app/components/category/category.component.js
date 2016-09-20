class CategoryController {
    constructor(categoryService) {
        'ngInject';
        this.categoryService = categoryService;
    }

    $onInit() {
        this.getCategories();
        this.data = {};
    }

    getCategories() {
        this.categoryService.getCategories()
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
