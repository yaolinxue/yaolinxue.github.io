import "/opt/code/nodejs/bytesgo2.com/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/opt/code/nodejs/bytesgo2.com/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/opt/code/nodejs/bytesgo2.com/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/opt/code/nodejs/bytesgo2.com/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/opt/code/nodejs/bytesgo2.com/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/opt/code/nodejs/bytesgo2.com/node_modules/@vuepress/highlighter-helper/lib/client/index.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
