class MainService {
    constructor($state) {
        this.$state = $state;
    }
    filterProductsByPromoted(array) {
        return array.filter(n => n.promoted === true);
    }
}

export default MainService;
