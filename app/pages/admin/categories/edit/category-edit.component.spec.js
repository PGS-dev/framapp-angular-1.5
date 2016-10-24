describe('categoryEditComponentController test', () => {
    let firebase, $state, toastService, $mdMedia, controller, categoryEditService, dataService;

    const param = 2;
    const emptyObject = {};

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('app.components.appModule'));
    beforeEach(angular.mock.module('app.pages.categoryEditModule'));

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

    beforeEach(inject((_firebase_, _$state_, _toastService_, _$mdMedia_, _$componentController_, _categoryEditService_, _dataService_) => {
        firebase = _firebase_;
        $state = _$state_;
        toastService = _toastService_;
        $mdMedia = _$mdMedia_;
        categoryEditService = _categoryEditService_;
        dataService = _dataService_;
        controller = _$componentController_('categoryEditComponent', categoryEditService);
    }));

    describe('check function in component', () => {
        it('shold be defined', () => {
            expect(controller).toBeDefined();
        });
        it('shold return object', () => {
            setTimeout(() => {
                expect(controller.getCategory()).toEqual(jasmine.any(Object));
            }, 1000);
        });
    });
});
