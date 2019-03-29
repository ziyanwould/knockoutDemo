import './click-counter.scss';

import ko from 'knockout';
import template from './click-counter.html';

// This named export returns the view model and can be used to get the VM for unit tests
//这个命名的导出返回视图模型，并可用于获取用于单元测试的VM
export class ClickCounterViewModel {

  constructor() {
    console.log('Hello from ClickCounterViewModel');

    this.count = ko.observable(0);

    this.increment = () => {
      this.count(this.count() + 1);
    }
  }

  dispose() {
    // This runs when the component is torn down. Put here any logic necessary to clean up,
    //当组件被拆下时，它将运行。把需要清理的逻辑写在这里，
    // for example cancelling setTimeouts or disposing Knockout subscriptions.
    //例如，取消setTimeouts或取消取消订阅。
  }
}

// The default export returns the component details object to register with KO
//默认导出返回要向KO注册的组件详细信息对象
export default { viewModel: ClickCounterViewModel, template: template };

