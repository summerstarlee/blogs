import{_ as n,o as s,c as e,a}from"./app.be83db55.js";const t={},i=a(`<h1 id="eslint-\u914D\u5408-prettier-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#eslint-\u914D\u5408-prettier-\u4F7F\u7528" aria-hidden="true">#</a> Eslint \u914D\u5408 prettier \u4F7F\u7528</h1><ul><li>prettier \u662F\u4E00\u4E2A\u5BF9\u4EE3\u7801\u98CE\u683C\u8FDB\u884C\u683C\u5F0F\u5316\u7684\u5DE5\u5177\u3002</li><li>prettier \u548C eslint \u5E76\u6CA1\u6709\u76F4\u63A5\u5173\u8054, \u5982\u679C\u8981\u5728 eslint \u4E2D\u4F7F\u7528 prettier \u7684\u98CE\u683C\u89C4\u8303\uFF0C \u5C31\u9700\u4F7F\u7528 eslint \u7684\u63D2\u4EF6 <code>eslint-plugin-prettier</code>, \u8FD9\u4E2A\u63D2\u4EF6\u4F5C\u7528\u662F\u6DFB\u52A0 prettier \u4F5C\u4E3A eslint \u7684\u89C4\u5219\u914D\u7F6E, \u628A\u4E0D\u7B26\u5408 prettier \u89C4\u8303\u7684\u4EE3\u7801\u8FDB\u884C\u63D0\u793A\u3002</li><li>eslint \u9ED8\u8BA4\u53EF\u80FD\u4F1A\u548C prettier \u89C4\u8303\u6709\u51B2\u7A81, \u6240\u4EE5\u9700\u8981\u4F7F\u7528 eslint-config-prettier \u63D2\u4EF6\u5173\u95ED eslint \u4E2D\u53EF\u80FD\u548C prettier \u6709\u51B2\u7A81\u7684\u89C4\u5219\u3002</li></ul><ol><li>\u5B89\u88C5\u4F9D\u8D56</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> eslint prettier eslint-plugin-prettier eslint-config-prettier -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u6DFB\u52A0 eslint \u914D\u7F6E</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ol><li>eslint \u652F\u6301\u63D2\u4EF6\u540D(plugins)\u548C extents \u540D\u5B57\u7701\u7565\u524D\u9762\u7684 &#39;eslint-plugin-&#39; \u548C &#39;eslint-config-&#39;</li><li>\u9700\u8981\u5728 rules \u4E2D\u663E\u793A\u6DFB\u52A0 <code>&quot;prettier/prettier&quot;: &quot;error&quot;</code>, \u8868\u793A\u88AB prettier \u6807\u8BB0\u7684\u5730\u65B9\u629B\u51FA\u9519\u8BEF\u4FE1\u606F\u3002</li></ol></blockquote><ol start="3"><li>\u66F4\u6539 prettier \u9ED8\u8BA4\u98CE\u683C\u89C4\u8303</li></ol><p>\u6DFB\u52A0 .prettierrc \u6587\u4EF6\u53EF\u4EE5\u8986\u76D6\u6389 prettier \u9ED8\u8BA4\u7684\u89C4\u8303\u3002</p><p>\u5E38\u89C1\u7684\u9ED8\u8BA4\u89C4\u5219\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>printWidth: 80              // \u4E00\u884C\u6700\u591A\u5B57\u7B26\u6570
tabWidth: 2                 // \u4F7F\u75282\u4E2A\u7A7A\u683C\u7F29\u8FDB
useTabs: false              // \u662F\u5426\u4F7F\u7528tab \u4F5C\u4E3A\u7F29\u8FDB\uFF0C\u9ED8\u8BA4\u4F7F\u7528 \u7A7A\u683C\u4F5C\u4E3A\u7F29\u8FDB         
semi: true                  // \u884C\u5C3E\u8981\u6709\u5206\u53F7
singleQuote: false          // \u4F7F\u7528\u5355\u5F15\u53F7
trailingComma: es5          // \u884C\u5C3E\u4E0D\u9700\u8981\u52A0\u9017\u53F7
noBracketSpacing: true      // \u5927\u62EC\u53F7\u7684\u9996\u4F4D\u9700\u8981\u52A0\u7A7A\u683C
arrowParens: always         // \u7BAD\u5934\u51FD\u6570\uFF0C\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u4E5F\u9700\u8981\u62EC\u53F7 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-react-app-\u6DFB\u52A0-prettier-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#create-react-app-\u6DFB\u52A0-prettier-\u914D\u7F6E" aria-hidden="true">#</a> create-react-app \u6DFB\u52A0 prettier \u914D\u7F6E</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C <code>react-react-app</code> \u4E2D\u53EA\u6DFB\u52A0\u4E86 <code>eslint</code> \u7684\u914D\u7F6E\u3002 <code>cra</code> \u9879\u76EE\u4E2D\u6DFB\u52A0 <code>prettier</code> \u7684\u6B65\u9AA4\u5982\u4E0B:</p><ol><li>\u5B89\u88C5\u4F9D\u8D56</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> prettier eslint-plugin-prettier eslint-config-prettier -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u4FEE\u6539 <code>.eslintrc</code> \u6587\u4EF6</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;react-app&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;prettier&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;prettier&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u6DFB\u52A0 <code>.prettierrc</code> \u6587\u4EF6</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),l=[i];function r(o,p){return s(),e("div",null,l)}var u=n(t,[["render",r],["__file","eslint-prettier.html.vue"]]);export{u as default};
