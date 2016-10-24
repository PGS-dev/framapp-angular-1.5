describe('category-createService test', () => {
    let firebase, $state, toastService, categoryEditService;

    const emptyObject = {};

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('app.pages.categoryEditModule'));

    beforeEach(angular.mock.module($provide => {
        $provide.value('$state', {
            go: jasmine.createSpy('go')
        });
        $provide.value('toastService', {
            showWarningToast: jasmine.createSpy('showWarningToast'),
            showSuccessToast: jasmine.createSpy('showSuccessToast')
        });
        $provide.value('firebase', {});
    }));

    beforeEach(inject((_firebase_, _$state_, _toastService_, _categoryEditService_) => {
        firebase = _firebase_;
        $state = _$state_;
        toastService = _toastService_;
        categoryEditService = _categoryEditService_;
    }));

    describe('check function in services', () => {
        it('should be defined', () => {
            expect(categoryEditService).toBeDefined();
        });
        it('shold return empty object', () => {
            setTimeout(() => {
                expect(categoryEditService.updateCategory()).toEqual(emptyObject);
            }, 1000);
        });
    });
});
