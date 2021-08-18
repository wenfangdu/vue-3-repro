import { ElButton, ElConfigProvider, ElSelect } from 'element-plus'

export default app => {
  app.use(ElButton)
  app.use(ElConfigProvider)
  app.use(ElSelect)
}
