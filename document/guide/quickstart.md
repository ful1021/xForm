# 快速上手
---
本节将介绍如何在项目中使用xForm。
::: tip 提示
该文档默认你使用[Webpack][webpack]构建项目，代码使用ES2015+规范进行编写。
:::


### 安装
推荐使用`npm`的方式安装，它能更好地和[Webpack][webpack]配合使用。
```sh
npm install @dongls/xform
```

### 使用
您可以选择只使用核心组件，也可以选择与流行的UI库集成的组件。

#### 只使用核心组件
如果您不需要任何内置的字段，您可以选择只引入核心组件。如果您选择了此种方式，那么您需要提供字段的具体实现。
```javascript
import Vue from 'vue';

import '@dongls/xform/dist/css/xform.css';
import XForm form '@dongls/xform';

Vue.use(XForm, {/* 全局配置, 可选 */})
```

#### 与ElementUI集成使用
如果您的项目使用了[ElementUI][ElementUI]，xForm提供了与其深度集成的字段，您可以按如下方式引入。
```javascript
import Vue from 'vue';

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import '@dongls/xform/dist/css/xform.element-ui.css';
import XForm form '@dongls/xform/dist/xform.element-ui';

Vue.use(ElementUI, {/* 全局配置, 可选 */});
Vue.use(XForm, {/* 全局配置, 可选 */})
```

[Webpack]: https://webpack.js.org
[ElementUI]: https://element.eleme.cn