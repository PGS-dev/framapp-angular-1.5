class CategoryService {
    constructor($state) {
        this.$state = $state;
    }

    filterProductsByCategory(array) {
        return array.filter(n => n.category === this.$state.params.id);
    }

}

export default CategoryService;
