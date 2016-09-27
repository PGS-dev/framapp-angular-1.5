class LoginController {
    constructor($mdDialog, $scope, $firebaseAuth, firebaseUrl) {
        'ngInject';
        this.$mdDialog = $mdDialog;
        this.$scope = $scope;
        this.$firebaseAuth = $firebaseAuth;
        this.firebaseUrl = firebaseUrl;
    }

    $onInit() {
        this.connectGoogle();
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
            .then(function (inputs) {
                console.log(`Authenticated successfully with payload: ${inputs.name}, ${inputs.pass}`)
            }, function () {
                console.log('Login Failed!');
            });
    }

    dialogFunction($scope, $mdDialog) {
        'ngInject';
        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.login = function (inputs) {
            $mdDialog.hide(inputs);
        };
    }

    connectGoogle() {


        // const ref = new Firebase(this.firebaseUrl);

        // this.$scope.auth = this.$firebaseAuth();
        //
        // this.$scope.auth.$authWithOAuthPopup("facebook").then(function(authData) {
        //     console.log("Logged in as:", authData.uid);
        // }).catch(function(error) {
        //     console.log("Authentication failed:", error);
        // });
    }
}

const LoginComponent = {
    controller: LoginController,
    template: require('./login.html')
};

export default LoginComponent;
