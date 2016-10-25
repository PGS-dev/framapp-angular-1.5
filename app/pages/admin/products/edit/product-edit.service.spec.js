describe('category-createService test', () => {
    let firebase, toastService, productEditService;

    const createProductParam = {
        title: 'Test Service',
        promoted: false,
        category: 'notebooks',
        price: 11,
        imageUrl: 'http://example.com',
        amount: 77,
        description: 'Simple desc',
        created: new Date().toLocaleString('pl-PL')
    };

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('app.pages.productEditModule'));

    beforeEach(angular.mock.module($provide => {
        $provide.value('toastService', {
            showWarningToast: jasmine.createSpy('showWarningToast'),
            showSuccessToast: jasmine.createSpy('showSuccessToast')
        });
    }));

    beforeEach(inject((_firebase_, _toastService_, _productEditService_) => {
        firebase = _firebase_;
        toastService = _toastService_;
        productEditService = _productEditService_;
    }));

    describe('check function in services', () => {
        it('should be defined', () => {
            expect(productEditService).toBeDefined();
        });
        it('should be object', () => {
            setTimeout(() => {
                expect(productEditService.updateProduct(createProductParam))
                    .toEqual(jasmine.any(Object));
            }, 1000);
        });
    });
});
