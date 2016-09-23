class MainService {
    constructor($state) {
        this.$state = $state;
    }
    promotedProducts(array) {
        this.promotedData = array.filter(n => n.promoted === true);
        return this.promotedData;
    }
}

export default MainService;
