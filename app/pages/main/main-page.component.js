class CategoryController {
    constructor(mainPageService) {
        'ngInject';
        this.mainPageService = mainPageService;
    }

    $onInit() {
        this.getProducts();
        this.data = [];
        this.newData = [];
    }

    getProducts() {
        this.mainPageService.getProducts().then((data) => {
            this.data = data;

            this.sortArray(this.data, this.newData);
        })
    }

    sortArray(data, newData) {
        angular.forEach(data, function (param) {
            if (param.promoted == true) {
                newData.push(param);
            }
        });
    }
}

const MainPageComponent = {
    controller: CategoryController,
    template: require('./main-page.html')
};

export default MainPageComponent;
