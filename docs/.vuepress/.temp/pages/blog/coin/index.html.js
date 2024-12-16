import comp from "/opt/code/nodejs/bytesgo2.com/docs/.vuepress/.temp/pages/blog/coin/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/coin/\",\"title\":\"Coin\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Coin\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
