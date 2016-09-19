import FooterComponent from './footer.component'
import './footer.scss';

const FooterModule = angular
    .module('app.components.footerModule', [])
    .component('footerComponent', FooterComponent)
    .name;

export default FooterModule;
