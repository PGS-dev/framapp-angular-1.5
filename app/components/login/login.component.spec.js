describe('loginComponentController test', () => {
    let firebase, controller, dataService, toastService;

    const param = 2;
    const emptyObject = {};

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('app.components.appModule'));
    beforeEach(angular.mock.module('app.components.loginModule'));
    
        beforeEach(
        angular.mock.module($provide => {
            $provide.value('toastService', {
                showWarningToast: jasmine.createSpy('showWarningToast'),
                showSuccessToast: jasmine.createSpy('showSuccessToast')
            });
        }));


    beforeEach(inject((_firebase_, _$componentController_, _dataService_, _toastService_) => {
        firebase = _firebase_;
        dataService = _dataService_;
        toastService = _toastService_;
        controller = _$componentController_('loginComponent', dataService);
    }));

    describe('check function in component', () => {
        it('shold be empty object', () => {
            expect(controller).toBeDefined();
        });
        it('toast shod be defined', () => {
            expect(toastService).toBeDefined();
        });
    });
});
