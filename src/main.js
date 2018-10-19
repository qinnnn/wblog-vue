import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'
import lodash from 'lodash'
import ElementUI from 'element-ui'

import '@/assets/theme/index.css'
import '@/assets/icon/iconfont.css'

import {formatTime} from "./utils/time";

import MuseUI from 'muse-ui'//muse-ui
import 'muse-ui/dist/muse-ui.css';
import { theme } from 'muse-ui'
import { carbon, createTheme } from 'muse-ui-carbon-theme/src';
import Toast from 'muse-ui-toast';
import toastConfig from '@/utils/toastConfig';

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(MuseUI)
Vue.use(Toast,toastConfig)
theme.add('carbon', carbon)
  .addCreateTheme(createTheme)
  .use('carbon');

// lodash是一个一致性、模块化、高性能的 JavaScript 实用工具库
Object.defineProperty(Vue.prototype, '$_', {value: lodash})

Vue.directive('title', function (el, binding) {
  document.title = el.dataset.title
})

// 格式化时间
Vue.filter('format', formatTime)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
