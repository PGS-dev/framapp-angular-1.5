class CategoryController {
    constructor(getDataService, $state) {
        'ngInject';
        this.getDataService = getDataService;
        this.$state = $state;
    }

    $onInit() {
        this.getProducts();
        this.data = [];
        this.categoryData = [];
        this.actualState = this.$state.params.id;
    }

    getProducts() {
        this.getDataService.getProducts().then((data) => {
            this.data = data;
            this.categoryData = this.data.filter(n => n.category === this.actualState);
        })
    }

}

const CategoryViewComponent = {
    controller: CategoryController,
    template: require('./category.html')
};

export default CategoryViewComponent;
