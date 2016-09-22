class CategoryController {
    constructor(getDataService) {
        'ngInject';
        this.getDataService = getDataService;
    }

    $onInit() {
        this.getProducts();
        this.data = [];
        this.promotedData = [];
        this.categoryData = [];
    }

    getProducts() {
        this.getDataService.getProducts().then(data => {
            this.data = data;
            this.promotedData = this.data.filter(n => n.promoted === true);
        })
    }


}

const MainPageComponent = {
    controller: CategoryController,
    template: require('./main-page.html')
};

export default MainPageComponent;
