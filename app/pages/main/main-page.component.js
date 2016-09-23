class CategoryController {
    constructor(getDataService, mainService, $mdMedia) {
        'ngInject';
        this.getDataService = getDataService;
        this.mainService = mainService;
        this.$mdMedia = $mdMedia;
    }

    $onInit() {
        this.getProducts();
        this.data = [];
        this.promotedData = [];
    }

    getProducts() {
        this.getDataService.getProducts()
            .then(data => {
                this.data = data;
                this.promotedData = this.mainService.filterProductsByPromoted(this.data);
            })
    }

}

const MainPageComponent = {
    controller: CategoryController,
    template: require('./main-page.html')
};

export default MainPageComponent;
