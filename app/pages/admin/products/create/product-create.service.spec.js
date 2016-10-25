describe('category-createService test', () => {
    let firebase, toastService, productCreateService;

    const createProductParam = {
        title: 'Test Service',
        promoted: false,
        category: 'phones',
        price: 22,
        imageUrl: 'http://example.com',
        amount: 22,
        description: 'Simple desc',
        created: new Date().toLocaleString('pl-PL')
    };

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('app.pages.productCreateModule'));

    beforeEach(angular.mock.module($provide => {
        $provide.value('toastService', {
            showWarningToast: jasmine.createSpy('showWarningToast'),
            showSuccessToast: jasmine.createSpy('showSuccessToast')
        });
    }));

    beforeEach(inject((_firebase_, _toastService_, _productCreateService_) => {
        firebase = _firebase_;
        toastService = _toastService_;
        productCreateService = _productCreateService_;
    }));

    describe('check function in services', () => {
        it('should be defined', () => {
            expect(productCreateService).toBeDefined();
        });
        it('should be object', () => {
            setTimeout(() => {
                expect(productCreateService.createNewProduct(createProductParam))
                    .toEqual(jasmine.any(Object));
            }, 1000);
        });
    });
});
