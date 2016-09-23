class MainPageController {
    constructor(dataService, homePageService, $mdMedia) {
        'ngInject';
        this.dataService = dataService;
        this.homePageService = homePageService;
        this.$mdMedia = $mdMedia;
    }

    $onInit() {
        this.getProducts();
        this.data = [];
        this.promotedData = [];
    }

    getProducts() {
        this.dataService.getProducts()
            .then(data => {
                this.data = data;
                this.promotedData = this.homePageService.filterProductsByPromoted(this.data);
            })
    }

}

const MainPageComponent = {
    controller: MainPageController,
    template: require('./main-page.html')
};

export default MainPageComponent;
