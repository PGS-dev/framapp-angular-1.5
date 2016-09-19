import ngTranslate from 'angular-translate';
const dictionary = require('./dict-en.json');

const translateModule = angular
    .module('app.translateModule', [
        ngTranslate
    ])
    .config(($translateProvider) => {
        'ngInject'

        $translateProvider
            .translations('en', dictionary)
            .preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
    })
    .name;

export default translateModule;