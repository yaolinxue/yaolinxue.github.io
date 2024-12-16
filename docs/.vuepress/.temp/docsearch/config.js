
import { DocSearch, injectDocSearchConfig } from "/opt/code/nodejs/bytesgo2.com/node_modules/@vuepress/plugin-docsearch/lib/client/index.js"
import '/opt/code/nodejs/bytesgo2.com/node_modules/@docsearch/css/dist/style.css'
import '/opt/code/nodejs/bytesgo2.com/node_modules/@vuepress/plugin-docsearch/lib/client/styles/docsearch.css'
import '/opt/code/nodejs/bytesgo2.com/node_modules/@vuepress/plugin-docsearch/lib/client/styles/vars.css'

export default {
  enhance({ app }) {
    injectDocSearchConfig(app)
    app.component('SearchBox', DocSearch)
  },
}
