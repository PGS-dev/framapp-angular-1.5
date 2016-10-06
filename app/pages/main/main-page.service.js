class HomePageService {
    constructor($state) {
        this.$state = $state;
    }

    filterProductsByPromoted(object) {
        let array = Object.keys(object).map((k) => object[k]);
        return array.filter(n => n.promoted === true);
    }
}

export default HomePageService;
