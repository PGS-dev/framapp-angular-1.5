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
        this.firebase.auth().onAuthStateChanged(user => {
            if (user) {
                return this.user = user;
            } else {
                return this.user = '';
            }
        });
    }

    logOut() {
        this.firebase.auth().signOut()
            .then(n => {
                this.user = '';
                this.toastService.showSuccessToast("You have been logged out");
            }).catch(error => {
            this.toastService.showWarningToast(error);
        });
    }

    updateProfile() {
        this.user = this.firebase.auth().currentUser;

        this.user.updateProfile({
            photoURL: "https://avatars1.githubusercontent.com/u/9810880?v=3&s=466",
        }).then(function() {
            console.log('Done');
        }, function(error) {
            console.log('nope');
        });
    }
}

const LoginComponent = {
    controller: LoginController,
    template: require('./login.html')
};

export default LoginComponent;
