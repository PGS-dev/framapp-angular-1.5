class CategoryController {
    constructor(appService) {
        'ngInject';
        this.appService = appService;
    }

    $onInit() {
        this.getCategories();
        this.data = {};
    }

    getCategories() {
        this.appService.getCategories()
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
