class CategoryService {
    constructor($state) {
        this.$state = $state;
    }
    filterProductsByCategory(array) {
        this.categoryData = array.filter(n => n.category === this.$state.params.id);
        return this.categoryData;
    }
}

export default CategoryService;
