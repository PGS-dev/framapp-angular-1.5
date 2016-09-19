export default class AlertService {
    constructor($mdDialog) {
        'ngInject'

        this.$mdDialog = $mdDialog;
    }

    showAlert(title = 'Error', message = 'Something went wrong') {

        this.$mdDialog.show(
            this.$mdDialog.alert()
                .clickOutsideToClose(true)
                .title(title)
                .textContent(message)
                .ariaLabel('Alert Dialog Prome ' + message)
                .ok('Ok!')
        );
    }
}