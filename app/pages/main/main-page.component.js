class MainPageController {
    constructor($mdMedia, dataService) {
        'ngInject';

        this.$mdMedia = $mdMedia;
        this.dataService = dataService;
    }

    $onInit() {
        this.getPromotedProducts();
    }

    getPromotedProducts() {
        this.dataService.getPromotedProducts()
            .then(data => {
                this.promotedData = data;
            });
    }
}

const MainPageComponent = {
    controller: MainPageController,
    template: require('./main-page.html')
};

export default MainPageComponent;
