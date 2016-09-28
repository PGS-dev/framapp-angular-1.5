class LoginController {
    constructor($mdDialog, $scope, firebaseConfig, firebase) {
        'ngInject';
        this.$mdDialog = $mdDialog;
        this.$scope = $scope;
        this.firebaseConfig = firebaseConfig;
        this.firebase = firebase;
        firebase.initializeApp(this.firebaseConfig.FIREBASE_CONFIG);

        firebase.auth().signInWithEmailAndPassword('wojtek@wuha.pl', '123456')
            .then(function (result) {
                console.log('Success bitches');
                console.log(result);
            }).catch(function (error) {
            console.log('fucking error');
            console.log(error);
        });

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
            .then(function (inputs, scope) {
                console.log(`Authenticated successfully with payload: ${inputs.name}, ${inputs.pass}`);
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
}

const LoginComponent = {
    controller: LoginController,
    template: require('./login.html')
};

export default LoginComponent;
