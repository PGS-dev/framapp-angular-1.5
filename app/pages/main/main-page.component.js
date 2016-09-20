class CategoryController {
    constructor(mainPageService) {
        'ngInject';
        this.mainPageService = mainPageService;
    }

    $onInit() {
        this.getProducts();
        this.data = [];
        this.promotedData = [];
    }

    getProducts() {
        this.mainPageService.getProducts().then((data) => {
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
