import CategoryComponent from './category.component'
import './category.scss';
import CategoryService from './category.service'

const categoryModule = angular
    .module('app.components.categoryModule', [])
    .component('categoryComponent', CategoryComponent)
    .service('categoryService', CategoryService)
    .name;

export default categoryModule;
