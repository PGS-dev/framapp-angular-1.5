class LoginController {
    constructor($mdDialog, $scope, firebaseConfig, firebase, localStorageService, $location, toastService) {
        'ngInject';
        this.$mdDialog = $mdDialog;
        this.$scope = $scope;
        this.firebaseConfig = firebaseConfig;
        this.firebase = firebase;
        this.localStorageService = localStorageService;
        this.$location = $location;
        this.toastService = toastService;
        firebase.initializeApp(firebaseConfig.FIREBASE_CONFIG);
    }

    $onInit() {
        this.user = '';
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
            .then(function () {
                // Success logged
            }, function () {
                console.log('Discard dialog box');
            });
    }

    dialogFunction($scope, $mdDialog, firebaseConfig, firebase, localStorageService, toastService) {
        'ngInject';
        this.firebaseConfig = firebaseConfig;
        this.firebase = firebase;
        this.localStorageService = localStorageService;
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
        this.firebase.auth().onAuthStateChanged(user => {
            if (user) {
                return this.user = user;
            } else {
                // User is not logged
            }
        });
    }

    logOut() {
        this.firebase.auth().signOut().then(function() {
            this.toastService.showSuccessToast("You have been logged out");
        }, function(error) {
            this.toastService.showWarningToast(error);
        });
    }

}

const LoginComponent = {
    controller: LoginController,
    template: require('./login.html')
};

export default LoginComponent;
