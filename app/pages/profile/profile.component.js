class ProfileController {
    constructor($mdMedia, $state, firebase, profileService) {
        'ngInject';

        this.$mdMedia = $mdMedia;
        this.$state = $state;
        this.firebase = firebase;
        this.profileService = profileService;
    }

    $onInit() {
        this.redirectUser();
        this.getUserProfileData();
    }

    redirectUser() {
        this.firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.$state.go('app.main');
            }
        });
    }

    getUserProfileData(inputs) {
        this.firebase.auth().onAuthStateChanged(userData => {
            if (userData) {
                const user = this.firebase.auth().currentUser;

                if (!inputs) {
                    this.userDataForEdit = {};
                    this.userDataForEdit = {
                        displayName: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL
                    };
                } else {
                    this.profileService.updateProfile(inputs, user);
                }
            }
        });
    }
}

const ProfileComponent = {
    controller: ProfileController,
    template: require('./profile.html')
};

export default ProfileComponent;
