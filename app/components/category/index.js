import CategoryComponent from './category.component'
import './category.scss';

const categoryModule = angular
    .module('app.components.categoryModule', [])
    .component('categoryComponent', CategoryComponent)
    .name;

export default categoryModule;
