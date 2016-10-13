class ProfileService {
    constructor(firebase, toastService) {
        'ngInject';

        this.firebase = firebase;
        this.toastService = toastService;
    }

    updateProfile(inputs, user) {
        if (inputs.displayName != null && inputs.photoURL) {
            return user.updateProfile({
                displayName: inputs.displayName,
                photoURL: inputs.photoURL
            })
                .then( response => {
                    this.toastService.showSuccessToast('Profile has been updated');
                })
                .catch( error => {
                    this.toastService.showWarningToast('Something went wrong');
                });
        }
    }
}

export default ProfileService;
