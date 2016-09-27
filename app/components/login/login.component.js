class LoginController {
    constructor($mdDialog, $scope) {
        'ngInject';
        this.$mdDialog = $mdDialog;
        this.$scope = $scope;
    }

    $onInit() {
        this.status = '';
    }

    showAdvanced(ev) {
        this.$mdDialog.show({
            controller: this.dialogFunction,
            templateUrl: 'loginDialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: this.customFullscreen
        })
            .then(function (answer) {
                console.log(answer);
            }, function () {
                console.log('Cancel the dialog');
            });
    }

    dialogFunction($scope, $mdDialog) {
        'ngInject';
        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

}


const LoginComponent = {
    controller: LoginController,
    template: require('./login.html')
};

export default LoginComponent;
