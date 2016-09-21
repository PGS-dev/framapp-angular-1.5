class NavbarController {
    constructor($mdSidenav) {
        'ngInject'
        this.$mdSidenav = $mdSidenav;
    }

    toggleLeft() {
        this.$mdSidenav('left').toggle();
    }
}

const NavbarComponent = {
    controller: NavbarController,
    template: require('./navbar.html')
};

export default NavbarComponent;
