import comp from "/opt/code/nodejs/bytesgo2.com/docs/.vuepress/.temp/pages/blog/grpc/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/grpc/\",\"title\":\"Grpc\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Grpc\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
