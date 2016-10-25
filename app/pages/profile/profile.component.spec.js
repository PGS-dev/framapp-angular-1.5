describe('profileComponentController test', () => {
    let firebase, $state, toastService, $mdMedia, controller, profileService;

    const profileParam = {
        displayName: 'example',
        email: 'example@example.com',
        photoURL: 'http://example.com',
    };

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
        $provide.value('$mdMedia', {});
    }));

    beforeEach(inject((_firebase_, _$state_, _toastService_, _$mdMedia_, _$componentController_, _profileService_) => {
        firebase = _firebase_;
        $state = _$state_;
        toastService = _toastService_;
        $mdMedia = _$mdMedia_;
        profileService = _profileService_;
        controller = _$componentController_('profileComponent', profileService);
    }));

    describe('check function in component', () => {
        it('shold be defined', () => {
            expect(controller).toBeDefined();
        });
        it('should return object', () => {
            setTimeout(() => {
                expect(profileService.getUserProfileData(profileParam))
                    .toEqual(jasmine.any(Object));
            }, 1000);
        })
    });
});
