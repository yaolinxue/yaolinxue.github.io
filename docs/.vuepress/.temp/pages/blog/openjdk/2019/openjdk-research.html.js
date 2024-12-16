import comp from "/opt/code/nodejs/bytesgo2.com/docs/.vuepress/.temp/pages/blog/openjdk/2019/openjdk-research.html.vue"
const data = JSON.parse("{\"path\":\"/blog/openjdk/2019/openjdk-research.html\",\"title\":\"openjdk\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"openjdk\",\"date\":\"2020-07-02T00:00:00.000Z\",\"categories\":[\"openjdk\"],\"tags\":[\"openjdk\",\"源码编译\"]},\"headers\":[{\"level\":2,\"title\":\"openjdk research\",\"slug\":\"openjdk-research\",\"link\":\"#openjdk-research\",\"children\":[]},{\"level\":2,\"title\":\"OracleJDK和OpenJDK\",\"slug\":\"oraclejdk和openjdk\",\"link\":\"#oraclejdk和openjdk\",\"children\":[]},{\"level\":2,\"title\":\"为什么要切换Oracle JDK到OpenJDK\",\"slug\":\"为什么要切换oracle-jdk到openjdk\",\"link\":\"#为什么要切换oracle-jdk到openjdk\",\"children\":[]},{\"level\":2,\"title\":\"OpenJDK安装\",\"slug\":\"openjdk安装\",\"link\":\"#openjdk安装\",\"children\":[]},{\"level\":2,\"title\":\"OpennJDK自编译\",\"slug\":\"opennjdk自编译\",\"link\":\"#opennjdk自编译\",\"children\":[{\"level\":3,\"title\":\"获取OpenJDK源码\",\"slug\":\"获取openjdk源码\",\"link\":\"#获取openjdk源码\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"blog/openjdk/2019/openjdk-research.md\",\"excerpt\":\"<h2>openjdk research</h2>\\n<p>OpenJDK是Oracle JDK的开源版本，使用GPL License协议发布，很多Linux发行版本中会包含OpenJDK。而且，新版本的Oracle JDK代码是基于OpenJDK代码的，但有一些核心代码，oracle JDK是没有开源的，OpenJDK是有自己的实现方案的。\\n更多关于OpenJDK的FAQ查看<a href=\\\"http://openjdk.java.net/faq/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">http://openjdk.java.net/faq/</a></p>\"}")
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
