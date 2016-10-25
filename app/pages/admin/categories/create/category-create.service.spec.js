describe('category-createService test', () => {
    let firebase, toastService, categoryCreateService;

    const createCategoryParam = {
        id: 'Test Service',
        title: 'Test',
        description: 'Simple desc'
    };

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('app.pages.categoryCreateModule'));

    beforeEach(angular.mock.module($provide => {
        $provide.value('toastService', {
            showWarningToast: jasmine.createSpy('showWarningToast'),
            showSuccessToast: jasmine.createSpy('showSuccessToast')
        });
    }));

    beforeEach(inject((_firebase_, _toastService_, _categoryCreateService_) => {
        firebase = _firebase_;
        toastService = _toastService_;
        categoryCreateService = _categoryCreateService_;
    }));

    describe('check function in services', () => {
        it('should be defined', () => {
            expect(categoryCreateService).toBeDefined();
        });
        it('should be object', () => {
            setTimeout(() => {
                expect(categoryCreateService.createNewCategory(createCategoryParam))
                    .toEqual(jasmine.any(Object));
            }, 1000);
        });
    });
});
