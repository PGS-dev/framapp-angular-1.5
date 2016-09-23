class MainService {
    constructor($state) {
        this.$state = $state;
    }
    filterProductsByPromoted(array) {
        this.promotedData = array.filter(n => n.promoted === true);
        return this.promotedData;
    }
}

export default MainService;
