import './person.scss';

import ko from 'knockout';
import template from './person.html';

// This named export returns the view model and can be used to get the VM for unit tests
//  这个命名的导出返回视图模型，可用于获取用于单元测试的VM 
export class PersonViewModel {

  constructor(params) {

    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.fullName = ko.pureComputed(() => {
      return this.firstName() + ' ' + this.lastName();
    });

    // Very basic Promise example to check Promises have been polyfilled
    // 非常基本的承诺示例，用来检查承诺是否已被填充
    function getPromiseThatResolvesIn2Seconds() {
      return new Promise(resolve => {
        setTimeout(resolve, 2000);
      })
    }

    getPromiseThatResolvesIn2Seconds()
      .then(() => {
        this.firstName('Sarah');
        this.lastName('Jones');
      })
  }

  dispose() {
    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions.
    // 当组件被拆下时，它将运行。把需要清理的逻辑写在这里，
    // 例如，取消setTimeouts或取消取消订阅。
  }
}

// The default export returns the component details object to register with KO
//默认导出返回要向KO注册的组件详细信息对象
export default { viewModel: PersonViewModel, template: template };

