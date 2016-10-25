describe('category-createService test', () => {
    let firebase, productsAdminService;

    const convertProductToArray = {
        product1: {
            name: 'Product1',
            title: 'Product1-Title'
        },
        product2: {
            name: 'Product2',
            title: 'Product2-Title'
        },
        product3: {
            name: 'Product3',
            title: 'Product3-Title'
        }
    };

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('app.pages.productsAdminModule'));

    beforeEach(inject((_firebase_, _productsAdminService_) => {
        firebase = _firebase_;
        productsAdminService = _productsAdminService_;
    }));

    describe('check function in services', () => {
        it('should be defined', () => {
            expect(productsAdminService).toBeDefined();
        });
        it('should be array', () => {
            expect(productsAdminService.setKeyConvertToArray(convertProductToArray))
                .toEqual(jasmine.any(Array));
        });
    });
});
