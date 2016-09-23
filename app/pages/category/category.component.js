class CategoryController {
    constructor(getDataService, categoryService) {
        'ngInject';
        this.getDataService = getDataService;
        this.categoryService = categoryService;
    }
    $onInit() {
        this.getProducts();
        this.data = [];
        this.categoryData = [];
    }
    getProducts() {
        this.getDataService.getProducts().then((data) => {
            this.data = data;
            this.categoryData = this.categoryService.filterProducts(this.data);
        })
    }
}

const CategoryViewComponent = {
    controller: CategoryController,
    template: require('./category.html')
};

export default CategoryViewComponent;
