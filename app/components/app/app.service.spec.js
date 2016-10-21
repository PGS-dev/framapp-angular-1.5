describe('dataService', () => {
    let firebase, $httpBackend, dataService;

    const paramCategory = 'phones';
    const paramProductCategory = 'notebooks'
    const paramProduct = 22;

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('app.components.appModule'));

    beforeEach(inject((_firebase_, _$httpBackend_, _dataService_) => {
        firebase = _firebase_;
        $httpBackend = _$httpBackend_;
        dataService = _dataService_;
    }));

    describe('check function in services', () => {
        it('should be object', () => {
            setTimeout(() => {
                expect(dataService.getCategories()).toEqual(jasmine.any(Object));
                expect(dataService.getProducts()).toEqual(jasmine.any(Object));
                expect(dataService.getPromotedProducts()).toEqual(jasmine.any(Object));
            }, 1000);
        });
        it('should be object, function with param', () => {
            setTimeout(() => {
                expect(dataService.getCategory(paramCategory)).toEqual(jasmine.any(Object));
                expect(dataService.getProductsByCategory(paramProductCategory)).toEqual(jasmine.any(Object));
                expect(dataService.getProduct(paramProduct)).toEqual(jasmine.any(Object));
            }, 1000);
        });
    });
});
