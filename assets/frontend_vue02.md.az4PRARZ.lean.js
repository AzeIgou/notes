import{_ as a,c as i,a2 as n,o as e}from"./chunks/framework.DnxPABkT.js";const c=JSON.parse('{"title":"Vue 周边生态","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"frontend/vue02.md","filePath":"frontend/vue02.md"}'),t={name:"frontend/vue02.md"};function p(l,s,h,r,k,d){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="vue-周边生态" tabindex="-1">Vue 周边生态 <a class="header-anchor" href="#vue-周边生态" aria-label="Permalink to &quot;Vue 周边生态&quot;">​</a></h1><h2 id="pinia" tabindex="-1">Pinia <a class="header-anchor" href="#pinia" aria-label="Permalink to &quot;Pinia&quot;">​</a></h2><h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h3><p>Pinia 是 Vue 的专属<strong>状态管理库</strong>，它允许你<strong>跨组件</strong>或<strong>页面</strong>共享状态。如果你熟悉组合式 API 的话，你可能会认为可以通过一行简单的 <code>export const state = reactive({})</code> 来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   yarn add pinia</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   # 或者使用 npm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   npm install pinia</span></span></code></pre></div><p>创建一个 pinia 实例 (根 store) 并将其传递给应用：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createPinia } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;pinia&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> App </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./App.vue&#39;</span></span>
<span class="line"></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pinia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createPinia</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()  </span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App)  </span></span>
<span class="line"></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pinia)  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="store-是什么" tabindex="-1">Store 是什么？ <a class="header-anchor" href="#store-是什么" aria-label="Permalink to &quot;Store 是什么？&quot;">​</a></h3><p>Store (如 Pinia) 是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定。换句话说，它<strong>承载着全局状态</strong>。它有点像一个永远存在的组件，每个组件都可以读取和写入它。它有<strong>三个概念</strong>，state、getter 和 action，我们可以假设这些概念相当于组件中的<code> data</code>、 <code>computed</code> 和 <code>methods</code>.</p><h2 id="vuex" tabindex="-1">Vuex <a class="header-anchor" href="#vuex" aria-label="Permalink to &quot;Vuex&quot;">​</a></h2><h2 id="elment-plus" tabindex="-1">Elment Plus <a class="header-anchor" href="#elment-plus" aria-label="Permalink to &quot;Elment Plus&quot;">​</a></h2>`,12)]))}const E=a(t,[["render",p]]);export{c as __pageData,E as default};
