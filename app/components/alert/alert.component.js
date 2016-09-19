class AlertController {
    constructor(alertService) {
        'ngInject';

        this.alertService = alertService;
    }
}

const AlertComponent = {
    controller: AlertController,
};

export default AlertComponent