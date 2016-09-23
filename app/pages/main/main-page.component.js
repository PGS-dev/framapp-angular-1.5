class CategoryController {
    constructor(getDataService, mainService) {
        'ngInject';
        this.getDataService = getDataService;
        this.mainService = mainService;
    }
    $onInit() {
        this.getProducts();
        this.data = [];
        this.promotedData = [];
    }
    getProducts() {
        this.getDataService.getProducts().then(data => {
            this.data = data;
            this.promotedData = this.mainService.promotedProducts(this.data);
        })
    }
}

const MainPageComponent = {
    controller: CategoryController,
    template: require('./main-page.html')
};

export default MainPageComponent;
