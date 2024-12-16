<template><div><h2 id="领域驱动设计优势" tabindex="-1"><a class="header-anchor" href="#领域驱动设计优势"><span>领域驱动设计优势</span></a></h2>
<ul>
<li>领域专家和开发人员共同工作，这样软件可以准确表达业务规则，就像是领域专家开发出来的一样</li>
<li>帮助业务人员自我提高</li>
<li>知识集中，确保软件知识并不只是掌握在少数人手中</li>
<li>领域专家、开发者和软件间不需要“翻译”，彼此使用通用语言交流</li>
<li>设计就是代码，代码就是设计</li>
<li>DDD同时提供战略设计和战术设计。战略设计帮助理解必要的投入、团队人员构成；战术设计帮助创建DDD中的各个组件。</li>
</ul>
<h2 id="通用语言-ubiquitous-language" tabindex="-1"><a class="header-anchor" href="#通用语言-ubiquitous-language"><span>通用语言(Ubiquitous Language)</span></a></h2>
<p>领域模型和软件设计是紧密联系在一起的，软件系统的各个方面的设计都要忠实的反映领域模型，以便明确二者的对应关系。而且需要经常反复检查修改模型，以便更优雅的实现模型。
那么，领域专家、设计人员和开发人员就要有一套交流的专业术语，可以称之为Ubiquitous Language</p>
<p><img src="/img/ddd-ubiquitous-language.png" alt="通用语言"></p>
<h2 id="领域驱动设计概念" tabindex="-1"><a class="header-anchor" href="#领域驱动设计概念"><span>领域驱动设计概念</span></a></h2>
<ul>
<li>实体(Entity/Reference Object）</li>
<li>值对象(Value object)</li>
<li>聚合(Aggregate)和聚合根(Aggregate Root)</li>
<li>领域服务(Domain Service)</li>
<li>领域事件(Domain Event)</li>
<li>仓储(Repository)</li>
</ul>
<h3 id="实体-entity-reference-object" tabindex="-1"><a class="header-anchor" href="#实体-entity-reference-object"><span>实体(Entity/Reference Object)</span></a></h3>
<p>领域中具有生命周期的对象，通常会经历创建、更新和销毁的过程。它的显著特点是拥有一个全局唯一标识符，而且唯一标识符是区分两个实体是否相等的唯一条件。</p>
<h3 id="值对象-value-object" tabindex="-1"><a class="header-anchor" href="#值对象-value-object"><span>值对象(Value object)</span></a></h3>
<p>领域中当只关心领域模型的属性时，应把它归类为值对象。 而且值对象应该是不可变的，和实体对比来看，值对象不需要分配唯一标识符。两个对象只要内部属性都相等，就可以认为是同一个对象。</p>
<h3 id="聚合聚合根-aggregate-和聚合根-aggregate-root" tabindex="-1"><a class="header-anchor" href="#聚合聚合根-aggregate-和聚合根-aggregate-root"><span>聚合聚合根(Aggregate)和聚合根(Aggregate Root)</span></a></h3>
<ul>
<li>聚合定义了一组具有内聚关系的相关对象的集合，是一个修改数据的单元，通过聚合定义出对象间的关系和边界。</li>
<li>如果一个聚合只包含一个实体，那么这个实体可以认为是一个聚合根。</li>
</ul>
<h3 id="领域服务-domain-service" tabindex="-1"><a class="header-anchor" href="#领域服务-domain-service"><span>领域服务(Domain Service)</span></a></h3>
<ul>
<li>领域设计中，有些重要的操作不适合归类到Entity或Value Object的，可以设计到Service中，本质上是一些活动或者行为动作。</li>
<li>软件设计中，Service可以划分为三种类型：应用层服务、领域层服务和基础设施服务</li>
</ul>
<h3 id="领域事件-domain-event" tabindex="-1"><a class="header-anchor" href="#领域事件-domain-event"><span>领域事件(Domain Event)</span></a></h3>
<p>聚合对象接收命令(Command)请求和查询(Query)请求时，可能需要生成领域事件对象给领域对象。在CQRS模式的应用中，领域事件通常是由命令请求产生的。</p>
<h3 id="仓储-repository" tabindex="-1"><a class="header-anchor" href="#仓储-repository"><span>仓储(Repository)</span></a></h3>
<p>实体对象需要存储，可以存储在内存(In Memory)或者磁盘(Database)上，在需要实体对象时再从仓储中重构出实体对象。在实践中，数据库存储是仓储的一种实现方式。</p>
<h2 id="领域驱动模式" tabindex="-1"><a class="header-anchor" href="#领域驱动模式"><span>领域驱动模式</span></a></h2>
<ul>
<li>分层架构(Layers Architecture)</li>
<li>六边形理论(Hexagonal Architecture)</li>
<li>洋葱架构/简洁架构(Onion Architecture/The clean Architecture)</li>
<li>命令查询职责分离(Command-Query Responsibility Segregation)</li>
<li>事件溯源(Event Source)</li>
</ul>
<h3 id="分层架构-layers-architecture" tabindex="-1"><a class="header-anchor" href="#分层架构-layers-architecture"><span>分层架构(Layers Architecture)</span></a></h3>
<p><img src="/img/ddd-layer-architecture.png" alt="分层架构"></p>
<h3 id="六边形架构-端口适配器架构-hexagonal-architecture" tabindex="-1"><a class="header-anchor" href="#六边形架构-端口适配器架构-hexagonal-architecture"><span>六边形架构/端口适配器架构(Hexagonal Architecture)</span></a></h3>
<p><img src="/img/ddd-hexagonal-architecture.png" alt="六边形架构/端口适配器架构"></p>
<h3 id="洋葱架构-简洁架构-onion-architecture-the-clean-architecture" tabindex="-1"><a class="header-anchor" href="#洋葱架构-简洁架构-onion-architecture-the-clean-architecture"><span>洋葱架构/简洁架构(Onion Architecture/The clean Architecture)</span></a></h3>
<p><img src="/img/ddd-onion-architecture.png" alt="洋葱架构/简洁架构"></p>
<h3 id="命令查询职责分离-command-query-responsibility-segregation" tabindex="-1"><a class="header-anchor" href="#命令查询职责分离-command-query-responsibility-segregation"><span>命令查询职责分离(Command-Query Responsibility Segregation)</span></a></h3>
<p><img src="/img/ddd-cqrs-architecture.png" alt="命令查询职责分离"></p>
<h3 id="事件溯源-event-source" tabindex="-1"><a class="header-anchor" href="#事件溯源-event-source"><span>事件溯源(Event Source)</span></a></h3>
<p>事件溯源是一种数据存储的模式，区别于传统仓储存储实体对象的当前状态，事件溯源则存储了影响实体对象变化的所有事件，通过事件历史回溯实体的当前状态。</p>
<p><img src="/img/ddd-es-architecture.png" alt="事件溯源"></p>
<h2 id="flower-domain-driven-design" tabindex="-1"><a class="header-anchor" href="#flower-domain-driven-design"><span>Flower Domain Driven Design</span></a></h2>
<h3 id="flower-ddd的设计思路" tabindex="-1"><a class="header-anchor" href="#flower-ddd的设计思路"><span>Flower DDD的设计思路</span></a></h3>
<ul>
<li>Flower基于akka，是一个反应式微服务框架，原生支持消息驱动模式。</li>
<li>Actor模型是消息驱动、非阻塞的，优雅解决多线程难题，提高系统吞吐量</li>
<li>定义CommandHandler和EventHandler，处理Command和Query</li>
<li>编排CommandGateway流程和QueryGateway流程，代理Command和Query的操作入口</li>
<li>基于Flower异步特性，异步响应</li>
</ul>
<p>Flower CQRS架构图
<img src="/img/ddd-flower-cqrs-architecture.png" alt="命令查询职责分离"></p>
<h3 id="command" tabindex="-1"><a class="header-anchor" href="#command"><span>Command</span></a></h3>
<ul>
<li>CommandGateway</li>
<li>CommandHandler</li>
<li>EventHandler</li>
</ul>
<h4 id="commandgateway" tabindex="-1"><a class="header-anchor" href="#commandgateway"><span>CommandGateway</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">  <span class="token annotation punctuation">@Autowired</span></span>
<span class="line">  <span class="token class-name">CommandGateway</span> commandGateway<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/create"</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createFoodCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ui create food cart</span></span>
<span class="line">    <span class="token comment">// publish an commannd : CreateOrderCommand</span></span>
<span class="line">    commandGateway<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CreateOrderCommand</span><span class="token punctuation">(</span>index<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"foodcart"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="commandhandler" tabindex="-1"><a class="header-anchor" href="#commandhandler"><span>CommandHandler</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">  <span class="token annotation punctuation">@CommandHandler</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">command</span><span class="token punctuation">(</span><span class="token class-name">CreateOrderCommand</span> command<span class="token punctuation">,</span> <span class="token class-name">ServiceContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"创建订单命令：{}"</span><span class="token punctuation">,</span> command<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">AggregateLifecycle</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CreateOrderEvent</span><span class="token punctuation">(</span>command<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> command<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="eventhandler" tabindex="-1"><a class="header-anchor" href="#eventhandler"><span>EventHandler</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">  <span class="token annotation punctuation">@EventHandler</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token class-name">CreateOrderEvent</span> event<span class="token punctuation">,</span> <span class="token class-name">ServiceContext</span> context<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"处理订单事件：{}"</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    context<span class="token punctuation">.</span><span class="token function">getWeb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">printJSON</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// dao</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="query" tabindex="-1"><a class="header-anchor" href="#query"><span>Query</span></a></h3>
<h3 id="querygateway" tabindex="-1"><a class="header-anchor" href="#querygateway"><span>QueryGateway</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">  <span class="token annotation punctuation">@Autowired</span></span>
<span class="line">  <span class="token class-name">QueryGateway</span> queryGateway<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"{orderId}"</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryFoodcart</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Long</span> orderId<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    queryGateway<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SelectOrderCommand</span><span class="token punctuation">(</span>orderId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="queryhandler" tabindex="-1"><a class="header-anchor" href="#queryhandler"><span>QueryHandler</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">  <span class="token annotation punctuation">@CommandHandler</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">command</span><span class="token punctuation">(</span><span class="token class-name">SelectOrderCommand</span> command<span class="token punctuation">,</span> <span class="token class-name">ServiceContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"选择订单命令：{}"</span><span class="token punctuation">,</span> command<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">AggregateLifecycle</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SelectOrderEvent</span><span class="token punctuation">(</span>command<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="eventhandler-1" tabindex="-1"><a class="header-anchor" href="#eventhandler-1"><span>EventHandler</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">  <span class="token annotation punctuation">@EventHandler</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token class-name">SelectOrderEvent</span> event<span class="token punctuation">,</span> <span class="token class-name">ServiceContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"选择订单事件：{}"</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// do something</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flower请求响应" tabindex="-1"><a class="header-anchor" href="#flower请求响应"><span>Flower请求响应</span></a></h3>
<p>ServiceContext中持有请求上下文对象HttpServletRequest，通过ServiceContext可以对客户端响应数据。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">  <span class="token annotation punctuation">@EventHandler</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token class-name">CreateOrderEvent</span> event<span class="token punctuation">,</span> <span class="token class-name">ServiceContext</span> context<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"处理订单事件：{}"</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    context<span class="token punctuation">.</span><span class="token function">getWeb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">printJSON</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// dao</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集成spring-boot" tabindex="-1"><a class="header-anchor" href="#集成spring-boot"><span>集成spring-boot</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@SpringBootApplication</span></span>
<span class="line"><span class="token annotation punctuation">@FlowerComponentScan</span><span class="token punctuation">(</span><span class="token string">"com.ly.train.flower.ddd"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@EnableTransactionManagement</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DDDApplication</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">DDDApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


