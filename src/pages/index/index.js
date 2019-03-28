import '@babel/polyfill'; // Promise polyfill and others
import 'unfetch/polyfill'; // Fetch polyfill
import 'knockout-punches'; // Support for handlebars syntax
import '../../assets/css/bootstrap.css'
import '../../assets/css/app.css'
import '../../assets/css/site.css'


import ko from 'knockout';
import ComponentRegistration from '../../ko/js/registration-components';
import BindingRegistration from '../../ko/js/registration-bindings';


class AppViewModel {
  constructor() {
    ComponentRegistration.registerComponents();
    BindingRegistration.registerBindings();
  }
}

ko.punches.enableAll(); // Enable support for handlebars syntax
ko.applyBindings(new AppViewModel(), document.getElementById('app'));


import '../../ko/js/rem'