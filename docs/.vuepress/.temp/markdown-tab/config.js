import { CodeTabs } from "/opt/code/nodejs/bytesgo.com/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/opt/code/nodejs/bytesgo.com/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/opt/code/nodejs/bytesgo.com/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
