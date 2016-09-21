class CategoryController {
    constructor(appService, $state) {
        'ngInject';
        this.appService = appService;
        this.$state = $state;
    }

    $onInit() {
        this.getProducts();
        this.data = [];
        this.categoryData = [];
        this.actualState = this.$state.params.id;
    }

    getProducts() {
        this.appService.getProducts().then((data) => {
            this.data = data;
            this.getCategoryProducts(this.data, this.categoryData, this.actualState);
        })
    }

    getCategoryProducts(data, categoryData, actualState) {
        angular.forEach(data, function (param) {
            if (param.category == actualState) {
                categoryData.push(param);
            }
        });
    }

}

const CategoryViewComponent = {
    controller: CategoryController,
    template: require('./category.html')
};

export default CategoryViewComponent;
