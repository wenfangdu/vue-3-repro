import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element.js'
import locale from 'element-plus/lib/locale/lang/zh-cn.js'

const app = createApp({
  render() {
    return (
      <ElConfigProvider locale={locale}>
        <App />
      </ElConfigProvider>
    )
  },
})
installElementPlus(app)
app.use(store).use(router).mount('#app')
