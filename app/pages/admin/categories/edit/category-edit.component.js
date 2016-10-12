class categoryEditController {
    constructor($mdMedia, $state, dataService, categoryEditService) {
        'ngInject';

        this.$mdMedia = $mdMedia;
        this.$state = $state;
        this.dataService = dataService;
        this.categoryEditService = categoryEditService;
    }

    $onInit() {
        this.getCategory();
    }

    getCategory() {
        this.dataService.getCategory(this.$state.params.id)
            .then(data => {
                this.categoryData = data;
            });
    }

    updateCategory(inputs) {
        this.categoryEditService.updateCategory(inputs);
    }
}

const CategoryEditComponent = {
    controller: categoryEditController,
    template: require('./category-edit.html')
};

export default CategoryEditComponent;
