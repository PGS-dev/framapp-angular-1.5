class CategoryService {
    constructor($state) {
        this.$state = $state;
    }

    filterProductsByCategory(object) {
        let array = Object.keys(object).map((k) => object[k]);
        return array.filter(n => n.category === this.$state.params.id);
    }
}

export default CategoryService;
