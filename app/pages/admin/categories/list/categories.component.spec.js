describe('categoriesAdminComponentController test', () => {
    let firebase, $state, toastService, $mdMedia, $mdDialog, controller, dataService;

    const param = 2;
    const emptyObject = {};

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('app.components.appModule'));
    beforeEach(angular.mock.module('app.pages.categoriesAdminModule'));

    beforeEach(angular.mock.module($provide => {
        $provide.value('$state', {
            go: jasmine.createSpy('go')
        });
        $provide.value('toastService', {
            showWarningToast: jasmine.createSpy('showWarningToast'),
            showSuccessToast: jasmine.createSpy('showSuccessToast')
        });
        $provide.value('$mdDialog', {
            show: jasmine.createSpy('show')
        });
        $provide.value('$mdMedia', {});
    }));

    beforeEach(inject((_firebase_, _$state_, _toastService_, _$mdMedia_, _$mdDialog_, _$componentController_, _dataService_) => {
        firebase = _firebase_;
        $state = _$state_;
        toastService = _toastService_;
        $mdMedia = _$mdMedia_;
        $mdDialog = _$mdDialog_;
        dataService = _dataService_;
        controller = _$componentController_('categoriesAdminComponent', dataService);
    }));

    describe('check function in component', () => {
        it('shold be defined', () => {
            expect(controller).toBeDefined();
        });
        it('should have dialog open', function () {
            $mdDialog.show = jasmine.createSpy().and.callFake(function () {
                expect($mdDialog.show).to.have.been.calledOnce;
            });
        });
        it('should be object', () => {
            setTimeout(() => {
                expect(dataService.getCategories()).toEqual(jasmine.any(Object));
            }, 1000);
        });
    });
});
