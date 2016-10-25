describe('ProfileService test', () => {
    let firebase, $state, toastService, profileService;

    const emptyObject = {};

    beforeEach(angular.mock.module('firebase'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('app.pages.profileModule'));

    beforeEach(angular.mock.module($provide => {
        $provide.value('$state', {
            go: jasmine.createSpy('go')
        });
        $provide.value('toastService', {
            showWarningToast: jasmine.createSpy('showWarningToast'),
            showSuccessToast: jasmine.createSpy('showSuccessToast')
        });
    }));

    beforeEach(inject((_firebase_, _$state_, _toastService_, _profileService_) => {
        firebase = _firebase_;
        $state = _$state_;
        toastService = _toastService_;
        profileService = _profileService_;
    }));

    describe('check function in services', () => {
        it('should be defined', () => {
            expect(profileService).toBeDefined();
        });
        it('shold return empty object', () => {
            setTimeout(() => {
                expect(profileService.updateProfile()).toEqual(emptyObject);
            }, 1000);
        });
    });
});
