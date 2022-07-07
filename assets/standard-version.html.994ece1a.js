import{_ as n,o as e,c as s,a}from"./app.be83db55.js";const i={},l=a(`<h1 id="standard-version" tabindex="-1"><a class="header-anchor" href="#standard-version" aria-hidden="true">#</a> standard-version</h1><p><code>standard-version</code> \u662F\u4E00\u4E2A\u4F7F\u7528 <code>semver</code>\u89C4\u8303\u6839\u636E\u9879\u76EE\u63D0\u4EA4\u4FE1\u606F\u751F\u6210 <code>CHANGELOG</code> \uFF08\u66F4\u65B0\u65E5\u5FD7\uFF09\u6587\u4EF6\u7684\u5DE5\u5177\u3002</p><h2 id="\u53C2\u6570\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u9009\u9879" aria-hidden="true">#</a> \u53C2\u6570\u9009\u9879</h2><ol><li>\u65E0\u53C2\u60C5\u51B5\u4E0B\uFF0C\u9ED8\u8BA4\u66F4\u65B0\u4E2D\u95F4\u7248\u672C</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># v1.2.1 =&gt; 1.3.0</span>
$ <span class="token function">npm</span> run release 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>prerelease</code> \u9884\u53D1\u5E03\u7248\u672C</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u66F4\u65B0\u9884\u53D1\u5E03\u7248\u672C   1.2.1 =&gt; 1.2.1-0 </span>
$ <span class="token function">npm</span> run release -- --prerelease 

<span class="token comment"># prerelease \u540E\u9762\u6DFB\u52A0 alpha/\u5176\u4ED6  \u5B9A\u4E49\u9884\u53D1\u5E03\u7248\u672C\u4EE3\u53F7</span>
<span class="token comment"># 1.2.1 =&gt; 1.2.1-alpha.0</span>
$ <span class="token function">npm</span> run -- --prerelease alpha 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>release-as</code> \u6307\u5B9A\u66F4\u65B0\u7248\u672C</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u66F4\u65B0\u5927\u7248\u672C</span>
<span class="token comment"># 1.2.1 =&gt; 2.0.0</span>
$ <span class="token function">npm</span> run -- --release-as major

<span class="token comment"># 2. \u66F4\u65B0\u4E2D\u95F4\u7248\u672C</span>
<span class="token comment"># 1.2.1 =&gt; 1.3.0</span>
<span class="token function">npm</span> run -- --release-as minor

<span class="token comment"># 3. \u66F4\u65B0\u5C0F\u7248\u672C</span>
<span class="token comment"># 1.2.1 =&gt; 1.2.2</span>
<span class="token function">npm</span> run -- --release-as patch

<span class="token comment"># \u66F4\u65B0\u6307\u5B9A\u7248\u672C</span>
<span class="token comment"># 1.2.1 =&gt; 2.3.4</span>
<span class="token function">npm</span> run -- --release-as <span class="token number">2.3</span>.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[l];function c(r,o){return e(),s("div",null,d)}var m=n(i,[["render",c],["__file","standard-version.html.vue"]]);export{m as default};
