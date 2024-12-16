import comp from "/opt/code/nodejs/bytesgo2.com/docs/.vuepress/.temp/pages/blog/coin/2021/about coin.html.vue"
const data = JSON.parse("{\"path\":\"/blog/coin/2021/about%20coin.html\",\"title\":\"虚拟货币\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"虚拟货币\",\"date\":\"2021-02-24T00:00:00.000Z\",\"categories\":[\"数字货币\"],\"tags\":[\"数字货币\",\"虚拟币\",\"比特币\"]},\"headers\":[{\"level\":2,\"title\":\"缘起\",\"slug\":\"缘起\",\"link\":\"#缘起\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blog/coin/2021/about coin.md\",\"excerpt\":\"<h2>缘起</h2>\\n<p>最近虚拟货币很火啊，BTC价格一度达到360000人民币。</p>\\n\"}")
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
