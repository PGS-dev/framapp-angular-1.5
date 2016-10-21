describe('categoryComponentController test', () => {
    let firebase, controller, dataService;

    const param = 2;
    const emptyObject = {};

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('app.components.appModule'));
    beforeEach(angular.mock.module('app.components.categoryModule'));

    beforeEach(inject((_firebase_, _$componentController_, _dataService_) => {
        firebase = _firebase_;
        dataService = _dataService_;
        controller = _$componentController_('categoryComponent', dataService);
    }));

    describe('check function in component', () => {
        it('shold be empty object', () => {
            expect(controller).toBeDefined();
        });
        it('should be object', () => {
            setTimeout(() => {
                expect(dataService.getCategories()).toEqual(jasmine.any(Object));
            }, 1000);
        });
        it('shold be empty object', () => {
            setTimeout(() => {
                expect(dataService.isUserLogged()).toEqual(emptyObject);
            }, 1000);
        });
    });
});
