class LoginController {
    constructor($mdDialog, $scope, firebaseConfig, firebase, toastService) {
        'ngInject';
        this.$mdDialog = $mdDialog;
        this.$scope = $scope;
        this.firebaseConfig = firebaseConfig;
        this.firebase = firebase;
        this.toastService = toastService;

        firebase.initializeApp(firebaseConfig.FIREBASE_CONFIG);
    }

    $onInit() {
        this.userData = {};
        this.isUserLogged();
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
            .then(n => {
                console.log('Success login');
            }).catch(e => {
                console.log('Discard dialog box');
        });
    }

    dialogFunction($scope, $mdDialog, firebaseConfig, firebase, toastService) {
        'ngInject';
        this.firebaseConfig = firebaseConfig;
        this.firebase = firebase;
        this.toastService = toastService;

        $scope.login = function (inputs) {
            firebase.auth().signInWithEmailAndPassword(inputs.name, inputs.pass)
                .then(result => {
                    toastService.showSuccessToast("You have been success logged");
                    $mdDialog.hide();
                }).catch(error => {
                    toastService.showWarningToast(error.message);
            });
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    }

    isUserLogged() {
        this.firebase.auth().onAuthStateChanged(userData => {
            if (userData) {
                return this.userData = userData;
            } else {
                return this.userData = {};
            }
        });
    }

    logOut() {
        this.firebase.auth().signOut()
            .then(n => {
                this.userData = {};
                this.toastService.showSuccessToast("You have been logged out");
            }).catch(error => {
                this.toastService.showWarningToast(error);
        });
    }
}

const LoginComponent = {
    controller: LoginController,
    template: require('./login.html')
};

export default LoginComponent;
