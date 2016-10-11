class CategoriesAdminController {
    constructor($mdMedia, $mdDialog, $location, firebase, toastService, dataService) {
        'ngInject';

        this.$mdMedia = $mdMedia;
        this.$mdDialog = $mdDialog;
        this.$location = $location;
        this.firebase = firebase;
        this.toastService = toastService;
        this.dataService = dataService;
    }

    $onInit() {
        this.redirectUser();
        this.getCategories();
    }

    redirectUser() {
        this.firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.$location.path('/');
            }
        });
    }

    getCategories() {
        this.dataService.getCategories()
            .then(data => {
                this.categoriesData = data;
            });
    }

    deleteCategory(categoryId, categoryTitle) {
        this.$mdDialog.show({
            locals: {selectedTitle: categoryTitle},
            controller: this.dialogDeleteCategoryFunction,
            templateUrl: 'deleteCategoryDialog.tmpl.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true
        })
            .then(n => {
                this.firebase.database().ref(`api/v1/categories/${categoryId}`).remove();
                this.toastService.showSuccessToast(`Category '${categoryTitle}' has been removed`);
            })
            .catch(e => {
                console.log('Discard dialog box');
            });
    }

    dialogDeleteCategoryFunction($scope, $mdDialog, selectedTitle) {
        $scope.selectedTitle = selectedTitle;

        $scope.delete = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    }
}

const CategoriesAdminComponent = {
    controller: CategoriesAdminController,
    template: require('./categories.html')
};

export default CategoriesAdminComponent;
