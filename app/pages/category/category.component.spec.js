describe('categoryViewComponentController test', () => {
    let firebase, $mdMedia, controller, dataService;

    const param = 2;
    const emptyObject = {};

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('app.components.appModule'));
    beforeEach(angular.mock.module('app.pages.categoryViewModule'));

    beforeEach(angular.mock.module($provide => {
        $provide.value('$mdMedia', {});
    }));

    beforeEach(inject((_firebase_, _$mdMedia_, _$componentController_, _dataService_) => {
        firebase = _firebase_;
        $mdMedia = _$mdMedia_;
        dataService = _dataService_;
        controller = _$componentController_('categoryViewComponent', dataService);
    }));

    describe('check function in component', () => {
        it('shold be defined', () => {
            expect(controller).toBeDefined();
        });
        it('should return object', () => {
            setTimeout(() => {
                expect(controller.getProductsByCategory()).toEqual(jasmine.any(Object));
            }, 1000);
        });
    });
});
