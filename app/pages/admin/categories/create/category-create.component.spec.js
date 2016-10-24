describe('categoryCreateComponentController test', () => {
    let firebase, $state, toastService, $mdMedia, controller, categoryCreateService;

    const param = 2;
    const emptyObject = {};

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('app.pages.categoryCreateModule'));

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

    beforeEach(inject((_firebase_, _$state_, _toastService_, _$mdMedia_, _$componentController_, _categoryCreateService_) => {
        firebase = _firebase_;
        $state = _$state_;
        toastService = _toastService_;
        $mdMedia = _$mdMedia_;
        categoryCreateService = _categoryCreateService_;
        controller = _$componentController_('categoryCreateComponent', categoryCreateService);
    }));

    describe('check function in component', () => {
        it('shold be defined', () => {
            expect(controller).toBeDefined();
        });
    });
});
