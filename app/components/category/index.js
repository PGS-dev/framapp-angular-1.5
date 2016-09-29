import CategoryComponent from './category.component'
import './category.scss';
import CategoryNavService from './category.service'

const categoryModule = angular
    .module('app.components.categoryModule', [])
    .component('categoryComponent', CategoryComponent)
    .service('categoryNavService', CategoryNavService)
    .name;

export default categoryModule;
