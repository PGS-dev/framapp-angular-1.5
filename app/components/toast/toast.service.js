export default class ToastService {
    constructor($mdToast) {
        'ngInject'

        this.$mdToast = $mdToast;
    }

    showSuccessToast(message = 'Success') {
        this.$mdToast.show(
            this.$mdToast
                .simple()
                .content(message)
                .position('top right')
                .theme('success-toast')
        );
    }

    showWarningToast(message = 'Something went wrong') {

        this.$mdToast.show(
            this.$mdToast
                .simple()
                .content(message)
                .position('top right')
                .theme('warning-toast')
        );
    }
}