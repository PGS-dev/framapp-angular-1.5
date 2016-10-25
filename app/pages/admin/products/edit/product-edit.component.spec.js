describe('productEditComponentController test', () => {
    let firebase, $state, toastService, $mdMedia, controller, productEditService, dataService;

    const param = 2;
    const paramProduct = 33;
    const emptyObject = {};

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('app.components.appModule'));
    beforeEach(angular.mock.module('app.pages.productEditModule'));

    beforeEach(angular.mock.module($provide => {
        $provide.value('$state', {
            go: jasmine.createSpy('go')
        });
        $provide.value('toastService', {
            showWarningToast: jasmine.createSpy('showWarningToast'),
            showSuccessToast: jasmine.createSpy('showSuccessToast')
        });
        $provide.value('$mdMedia', {});
    }));

    beforeEach(inject((_firebase_, _$state_, _toastService_, _$mdMedia_, _$componentController_, _productEditService_, _dataService_) => {
        firebase = _firebase_;
        $state = _$state_;
        toastService = _toastService_;
        $mdMedia = _$mdMedia_;
        productEditService = _productEditService_;
        dataService = _dataService_;
        controller = _$componentController_('productEditComponent', productEditService);
    }));

    describe('check function in component', () => {
        it('shold be defined', () => {
            expect(controller).toBeDefined();
        });
        it('should be object', () => {
            setTimeout(() => {
                expect(dataService.getCategories()).toEqual(jasmine.any(Object));
            }, 1000);
        });
        it('should be object, function with param', () => {
            setTimeout(() => {
                expect(dataService.getProduct(paramProduct)).toEqual(jasmine.any(Object));
            }, 1000);
        });
    });
});
