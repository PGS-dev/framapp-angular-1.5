class CategoryController {
    constructor($mdMedia, $state, dataService) {
        'ngInject';

        this.$mdMedia = $mdMedia;
        this.$state = $state;
        this.dataService = dataService;
    }

    $onInit() {
        this.getProductsByCategory();
    }

    getProductsByCategory() {
        this.dataService.getProductsByCategory(this.$state.params.id)
            .then(data => {
                this.productData = data;
            });
    }
}

const CategoryViewComponent = {
    controller: CategoryController,
    template: require('./category.html')
};

export default CategoryViewComponent;
