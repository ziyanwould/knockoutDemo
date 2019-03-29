import '@babel/polyfill'; // Promise polyfill and others  承诺polyfill和其他
import 'unfetch/polyfill'; // Fetch polyfill  获取polyfill
import 'knockout-punches'; // Support for handlebars syntax  支持车把语法
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

ko.punches.enableAll(); // Enable support for handlebars syntax   启用对句柄语法的支持
ko.applyBindings(new AppViewModel(), document.getElementById('app'));


import '../../ko/js/rem'