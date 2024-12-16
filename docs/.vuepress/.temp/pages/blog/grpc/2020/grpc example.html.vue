<template><div><h2 id="grpc-example" tabindex="-1"><a class="header-anchor" href="#grpc-example"><span>grpc-example</span></a></h2>
<p>基于gRPC实现的简单rpc框架</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<h3 id="属性配置" tabindex="-1"><a class="header-anchor" href="#属性配置"><span>属性配置</span></a></h3>
<p>pom.xml中配置依赖的gRPC版本号</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	&lt;properties></span>
<span class="line">		&lt;grpc.version>1.32.1&lt;/grpc.version></span>
<span class="line">		&lt;!-- Message源文件输出目录 --></span>
<span class="line">		&lt;javaOutputDirectory>${project.basedir}/src/main/java-proto&lt;/javaOutputDirectory></span>
<span class="line">		&lt;!-- gRPC源文件输出目录 --></span>
<span class="line">		&lt;protocPluginOutputDirectory>${project.basedir}/src/main/java-grpc&lt;/protocPluginOutputDirectory></span>
<span class="line">	&lt;/properties></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="maven依赖" tabindex="-1"><a class="header-anchor" href="#maven依赖"><span>Maven依赖</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	&lt;dependencies></span>
<span class="line">		&lt;dependency></span>
<span class="line">			&lt;groupId>io.grpc&lt;/groupId></span>
<span class="line">			&lt;artifactId>grpc-netty&lt;/artifactId></span>
<span class="line">			&lt;version>${grpc.version}&lt;/version></span>
<span class="line">		&lt;/dependency></span>
<span class="line">		&lt;dependency></span>
<span class="line">			&lt;groupId>io.grpc&lt;/groupId></span>
<span class="line">			&lt;artifactId>grpc-protobuf&lt;/artifactId></span>
<span class="line">			&lt;version>${grpc.version}&lt;/version></span>
<span class="line">		&lt;/dependency></span>
<span class="line">		&lt;dependency></span>
<span class="line">			&lt;groupId>io.grpc&lt;/groupId></span>
<span class="line">			&lt;artifactId>grpc-stub&lt;/artifactId></span>
<span class="line">			&lt;version>${grpc.version}&lt;/version></span>
<span class="line">		&lt;/dependency></span>
<span class="line">		&lt;dependency></span>
<span class="line">			&lt;groupId>com.alibaba&lt;/groupId></span>
<span class="line">			&lt;artifactId>fastjson&lt;/artifactId></span>
<span class="line">			&lt;version>1.2.74&lt;/version></span>
<span class="line">		&lt;/dependency></span>
<span class="line">		&lt;dependency></span>
<span class="line">			&lt;groupId>ch.qos.logback&lt;/groupId></span>
<span class="line">			&lt;artifactId>logback-classic&lt;/artifactId></span>
<span class="line">			&lt;version>1.2.3&lt;/version></span>
<span class="line">		&lt;/dependency></span>
<span class="line"></span>
<span class="line">	&lt;/dependencies></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="maven插件" tabindex="-1"><a class="header-anchor" href="#maven插件"><span>Maven插件</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">	&lt;build></span>
<span class="line">		&lt;extensions></span>
<span class="line">			&lt;extension></span>
<span class="line">				&lt;groupId>kr.motd.maven&lt;/groupId></span>
<span class="line">				&lt;artifactId>os-maven-plugin&lt;/artifactId></span>
<span class="line">				&lt;version>1.6.2&lt;/version></span>
<span class="line">			&lt;/extension></span>
<span class="line">		&lt;/extensions></span>
<span class="line">		&lt;plugins></span>
<span class="line">			&lt;plugin></span>
<span class="line">				&lt;groupId>org.xolstice.maven.plugins&lt;/groupId></span>
<span class="line">				&lt;artifactId>protobuf-maven-plugin&lt;/artifactId></span>
<span class="line">				&lt;version>0.6.1&lt;/version></span>
<span class="line">				&lt;configuration></span>
<span class="line">					&lt;protocArtifact></span>
<span class="line">						com.google.protobuf:protoc:3.13.0:exe:${os.detected.classifier}</span>
<span class="line">					&lt;/protocArtifact></span>
<span class="line">					&lt;pluginId>grpc-java&lt;/pluginId></span>
<span class="line">					&lt;pluginArtifact></span>
<span class="line">						io.grpc:protoc-gen-grpc-java:1.32.1:exe:${os.detected.classifier}</span>
<span class="line">					&lt;/pluginArtifact></span>
<span class="line">				&lt;/configuration></span>
<span class="line">				&lt;executions></span>
<span class="line">					&lt;execution></span>
<span class="line">						&lt;goals></span>
<span class="line">							&lt;goal>compile&lt;/goal></span>
<span class="line">							&lt;goal>compile-custom&lt;/goal></span>
<span class="line">						&lt;/goals></span>
<span class="line">					&lt;/execution></span>
<span class="line">				&lt;/executions></span>
<span class="line">			&lt;/plugin></span>
<span class="line">		&lt;/plugins></span>
<span class="line">	&lt;/build></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="框架开发" tabindex="-1"><a class="header-anchor" href="#框架开发"><span>框架开发</span></a></h2>
<h3 id="protobuf文件" tabindex="-1"><a class="header-anchor" href="#protobuf文件"><span>Protobuf文件</span></a></h3>
<p>创建文件 src/main/proto/crpc_protocol.proto</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">syntax = "proto3";</span>
<span class="line"></span>
<span class="line">option java_package = "com.github.leeyazhou.grpc";</span>
<span class="line">option java_multiple_files = true;</span>
<span class="line">option java_outer_classname = "CrpcProtocol";</span>
<span class="line"></span>
<span class="line">message RequestGrpcMessage {</span>
<span class="line">    bytes invocation = 1;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">message ResponseGrpcMessage {</span>
<span class="line">    bytes response = 1;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">service MessageService {</span>
<span class="line">    rpc request (RequestGrpcMessage) returns (ResponseGrpcMessage);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行如下命令会生成Protobuf文件对应的Java类</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">mvn protobuf:compile </span>
<span class="line">mvn protobuf:compile-custom</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="公用基础模型类" tabindex="-1"><a class="header-anchor" href="#公用基础模型类"><span>公用基础模型类</span></a></h3>
<p>Invocation.java</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">package com.github.leeyazhou.grpc.core;</span>
<span class="line"></span>
<span class="line">public class Invocation {</span>
<span class="line"></span>
<span class="line">	private String serviceName;</span>
<span class="line">	private String methodName;</span>
<span class="line">	private Object[] args;</span>
<span class="line"></span>
<span class="line">	public String getServiceName() {</span>
<span class="line">		return serviceName;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public void setServiceName(String serviceName) {</span>
<span class="line">		this.serviceName = serviceName;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public String getMethodName() {</span>
<span class="line">		return methodName;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public void setMethodName(String methodName) {</span>
<span class="line">		this.methodName = methodName;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public Object[] getArgs() {</span>
<span class="line">		return args;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public void setArgs(Object[] args) {</span>
<span class="line">		this.args = args;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Response.java</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">package com.github.leeyazhou.grpc.core;</span>
<span class="line"></span>
<span class="line">public class Response {</span>
<span class="line"></span>
<span class="line">	private boolean error;</span>
<span class="line">	private Object response;</span>
<span class="line">	private Throwable exception;</span>
<span class="line"></span>
<span class="line">	public boolean isError() {</span>
<span class="line">		return error;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public void setError(boolean error) {</span>
<span class="line">		this.error = error;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public Object getResponse() {</span>
<span class="line">		return response;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public void setResponse(Object response) {</span>
<span class="line">		this.response = response;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public Throwable getException() {</span>
<span class="line">		return exception;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public void setException(Throwable exception) {</span>
<span class="line">		this.exception = exception;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="server代码" tabindex="-1"><a class="header-anchor" href="#server代码"><span>Server代码</span></a></h3>
<p>GrpcServer.java</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">package com.github.leeyazhou.grpc.core.server;</span>
<span class="line"></span>
<span class="line">import java.io.IOException;</span>
<span class="line"></span>
<span class="line">import io.grpc.Server;</span>
<span class="line">import io.grpc.ServerBuilder;</span>
<span class="line"></span>
<span class="line">public class GrpcServer {</span>
<span class="line">	private Server server;</span>
<span class="line">	private ServiceHandler serviceHandler;</span>
<span class="line"></span>
<span class="line">	public GrpcServer(int port) {</span>
<span class="line">		this.serviceHandler = new ServiceHandler();</span>
<span class="line">		this.server = ServerBuilder.forPort(port)</span>
<span class="line">				// 将具体实现的服务添加到gRPC服务中</span>
<span class="line">				.addService(new GrpcServerHandler(serviceHandler))</span>
<span class="line"></span>
<span class="line">				.build();</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public GrpcServer addService(String name, Object service) {</span>
<span class="line">		serviceHandler.addService(name, service);</span>
<span class="line">		return this;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public void start() throws IOException {</span>
<span class="line">		server.start();</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public void shutdown() {</span>
<span class="line">		server.shutdown();</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GrpcServerHandler.java负责处理接收到的请求，并转发给ServiceHandler.java处理，处理完成后响应给请求端。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">package com.github.leeyazhou.grpc.core.server;</span>
<span class="line"></span>
<span class="line">import com.github.leeyazhou.grpc.MessageServiceGrpc.MessageServiceImplBase;</span>
<span class="line">import com.github.leeyazhou.grpc.core.Invocation;</span>
<span class="line">import com.github.leeyazhou.grpc.core.Response;</span>
<span class="line">import com.github.leeyazhou.grpc.core.serializer.JSONSerializer;</span>
<span class="line">import com.github.leeyazhou.grpc.core.serializer.Serializer;</span>
<span class="line">import com.github.leeyazhou.grpc.RequestGrpcMessage;</span>
<span class="line">import com.github.leeyazhou.grpc.ResponseGrpcMessage;</span>
<span class="line">import com.google.protobuf.ByteString;</span>
<span class="line"></span>
<span class="line">import io.grpc.stub.StreamObserver;</span>
<span class="line"></span>
<span class="line">public class GrpcServerHandler extends MessageServiceImplBase {</span>
<span class="line">	private ServiceHandler serviceHandler;</span>
<span class="line">	private Serializer serializer = new JSONSerializer();</span>
<span class="line"></span>
<span class="line">	public GrpcServerHandler(ServiceHandler serviceHandler) {</span>
<span class="line">		this.serviceHandler = serviceHandler;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	@Override</span>
<span class="line">	public void request(RequestGrpcMessage request, StreamObserver&lt;ResponseGrpcMessage> responseObserver) {</span>
<span class="line">		try {</span>
<span class="line">			final Invocation invocation = serializer.deserialize(request.getInvocation().toByteArray(),</span>
<span class="line">					Invocation.class);</span>
<span class="line">			final Response response = handleRequest(invocation);</span>
<span class="line"></span>
<span class="line">			byte[] jsonByte = serializer.serialize(response);</span>
<span class="line">			ResponseGrpcMessage resp = ResponseGrpcMessage.newBuilder().setResponse(ByteString.copyFrom(jsonByte))</span>
<span class="line">					.build();</span>
<span class="line">			responseObserver.onNext(resp);</span>
<span class="line">			responseObserver.onCompleted();</span>
<span class="line">		} catch (Exception e) {</span>
<span class="line">			responseObserver.onError(e);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	private Response handleRequest(Invocation invocation) {</span>
<span class="line">		Response response = new Response();</span>
<span class="line">		response.setError(false);</span>
<span class="line">		try {</span>
<span class="line">			Object ret = serviceHandler.handle(invocation);</span>
<span class="line">			response.setResponse(ret);</span>
<span class="line">		} catch (Exception e) {</span>
<span class="line">			response.setError(true);</span>
<span class="line">			response.setException(e);</span>
<span class="line">		}</span>
<span class="line">		return response;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ServiceHandler.java</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">package com.github.leeyazhou.grpc.core.server;</span>
<span class="line"></span>
<span class="line">import java.lang.reflect.Method;</span>
<span class="line">import java.util.Map;</span>
<span class="line">import java.util.concurrent.ConcurrentHashMap;</span>
<span class="line"></span>
<span class="line">import com.github.leeyazhou.grpc.core.Invocation;</span>
<span class="line"></span>
<span class="line">public class ServiceHandler {</span>
<span class="line">	private Map&lt;String, Object> services = new ConcurrentHashMap&lt;>();</span>
<span class="line">	private Map&lt;String, Method> serviceMethods = new ConcurrentHashMap&lt;>();</span>
<span class="line"></span>
<span class="line">	public Object handle(Invocation invocation) {</span>
<span class="line">		Object service = services.get(invocation.getServiceName());</span>
<span class="line">		Method serviceMethod = serviceMethods.get(invocation.getServiceName() + "$" + invocation.getMethodName());</span>
<span class="line"></span>
<span class="line">		try {</span>
<span class="line">			return serviceMethod.invoke(service, invocation.getArgs());</span>
<span class="line">		} catch (Exception e) {</span>
<span class="line">			e.printStackTrace();</span>
<span class="line">			throw new RuntimeException(e);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public void addService(String name, Object service) {</span>
<span class="line">		this.services.put(name, service);</span>
<span class="line">		Method[] methods = service.getClass().getDeclaredMethods();</span>
<span class="line">		if (methods != null) {</span>
<span class="line">			for (Method method : methods) {</span>
<span class="line">				String key = name + "$" + method.getName();</span>
<span class="line">				serviceMethods.put(key, method);</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line"></span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="client代码" tabindex="-1"><a class="header-anchor" href="#client代码"><span>Client代码</span></a></h3>
<p>GrpcClient.java</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">package com.github.leeyazhou.grpc.core.client;</span>
<span class="line"></span>
<span class="line">import java.util.Map;</span>
<span class="line">import java.util.concurrent.ConcurrentHashMap;</span>
<span class="line"></span>
<span class="line">import com.github.leeyazhou.grpc.MessageServiceGrpc;</span>
<span class="line">import com.github.leeyazhou.grpc.RequestGrpcMessage;</span>
<span class="line">import com.github.leeyazhou.grpc.ResponseGrpcMessage;</span>
<span class="line">import com.github.leeyazhou.grpc.core.Invocation;</span>
<span class="line">import com.github.leeyazhou.grpc.core.Response;</span>
<span class="line">import com.github.leeyazhou.grpc.core.serializer.JSONSerializer;</span>
<span class="line">import com.github.leeyazhou.grpc.core.serializer.Serializer;</span>
<span class="line">import com.google.protobuf.ByteString;</span>
<span class="line"></span>
<span class="line">import io.grpc.ManagedChannel;</span>
<span class="line">import io.grpc.ManagedChannelBuilder;</span>
<span class="line"></span>
<span class="line">public class GrpcClient {</span>
<span class="line">	private final Serializer serializer = new JSONSerializer();</span>
<span class="line">	private final MessageServiceGrpc.MessageServiceBlockingStub blockingStub;</span>
<span class="line">	private static final Map&lt;String, GrpcClient> clientCache = new ConcurrentHashMap&lt;>();</span>
<span class="line"></span>
<span class="line">	public static GrpcClient get(String host, int port) {</span>
<span class="line">		final String key = host + ":" + port;</span>
<span class="line">		return clientCache.compute(key, (k1, v1) -> {</span>
<span class="line">			return v1 != null ? v1 : new GrpcClient(host, port);</span>
<span class="line">		});</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public GrpcClient(String host, int port) {</span>
<span class="line">		ManagedChannel managedChannel = ManagedChannelBuilder.forAddress(host, port)</span>
<span class="line">				// 使用非安全机制传输</span>
<span class="line">				.usePlaintext().build();</span>
<span class="line">		this.blockingStub = MessageServiceGrpc.newBlockingStub(managedChannel);</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public Response request(Invocation invocation) {</span>
<span class="line">		byte[] jsonBytes = serializer.serialize(invocation);</span>
<span class="line">		ByteString byteString = ByteString.copyFrom(jsonBytes);</span>
<span class="line"></span>
<span class="line">		RequestGrpcMessage greeting = RequestGrpcMessage.newBuilder().setInvocation(byteString).build();</span>
<span class="line">		ResponseGrpcMessage resp = blockingStub.request(greeting);</span>
<span class="line">		byte[] responseByte = resp.getResponse().toByteArray();</span>
<span class="line">		return serializer.deserialize(responseByte, Response.class);</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<h3 id="服务类开发" tabindex="-1"><a class="header-anchor" href="#服务类开发"><span>服务类开发</span></a></h3>
<p>EchoService.java定义服务接口</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">public interface EchoService {</span>
<span class="line">	String echo(String echo);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>EchoServiceImpl.java实现服务功能：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">public class EchoServiceImpl implements EchoService {</span>
<span class="line">	@Override</span>
<span class="line">	public String echo(String echo) {</span>
<span class="line">		System.err.println("回声: " + echo);</span>
<span class="line">		return echo;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动服务端" tabindex="-1"><a class="header-anchor" href="#启动服务端"><span>启动服务端</span></a></h3>
<p>GrpcProvider.java 启动Server服务，并监听端口8000</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">public class GrpcProvider {</span>
<span class="line"></span>
<span class="line">	public static void main(String[] args) throws Exception {</span>
<span class="line">		new GrpcProvider().start();</span>
<span class="line">		Thread.sleep(Integer.MAX_VALUE);</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public void start() throws Exception {</span>
<span class="line">		int port = 8000;</span>
<span class="line">		GrpcServer server = new GrpcServer(port);</span>
<span class="line">		server.addService(EchoService.class.getSimpleName(), new EchoServiceImpl());</span>
<span class="line">		server.start();</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端调用服务" tabindex="-1"><a class="header-anchor" href="#客户端调用服务"><span>客户端调用服务</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">public class GrpcConsumer {</span>
<span class="line"></span>
<span class="line">	public static void main(String[] args) {</span>
<span class="line">		new GrpcConsumer().start();</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public void start() {</span>
<span class="line">		String host = "127.0.0.1";</span>
<span class="line">		int port = 8000;</span>
<span class="line">		GrpcClient client = GrpcClient.get(host, port);</span>
<span class="line"></span>
<span class="line">		Invocation invocation = new Invocation();</span>
<span class="line">		invocation.setServiceName("EchoService");</span>
<span class="line">		invocation.setMethodName("echo");</span>
<span class="line">		invocation.setArgs(new String[] { "测试GRPC" });</span>
<span class="line">		Response response = client.request(invocation);</span>
<span class="line">		System.out.println(response.getResponse());</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2>
<p>源码地址<a href="https://github.com/leeyazhou/grpc-example" target="_blank" rel="noopener noreferrer">github.com/leeyazhou/grpc-example</a></p>
</div></template>


