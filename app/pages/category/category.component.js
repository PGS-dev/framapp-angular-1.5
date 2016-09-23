class CategoryController {
    constructor(dataService, categoryService, $mdMedia) {
        'ngInject';
        this.dataService = dataService;
        this.categoryService = categoryService;
        this.$mdMedia = $mdMedia;
    }

    $onInit() {
        this.getProducts();
        this.data = [];
        this.categoryData = [];
    }

    getProducts() {
        this.dataService.getProducts()
            .then((data) => {
                this.data = data;
                this.categoryData = this.categoryService.filterProductsByCategory(this.data);
            })
    }

}

const CategoryViewComponent = {
    controller: CategoryController,
    template: require('./category.html')
};

export default CategoryViewComponent;
