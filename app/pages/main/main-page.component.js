class CategoryController {
    constructor(appService) {
        'ngInject';
        this.appService = appService;
    }

    $onInit() {
        this.getProducts();
        this.data = [];
        this.promotedData = [];
    }

    getProducts() {
        this.appService.getProducts().then((data) => {
            this.data = data;
            this.getPromotedProducts(this.data, this.promotedData);
        })
    }

    getPromotedProducts(data, promotedData) {
        angular.forEach(data, function (param) {
            if (param.promoted == true) {
                promotedData.push(param);
            }
        });
    }
    
}

const MainPageComponent = {
    controller: CategoryController,
    template: require('./main-page.html')
};

export default MainPageComponent;
