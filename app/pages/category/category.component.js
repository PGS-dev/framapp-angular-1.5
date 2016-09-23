class CategoryController {
    constructor(getDataService, categoryService, $mdMedia) {
        'ngInject';
        this.getDataService = getDataService;
        this.categoryService = categoryService;
        this.$mdMedia = $mdMedia;
    }

    $onInit() {
        this.getProducts();
        this.data = [];
        this.categoryData = [];
    }

    getProducts() {
        this.getDataService.getProducts()
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
