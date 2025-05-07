import{_ as n,o as a,c as p,a6 as e}from"./chunks/framework.BkI9ovSD.js";const u=JSON.parse('{"title":"grpc-example 基于gRPC实现的简单rpc框架","description":"","frontmatter":{"title":"grpc-example 基于gRPC实现的简单rpc框架","date":"2020-10-01T00:00:00.000Z","author":"yaolinxue","categories":["grpc"],"tags":["grpc","微服务框架"]},"headers":[],"relativePath":"blog/grpc/2020/grpc example.md","filePath":"blog/grpc/2020/grpc example.md","lastUpdated":1746603753000}'),t={name:"blog/grpc/2020/grpc example.md"};function l(i,s,c,r,o,g){return a(),p("div",{"data-pagefind-body":!0},s[0]||(s[0]=[e(`<h2 id="grpc-example" tabindex="-1">grpc-example <a class="header-anchor" href="#grpc-example" aria-label="Permalink to &quot;grpc-example&quot;">​</a></h2><p>基于gRPC实现的简单rpc框架</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><h3 id="属性配置" tabindex="-1">属性配置 <a class="header-anchor" href="#属性配置" aria-label="Permalink to &quot;属性配置&quot;">​</a></h3><p>pom.xml中配置依赖的gRPC版本号</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	&lt;properties&gt;</span></span>
<span class="line"><span>		&lt;grpc.version&gt;1.32.1&lt;/grpc.version&gt;</span></span>
<span class="line"><span>		&lt;!-- Message源文件输出目录 --&gt;</span></span>
<span class="line"><span>		&lt;javaOutputDirectory&gt;\${project.basedir}/src/main/java-proto&lt;/javaOutputDirectory&gt;</span></span>
<span class="line"><span>		&lt;!-- gRPC源文件输出目录 --&gt;</span></span>
<span class="line"><span>		&lt;protocPluginOutputDirectory&gt;\${project.basedir}/src/main/java-grpc&lt;/protocPluginOutputDirectory&gt;</span></span>
<span class="line"><span>	&lt;/properties&gt;</span></span></code></pre></div><h3 id="maven依赖" tabindex="-1">Maven依赖 <a class="header-anchor" href="#maven依赖" aria-label="Permalink to &quot;Maven依赖&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	&lt;dependencies&gt;</span></span>
<span class="line"><span>		&lt;dependency&gt;</span></span>
<span class="line"><span>			&lt;groupId&gt;io.grpc&lt;/groupId&gt;</span></span>
<span class="line"><span>			&lt;artifactId&gt;grpc-netty&lt;/artifactId&gt;</span></span>
<span class="line"><span>			&lt;version&gt;\${grpc.version}&lt;/version&gt;</span></span>
<span class="line"><span>		&lt;/dependency&gt;</span></span>
<span class="line"><span>		&lt;dependency&gt;</span></span>
<span class="line"><span>			&lt;groupId&gt;io.grpc&lt;/groupId&gt;</span></span>
<span class="line"><span>			&lt;artifactId&gt;grpc-protobuf&lt;/artifactId&gt;</span></span>
<span class="line"><span>			&lt;version&gt;\${grpc.version}&lt;/version&gt;</span></span>
<span class="line"><span>		&lt;/dependency&gt;</span></span>
<span class="line"><span>		&lt;dependency&gt;</span></span>
<span class="line"><span>			&lt;groupId&gt;io.grpc&lt;/groupId&gt;</span></span>
<span class="line"><span>			&lt;artifactId&gt;grpc-stub&lt;/artifactId&gt;</span></span>
<span class="line"><span>			&lt;version&gt;\${grpc.version}&lt;/version&gt;</span></span>
<span class="line"><span>		&lt;/dependency&gt;</span></span>
<span class="line"><span>		&lt;dependency&gt;</span></span>
<span class="line"><span>			&lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span>			&lt;artifactId&gt;fastjson&lt;/artifactId&gt;</span></span>
<span class="line"><span>			&lt;version&gt;1.2.74&lt;/version&gt;</span></span>
<span class="line"><span>		&lt;/dependency&gt;</span></span>
<span class="line"><span>		&lt;dependency&gt;</span></span>
<span class="line"><span>			&lt;groupId&gt;ch.qos.logback&lt;/groupId&gt;</span></span>
<span class="line"><span>			&lt;artifactId&gt;logback-classic&lt;/artifactId&gt;</span></span>
<span class="line"><span>			&lt;version&gt;1.2.3&lt;/version&gt;</span></span>
<span class="line"><span>		&lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&lt;/dependencies&gt;</span></span></code></pre></div><h3 id="maven插件" tabindex="-1">Maven插件 <a class="header-anchor" href="#maven插件" aria-label="Permalink to &quot;Maven插件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	&lt;build&gt;</span></span>
<span class="line"><span>		&lt;extensions&gt;</span></span>
<span class="line"><span>			&lt;extension&gt;</span></span>
<span class="line"><span>				&lt;groupId&gt;kr.motd.maven&lt;/groupId&gt;</span></span>
<span class="line"><span>				&lt;artifactId&gt;os-maven-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>				&lt;version&gt;1.6.2&lt;/version&gt;</span></span>
<span class="line"><span>			&lt;/extension&gt;</span></span>
<span class="line"><span>		&lt;/extensions&gt;</span></span>
<span class="line"><span>		&lt;plugins&gt;</span></span>
<span class="line"><span>			&lt;plugin&gt;</span></span>
<span class="line"><span>				&lt;groupId&gt;org.xolstice.maven.plugins&lt;/groupId&gt;</span></span>
<span class="line"><span>				&lt;artifactId&gt;protobuf-maven-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>				&lt;version&gt;0.6.1&lt;/version&gt;</span></span>
<span class="line"><span>				&lt;configuration&gt;</span></span>
<span class="line"><span>					&lt;protocArtifact&gt;</span></span>
<span class="line"><span>						com.google.protobuf:protoc:3.13.0:exe:\${os.detected.classifier}</span></span>
<span class="line"><span>					&lt;/protocArtifact&gt;</span></span>
<span class="line"><span>					&lt;pluginId&gt;grpc-java&lt;/pluginId&gt;</span></span>
<span class="line"><span>					&lt;pluginArtifact&gt;</span></span>
<span class="line"><span>						io.grpc:protoc-gen-grpc-java:1.32.1:exe:\${os.detected.classifier}</span></span>
<span class="line"><span>					&lt;/pluginArtifact&gt;</span></span>
<span class="line"><span>				&lt;/configuration&gt;</span></span>
<span class="line"><span>				&lt;executions&gt;</span></span>
<span class="line"><span>					&lt;execution&gt;</span></span>
<span class="line"><span>						&lt;goals&gt;</span></span>
<span class="line"><span>							&lt;goal&gt;compile&lt;/goal&gt;</span></span>
<span class="line"><span>							&lt;goal&gt;compile-custom&lt;/goal&gt;</span></span>
<span class="line"><span>						&lt;/goals&gt;</span></span>
<span class="line"><span>					&lt;/execution&gt;</span></span>
<span class="line"><span>				&lt;/executions&gt;</span></span>
<span class="line"><span>			&lt;/plugin&gt;</span></span>
<span class="line"><span>		&lt;/plugins&gt;</span></span>
<span class="line"><span>	&lt;/build&gt;</span></span></code></pre></div><h2 id="框架开发" tabindex="-1">框架开发 <a class="header-anchor" href="#框架开发" aria-label="Permalink to &quot;框架开发&quot;">​</a></h2><h3 id="protobuf文件" tabindex="-1">Protobuf文件 <a class="header-anchor" href="#protobuf文件" aria-label="Permalink to &quot;Protobuf文件&quot;">​</a></h3><p>创建文件 src/main/proto/crpc_protocol.proto</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>syntax = &quot;proto3&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>option java_package = &quot;com.github.yaolinxue.grpc&quot;;</span></span>
<span class="line"><span>option java_multiple_files = true;</span></span>
<span class="line"><span>option java_outer_classname = &quot;CrpcProtocol&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message RequestGrpcMessage {</span></span>
<span class="line"><span>    bytes invocation = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message ResponseGrpcMessage {</span></span>
<span class="line"><span>    bytes response = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service MessageService {</span></span>
<span class="line"><span>    rpc request (RequestGrpcMessage) returns (ResponseGrpcMessage);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>执行如下命令会生成Protobuf文件对应的Java类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mvn protobuf:compile </span></span>
<span class="line"><span>mvn protobuf:compile-custom</span></span></code></pre></div><h3 id="公用基础模型类" tabindex="-1">公用基础模型类 <a class="header-anchor" href="#公用基础模型类" aria-label="Permalink to &quot;公用基础模型类&quot;">​</a></h3><p>Invocation.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.github.yaolinxue.grpc.core;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Invocation {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	private String serviceName;</span></span>
<span class="line"><span>	private String methodName;</span></span>
<span class="line"><span>	private Object[] args;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public String getServiceName() {</span></span>
<span class="line"><span>		return serviceName;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void setServiceName(String serviceName) {</span></span>
<span class="line"><span>		this.serviceName = serviceName;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public String getMethodName() {</span></span>
<span class="line"><span>		return methodName;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void setMethodName(String methodName) {</span></span>
<span class="line"><span>		this.methodName = methodName;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public Object[] getArgs() {</span></span>
<span class="line"><span>		return args;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void setArgs(Object[] args) {</span></span>
<span class="line"><span>		this.args = args;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Response.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.github.yaolinxue.grpc.core;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Response {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	private boolean error;</span></span>
<span class="line"><span>	private Object response;</span></span>
<span class="line"><span>	private Throwable exception;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public boolean isError() {</span></span>
<span class="line"><span>		return error;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void setError(boolean error) {</span></span>
<span class="line"><span>		this.error = error;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public Object getResponse() {</span></span>
<span class="line"><span>		return response;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void setResponse(Object response) {</span></span>
<span class="line"><span>		this.response = response;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public Throwable getException() {</span></span>
<span class="line"><span>		return exception;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void setException(Throwable exception) {</span></span>
<span class="line"><span>		this.exception = exception;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="server代码" tabindex="-1">Server代码 <a class="header-anchor" href="#server代码" aria-label="Permalink to &quot;Server代码&quot;">​</a></h3><p>GrpcServer.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.github.yaolinxue.grpc.core.server;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import io.grpc.Server;</span></span>
<span class="line"><span>import io.grpc.ServerBuilder;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class GrpcServer {</span></span>
<span class="line"><span>	private Server server;</span></span>
<span class="line"><span>	private ServiceHandler serviceHandler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public GrpcServer(int port) {</span></span>
<span class="line"><span>		this.serviceHandler = new ServiceHandler();</span></span>
<span class="line"><span>		this.server = ServerBuilder.forPort(port)</span></span>
<span class="line"><span>				// 将具体实现的服务添加到gRPC服务中</span></span>
<span class="line"><span>				.addService(new GrpcServerHandler(serviceHandler))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>				.build();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public GrpcServer addService(String name, Object service) {</span></span>
<span class="line"><span>		serviceHandler.addService(name, service);</span></span>
<span class="line"><span>		return this;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void start() throws IOException {</span></span>
<span class="line"><span>		server.start();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void shutdown() {</span></span>
<span class="line"><span>		server.shutdown();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>GrpcServerHandler.java负责处理接收到的请求，并转发给ServiceHandler.java处理，处理完成后响应给请求端。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.github.yaolinxue.grpc.core.server;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.MessageServiceGrpc.MessageServiceImplBase;</span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.core.Invocation;</span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.core.Response;</span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.core.serializer.JSONSerializer;</span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.core.serializer.Serializer;</span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.RequestGrpcMessage;</span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.ResponseGrpcMessage;</span></span>
<span class="line"><span>import com.google.protobuf.ByteString;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import io.grpc.stub.StreamObserver;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class GrpcServerHandler extends MessageServiceImplBase {</span></span>
<span class="line"><span>	private ServiceHandler serviceHandler;</span></span>
<span class="line"><span>	private Serializer serializer = new JSONSerializer();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public GrpcServerHandler(ServiceHandler serviceHandler) {</span></span>
<span class="line"><span>		this.serviceHandler = serviceHandler;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void request(RequestGrpcMessage request, StreamObserver&lt;ResponseGrpcMessage&gt; responseObserver) {</span></span>
<span class="line"><span>		try {</span></span>
<span class="line"><span>			final Invocation invocation = serializer.deserialize(request.getInvocation().toByteArray(),</span></span>
<span class="line"><span>					Invocation.class);</span></span>
<span class="line"><span>			final Response response = handleRequest(invocation);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			byte[] jsonByte = serializer.serialize(response);</span></span>
<span class="line"><span>			ResponseGrpcMessage resp = ResponseGrpcMessage.newBuilder().setResponse(ByteString.copyFrom(jsonByte))</span></span>
<span class="line"><span>					.build();</span></span>
<span class="line"><span>			responseObserver.onNext(resp);</span></span>
<span class="line"><span>			responseObserver.onCompleted();</span></span>
<span class="line"><span>		} catch (Exception e) {</span></span>
<span class="line"><span>			responseObserver.onError(e);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	private Response handleRequest(Invocation invocation) {</span></span>
<span class="line"><span>		Response response = new Response();</span></span>
<span class="line"><span>		response.setError(false);</span></span>
<span class="line"><span>		try {</span></span>
<span class="line"><span>			Object ret = serviceHandler.handle(invocation);</span></span>
<span class="line"><span>			response.setResponse(ret);</span></span>
<span class="line"><span>		} catch (Exception e) {</span></span>
<span class="line"><span>			response.setError(true);</span></span>
<span class="line"><span>			response.setException(e);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		return response;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>ServiceHandler.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.github.yaolinxue.grpc.core.server;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.lang.reflect.Method;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span>import java.util.concurrent.ConcurrentHashMap;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.core.Invocation;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class ServiceHandler {</span></span>
<span class="line"><span>	private Map&lt;String, Object&gt; services = new ConcurrentHashMap&lt;&gt;();</span></span>
<span class="line"><span>	private Map&lt;String, Method&gt; serviceMethods = new ConcurrentHashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public Object handle(Invocation invocation) {</span></span>
<span class="line"><span>		Object service = services.get(invocation.getServiceName());</span></span>
<span class="line"><span>		Method serviceMethod = serviceMethods.get(invocation.getServiceName() + &quot;$&quot; + invocation.getMethodName());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		try {</span></span>
<span class="line"><span>			return serviceMethod.invoke(service, invocation.getArgs());</span></span>
<span class="line"><span>		} catch (Exception e) {</span></span>
<span class="line"><span>			e.printStackTrace();</span></span>
<span class="line"><span>			throw new RuntimeException(e);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void addService(String name, Object service) {</span></span>
<span class="line"><span>		this.services.put(name, service);</span></span>
<span class="line"><span>		Method[] methods = service.getClass().getDeclaredMethods();</span></span>
<span class="line"><span>		if (methods != null) {</span></span>
<span class="line"><span>			for (Method method : methods) {</span></span>
<span class="line"><span>				String key = name + &quot;$&quot; + method.getName();</span></span>
<span class="line"><span>				serviceMethods.put(key, method);</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="client代码" tabindex="-1">Client代码 <a class="header-anchor" href="#client代码" aria-label="Permalink to &quot;Client代码&quot;">​</a></h3><p>GrpcClient.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.github.yaolinxue.grpc.core.client;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span>import java.util.concurrent.ConcurrentHashMap;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.MessageServiceGrpc;</span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.RequestGrpcMessage;</span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.ResponseGrpcMessage;</span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.core.Invocation;</span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.core.Response;</span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.core.serializer.JSONSerializer;</span></span>
<span class="line"><span>import com.github.yaolinxue.grpc.core.serializer.Serializer;</span></span>
<span class="line"><span>import com.google.protobuf.ByteString;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import io.grpc.ManagedChannel;</span></span>
<span class="line"><span>import io.grpc.ManagedChannelBuilder;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class GrpcClient {</span></span>
<span class="line"><span>	private final Serializer serializer = new JSONSerializer();</span></span>
<span class="line"><span>	private final MessageServiceGrpc.MessageServiceBlockingStub blockingStub;</span></span>
<span class="line"><span>	private static final Map&lt;String, GrpcClient&gt; clientCache = new ConcurrentHashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public static GrpcClient get(String host, int port) {</span></span>
<span class="line"><span>		final String key = host + &quot;:&quot; + port;</span></span>
<span class="line"><span>		return clientCache.compute(key, (k1, v1) -&gt; {</span></span>
<span class="line"><span>			return v1 != null ? v1 : new GrpcClient(host, port);</span></span>
<span class="line"><span>		});</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public GrpcClient(String host, int port) {</span></span>
<span class="line"><span>		ManagedChannel managedChannel = ManagedChannelBuilder.forAddress(host, port)</span></span>
<span class="line"><span>				// 使用非安全机制传输</span></span>
<span class="line"><span>				.usePlaintext().build();</span></span>
<span class="line"><span>		this.blockingStub = MessageServiceGrpc.newBlockingStub(managedChannel);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public Response request(Invocation invocation) {</span></span>
<span class="line"><span>		byte[] jsonBytes = serializer.serialize(invocation);</span></span>
<span class="line"><span>		ByteString byteString = ByteString.copyFrom(jsonBytes);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		RequestGrpcMessage greeting = RequestGrpcMessage.newBuilder().setInvocation(byteString).build();</span></span>
<span class="line"><span>		ResponseGrpcMessage resp = blockingStub.request(greeting);</span></span>
<span class="line"><span>		byte[] responseByte = resp.getResponse().toByteArray();</span></span>
<span class="line"><span>		return serializer.deserialize(responseByte, Response.class);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><h3 id="服务类开发" tabindex="-1">服务类开发 <a class="header-anchor" href="#服务类开发" aria-label="Permalink to &quot;服务类开发&quot;">​</a></h3><p>EchoService.java定义服务接口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public interface EchoService {</span></span>
<span class="line"><span>	String echo(String echo);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>EchoServiceImpl.java实现服务功能：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class EchoServiceImpl implements EchoService {</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public String echo(String echo) {</span></span>
<span class="line"><span>		System.err.println(&quot;回声: &quot; + echo);</span></span>
<span class="line"><span>		return echo;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="启动服务端" tabindex="-1">启动服务端 <a class="header-anchor" href="#启动服务端" aria-label="Permalink to &quot;启动服务端&quot;">​</a></h3><p>GrpcProvider.java 启动Server服务，并监听端口8000</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class GrpcProvider {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span>		new GrpcProvider().start();</span></span>
<span class="line"><span>		Thread.sleep(Integer.MAX_VALUE);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void start() throws Exception {</span></span>
<span class="line"><span>		int port = 8000;</span></span>
<span class="line"><span>		GrpcServer server = new GrpcServer(port);</span></span>
<span class="line"><span>		server.addService(EchoService.class.getSimpleName(), new EchoServiceImpl());</span></span>
<span class="line"><span>		server.start();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="客户端调用服务" tabindex="-1">客户端调用服务 <a class="header-anchor" href="#客户端调用服务" aria-label="Permalink to &quot;客户端调用服务&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class GrpcConsumer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public static void main(String[] args) {</span></span>
<span class="line"><span>		new GrpcConsumer().start();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void start() {</span></span>
<span class="line"><span>		String host = &quot;127.0.0.1&quot;;</span></span>
<span class="line"><span>		int port = 8000;</span></span>
<span class="line"><span>		GrpcClient client = GrpcClient.get(host, port);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		Invocation invocation = new Invocation();</span></span>
<span class="line"><span>		invocation.setServiceName(&quot;EchoService&quot;);</span></span>
<span class="line"><span>		invocation.setMethodName(&quot;echo&quot;);</span></span>
<span class="line"><span>		invocation.setArgs(new String[] { &quot;测试GRPC&quot; });</span></span>
<span class="line"><span>		Response response = client.request(invocation);</span></span>
<span class="line"><span>		System.out.println(response.getResponse());</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>源码地址<a href="https://github.com/yaolinxue/grpc-example" target="_blank" rel="noreferrer">github.com/yaolinxue/grpc-example</a></p>`,44)]))}const v=n(t,[["render",l]]);export{u as __pageData,v as default};
