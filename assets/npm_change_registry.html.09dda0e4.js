import{_ as n,o as s,c as e,a}from"./app.be83db55.js";const i={},l=a(`<h1 id="npm-\u5207\u6362\u6E90" tabindex="-1"><a class="header-anchor" href="#npm-\u5207\u6362\u6E90" aria-hidden="true">#</a> npm \u5207\u6362\u6E90</h1><p>\u67E5\u770B\u6E90\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config list   <span class="token comment"># \u67E5\u770B\u5F53\u524D\u914D\u7F6E \u5305\u542B\u5F53\u524D\u6E90\u5B57\u6BB5\uFF1A metrics-registry </span>

<span class="token function">npm</span> get registry  <span class="token comment"># \u76F4\u63A5\u83B7\u53D6\u5F53\u524D\u6E90</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528-config-\u547D\u4EE4\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-config-\u547D\u4EE4\u5207\u6362" aria-hidden="true">#</a> \u4F7F\u7528 config \u547D\u4EE4\u5207\u6362</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5207\u6362\u4E3A \u6DD8\u5B9D\u6E90 </span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F16\u8F91-npmrc" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91-npmrc" aria-hidden="true">#</a> \u7F16\u8F91 ~/.npmrc</h2><p>\u4FEE\u6539\u8BE5\u6587\u4EF6\u4E2D registry \u7684\u503C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>registry <span class="token operator">=</span> https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528-nrm-\u8FDB\u884C\u6E90\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-nrm-\u8FDB\u884C\u6E90\u7BA1\u7406" aria-hidden="true">#</a> \u4F7F\u7528 nrm \u8FDB\u884C\u6E90\u7BA1\u7406</h2><ol><li>\u5B89\u88C5 nrm</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> global nrm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u5E38\u7528\u7684 nrm \u547D\u4EE4</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6E90</span>
nrm current

<span class="token comment"># \u5207\u6362\u6E90</span>
nrm use cnpm  <span class="token comment"># \u6E90\u540D\u79F0</span>


<span class="token comment"># \u67E5\u770B\u6240\u6709\u6E90</span>
nrm <span class="token function">ls</span>

<span class="token comment"># \u6DFB\u52A0\u6E90</span>
nrm <span class="token function">add</span> \u6E90\u540D\u79F0 \u6E90\u5730\u5740

<span class="token comment"># \u5220\u9664\u6E90</span>
nrm del \u6E90\u540D\u79F0

<span class="token comment"># \u6D4B\u8BD5\u6E90\u7684\u901F\u5EA6</span>
nrm <span class="token builtin class-name">test</span>   <span class="token comment"># \u67E5\u770B\u5168\u90E8\u7684\u6E90\u7684\u901F\u5EA6</span>
nrm <span class="token builtin class-name">test</span> \u6E90\u540D\u79F0  <span class="token comment"># \u67E5\u770B\u5355\u4E2A\u6E90\u7684\u7F51\u901F</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[l];function r(d,t){return s(),e("div",null,c)}var o=n(i,[["render",r],["__file","npm_change_registry.html.vue"]]);export{o as default};
