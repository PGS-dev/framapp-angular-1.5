describe('loginComponentController test', () => {
    let firebase, firebaseConfig, $mdDialog, controller, dataService, toastService;

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('app.components.appModule'));
    beforeEach(angular.mock.module('app.components.loginModule'));

    beforeEach(angular.mock.module($provide => {
        $provide.value('toastService', {
            showWarningToast: jasmine.createSpy('showWarningToast'),
            showSuccessToast: jasmine.createSpy('showSuccessToast')
        });
        $provide.value('$mdDialog', {
            show: jasmine.createSpy('show')
        });
        $provide.value('firebase', {
            initializeApp: jasmine.createSpy('initializeApp')
        });
        $provide.value('firebaseConfig', {});
    }));

    beforeEach(inject((_firebase_, _$mdDialog_, _firebaseConfig_, _$componentController_, _dataService_, _toastService_) => {
        firebase = _firebase_;
        $mdDialog = _$mdDialog_;
        firebaseConfig = _firebaseConfig_;
        dataService = _dataService_;
        toastService = _toastService_;
        controller = _$componentController_('loginComponent', dataService);
    }));

    describe('check function in component', () => {
        it('controller should be defined', () => {
            expect(controller).toBeDefined();
        });
        it('toast shod be defined', () => {
            expect(toastService).toBeDefined();
        });
        it('should have dialog open', function () {
            $mdDialog.show = jasmine.createSpy().and.callFake(function () {
                expect($mdDialog.show).to.have.been.calledOnce;
            });
        });
    });
});
