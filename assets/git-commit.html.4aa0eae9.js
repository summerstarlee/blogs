import{_ as a,r as t,o as d,c,b as n,d as i,a as o,e}from"./app.be83db55.js";const l={},r=o(`<h1 id="\u9879\u76EE\u4E2D\u7684-git-message-\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4E2D\u7684-git-message-\u89C4\u8303" aria-hidden="true">#</a> \u9879\u76EE\u4E2D\u7684 git message \u89C4\u8303</h1><p>Git \u6BCF\u6B21\u63D0\u4EA4\u4EE3\u7801\uFF0C\u90FD\u8981\u5199 Commit message \u6765\u8BF4\u660E\u672C\u6B21\u7684\u63D0\u4EA4\u5185\u5BB9\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit -m <span class="token string">&quot;hello word&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u63D0\u4EA4\u7684\u5185\u5BB9\u6BD4\u8F83\u591A\u7684\u65F6\u5019\uFF0C \u53EF\u4EE5\u6267\u884C <code>git commit</code>, \u4F7F\u7528\u8DF3\u51FA\u6765\u7684\u6587\u672C\u6765\u7F16\u8F91\u63D0\u4EA4\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u9879\u76EE\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C \u4F7F\u7528 git commit \u63D0\u4EA4\u7684\u4FE1\u606F\u53EF\u4EE5\u5F88\u597D\u7684\u53CD\u5E94\u9879\u76EE\u7684\u5F00\u53D1\u8FDB\u5C55\u60C5\u51B5\u3002 \u6240\u4EE5\u5E94\u5F53\u89C4\u8303 git message \u7684\u683C\u5F0F\uFF0C \u6765\u66F4\u52A0\u6E05\u6670\u660E\u4E86\u7684\u8BF4\u660E\u6BCF\u6B21\u7684\u63D0\u4EA4\u76EE\u7684\u3002</p><p><img src="http://ww2.sinaimg.cn/large/006tNc79gy1g5wzm53crej31900egjt5.jpg" alt=""></p><h2 id="angular-commit-message" tabindex="-1"><a class="header-anchor" href="#angular-commit-message" aria-hidden="true">#</a> Angular Commit message</h2>`,8),u=e("\u5173\u4E8E Git message \u7684\u5199\u6CD5\u89C4\u8303\u793E\u533A\u4E2D\u6709\u5F88\u591A\u79CD\uFF0C \u76EE\u524D\u4F7F\u7528\u8F83\u4E3A\u5E7F\u6CDB\u7684\u662F "),m={href:"https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0",target:"_blank",rel:"noopener noreferrer"},p=e("Angular \u89C4\u8303"),v=o(`<p>\u5728 <code>Angular</code> \u89C4\u8303\u4E2D\uFF0C \u6BCF\u6B21\u63D0\u4EA4\uFF0C Commit message \u90FD\u5305\u62EC\u4E09\u4E2A\u90E8\u5206\uFF1A Header\u3001Body \u548C Footer;</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token punctuation">)</span>:<span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span>  <span class="token comment">## header \u90E8\u5206</span>
// \u7A7A\u4E00\u884C
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>   <span class="token comment">## body  \u90E8\u5206</span>
// \u7A7A\u4E00\u884C
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>  <span class="token comment">## footer \u90E8\u5206</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>\u8FD9\u4E09\u4E2A\u90E8\u5206\u79CD\uFF0C Header \u662F\u5FC5\u987B\u7684\uFF0C Body \u548C Footer \u53EF\u4EE5\u7701\u7565\u3002</li><li>\u4E0D\u7BA1\u54EA\u4E2A\u90E8\u5206\uFF0C\u4E3A\u4E86\u5728\u8F93\u51FA log \u65F6\u7684\u7F8E\u89C2\uFF0C\u4EFB\u4F55\u4E00\u884C\u7684\u90FD\u4E0D\u5F97\u8D85\u8FC7 72 \u4E2A\u5B57\u7B26\u3002</li></ol></div><h3 id="header-\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#header-\u90E8\u5206" aria-hidden="true">#</a> Header \u90E8\u5206</h3><p>Header \u90E8\u5206\u53EA\u6709\u4E00\u884C\uFF0C \u5305\u62EC\u4E09\u4E2A\u5B57\u6BB5\uFF1A <code>type</code>(\u5FC5\u987B)\u3001<code>scope</code>(\u53EF\u9009)\u3001<code>subject</code>(\u5FC5\u987B);</p><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h4><p><code>type</code> \u7528\u4E8E\u8BF4\u660E commit \u7684\u7C7B\u578B\uFF0C \u5728 <code>Angular \u89C4\u8303</code> \u79CD\uFF0C \u53EA\u5141\u8BB8 7 \u79CD\u5E38\u7528\u7C7B\u578B\u548C\u4E00\u79CD\u7279\u6B8A\u7C7B\u578B(revert):</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>feat: \u65B0\u529F\u80FD (feature)
fix: \u4FEE\u8865 bug
docs: \u6587\u6863 (ocumentation)
style: \u683C\u5F0F (\u4E0D\u5F71\u54CD\u4EE3\u7801\u8FD0\u884C)
refactory: \u91CD\u6784 (\u65E2\u4E0D\u662F\u65B0\u589E\u529F\u80FD\uFF0C \u4E5F\u4E0D\u662F\u4FEE\u6539 bug \u7684\u4EE3\u7801\u6539\u52A8)
test: \u589E\u52A0\u6D4B\u8BD5
chore: \u6784\u5EFA\u8FC7\u7A0B\u6216\u8F85\u52A9\u5DE5\u5177\u7684\u53D8\u52A8
revert: \u64A4\u9500\u4EE5\u524D\u7684 commit\uFF1B header \u90E8\u5206\u9700\u8981\u8DDF\u88AB\u64A4\u9500 Commit \u7684 Header 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> scope</h4><p><code>scope</code> \u7528\u4E8E\u8BF4\u660E <code>commit</code> \u5F71\u54CD\u7684\u8303\u56F4\uFF0C \u6BD4\u5982\u8BF4\u6570\u636E\u5C42\u3001\u63A7\u5236\u5C42\u3001\u89C6\u56FE\u5C42\u7B49\u7B49</p><h4 id="subject" tabindex="-1"><a class="header-anchor" href="#subject" aria-hidden="true">#</a> subject</h4><p><code>subject</code> \u662F <code>commit</code> \u7684\u7B80\u77ED\u63CF\u8FF0\uFF0C \u4E0D\u8D85\u8FC7 50 \u4E2A\u5B57\u7B26\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4EE5\u52A8\u8BCD\u5F00\u5934\uFF0C \u4F7F\u7528\u7B2C\u4E00\u4EBA\u79F0\u73B0\u5728\u65F6\uFF0C \u6BD4\u5982 <code>change</code> \u800C\u4E0D\u662F <code>changed</code> \u6216\u8005 <code>changes</code> \u7B2C\u4E00\u4E2A\u5B57\u6BCD\u5C0F\u5199 \u7ED3\u5C3E\u4E0D\u52A0\u53E5\u53F7</p></div><h4 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> body</h4><p><code>body</code> \u90E8\u5206\u662F\u5BF9\u672C\u6B21 <code>commit</code> \u7684\u8BE6\u7EC6\u63CF\u8FF0\uFF0C \u53EF\u4EE5\u5206\u4E3A\u591A\u884C\u3002</p><h4 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h4><p>\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0C \u662F\u4E0D\u4F7F\u7528\u8FD9\u90E8\u5206\u7684\u5185\u5BB9\u7684\uFF0C \u4F46\u662F\u5728\u4E0B\u9762\u4E24\u79CD\u60C5\u51B5\u4E0B\uFF0C\u56DE\u4F7F\u7528\u5230 <code>footer</code></p><ol><li>\u4E0D\u517C\u5BB9\u53D8\u52A8\u8BF4\u660E \u5982\u679C\u5F53\u524D\u4EE3\u7801\u4E0E\u4E0A\u4E00\u4E2A\u7248\u672C\u4E0D\u517C\u5BB9\uFF0C \u5219 <code>footer</code> \u90E8\u5206\u9700\u8981\u4F7F\u7528 <code>BREAKING CHANGE</code> \u5F00\u5934\uFF0C \u540E\u9762\u662F\u5BF9\u53D8\u52A8\u7684\u63CF\u8FF0\u4EE5\u53CA\u53D8\u52A8\u7406\u7531\u548C\u53D8\u52A8\u65B9\u6CD5.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: &#39;attribute&#39;,
    }

    After:

    scope: {
      myAttr: &#39;@&#39;,
    }

    The removed \`inject\` wasn&#39;t generaly useful for directives so there should be no code using it.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5173\u95ED Issue \u5982\u679C\u5F53\u524D commit \u662F\u9488\u5BF9 \u67D0\u4E2A\u6216\u8005\u67D0\u51E0\u4E2A <code>issue</code>, \u90A3\u4E2A\u53EF\u4EE5\u5728 footer \u90E8\u5206\u5173\u95ED <code>issue</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Closes #123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5173\u95ED\u591A\u4E2A issue</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Closes #123, #234, #345
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="commitizen" tabindex="-1"><a class="header-anchor" href="#commitizen" aria-hidden="true">#</a> Commitizen</h2>`,24),g=e("\u5728\u9879\u76EE\u7684\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u7F16\u7A0B\u4EBA\u5458\u9075\u5B88 "),h=n("code",null,"Angular \u89C4\u8303",-1),b=e(" \u9700\u8981\u7F16\u5199\u66F4\u591A\u7684 git message \u4FE1\u606F, \u4F7F\u7528 "),_={href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"},k=e("Commitizen"),x=e(" \u6765\u8FDB\u884C\u4EA4\u4E92\u5F0F\u7684 message \u8F93\u5165\u3002"),f=o(`<ul><li>\u5B89\u88C5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g commitizen
<span class="token comment"># or yarn</span>
<span class="token function">yarn</span> global <span class="token function">add</span> commitizen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u5728\u9879\u76EE\u76EE\u5F55\u91CC\uFF0C\u8FD0\u884C\u4E0B\u9762\u7684\u547D\u4EE4\uFF0C\u4F7F\u5176\u652F\u6301 Angular \u7684 Commit message \u683C\u5F0F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>commitizen init cz-conventional-changelog --save --save-exact
<span class="token comment"># or yarn </span>
commitizen init cz-conventional-changelog --yarn --dev --exact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u9700\u8981 <code>git commit</code> \u7684\u65F6\u5019\u4F7F\u7528 <code>git cz</code> \u6765\u751F\u6210\u7B26\u5408\u89C4\u8303\u7684 git message. <img src="http://ww1.sinaimg.cn/large/006tNc79gy1g5wzn2zg44j30tx08b74z.jpg" alt=""></p><h2 id="commitlint-\u6821\u9A8C-message" tabindex="-1"><a class="header-anchor" href="#commitlint-\u6821\u9A8C-message" aria-hidden="true">#</a> commitlint \u6821\u9A8C message</h2>`,6),q=n("code",null,"git cz",-1),y=e(" \u547D\u4EE4\u4E3A git message \u63D0\u4F9B\u4E86\u4E00\u4E2A\u89C4\u8303\u7684 message \u6A21\u677F\uFF0C \u8FD9\u65F6\u4F7F\u7528 "),j=n("code",null,"git commit -m",-1),A=e(" \u6216\u8005 \u4F7F\u7528 "),z=n("code",null,"git cz",-1),w=e(" \u4F9D\u65E7\u4E0D\u80FD\u4E25\u683C\u9650\u5236 git message \u5185\u5BB9\uFF0C \u4E3A\u4E86\u4E25\u683C\u89C4\u8303\u9700\u8981\u4F7F\u7528 "),C={href:"https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional",target:"_blank",rel:"noopener noreferrer"},G=e("commitlint"),I=e(" \u6765\u62D2\u7EDD\u4E0D\u89C4\u8303\u7684 git message \u5185\u5BB9\u3002"),N=o(`<ul><li>\u5B89\u88C5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @commitlint/config-conventional @commitlint/cli
<span class="token comment"># or yarn </span>
<span class="token function">yarn</span> <span class="token function">add</span> -D @commitlint/config-conventional @commitlint/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6 (\u4E3A\u4E86\u4F7F commitlint \u751F\u6548)</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;module.exports = {extends: [&#39;@commitlint/config-conventional&#39;]};&quot;</span> <span class="token operator">&gt;</span> commitlint.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6216\u8005\u5728 <code>package.json</code> \u6587\u4EF6\u4E2D\u6DFB\u52A0</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;commitlint&quot;: {
    extnds: [
        &quot;@commitlint/config-conventional&quot;
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89E6\u53D1-commitlint" tabindex="-1"><a class="header-anchor" href="#\u89E6\u53D1-commitlint" aria-hidden="true">#</a> \u89E6\u53D1 commitlint</h2><p>\u914D\u7F6E\u597D <code>commitlint</code>, \u8FD8\u9700\u8981\u8BBE\u7F6E \u89E6\u53D1 <code>commitlint</code> \u7684\u65F6\u673A\u3002</p><p><code>Git</code> \u4E2D\u81EA\u5E26\u4E0D\u540C\u7684 <code>hook</code>\uFF0C \u5F53\u67D0\u4E9B\u4E8B\u4EF6\u53D1\u751F\u7684\u65F6\u5019\uFF0C\u4F1A\u89E6\u53D1\u76F8\u5BF9\u5E94\u7684 <code>hook</code>, \u8FD9\u4E9B <code>hook</code> \u811A\u672C\u5B58\u653E\u5728\u9879\u76EE\u6839\u76EE\u5F55\u7684 <code>.git/hooks</code> \u76EE\u5F55\u4E0B\u3002</p>`,9),H=n("code",null,"commit-msg",-1),E=e(" \u662F\u5176\u4E2D\u4E00\u4E2A "),T=n("code",null,"hook",-1),P=e(", \u5728 "),B=n("code",null,"git commit",-1),D=e(" \u63D0\u4EA4\u7684\u65F6\u5019\u89E6\u53D1\u3002 \u53EF\u4EE5\u4F7F\u7528 "),R={href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"},L=e("husky"),S=e(" \u6216\u8005 "),O={href:"https://www.npmjs.com/package/yorkie",target:"_blank",rel:"noopener noreferrer"},V=e("yorkie"),M=e(" \u6765\u81EA\u5B9A\u4E49 "),$=n("code",null,"commit-msg",-1),F=e(" \u89E6\u53D1\u65F6\u5019\u7684\u4E8B\u4EF6\u3002"),K=o(`<h3 id="\u9009\u62E9\u4E00-husky" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u4E00-husky" aria-hidden="true">#</a> \u9009\u62E9\u4E00: husky</h3><ul><li><p>\u5B89\u88C5 <code>npm install husky -D</code></p></li><li><p>\u5728 <code>package.json</code> \u4E2D\u6DFB\u52A0\u4EE3\u7801</p></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ghooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;commit-msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commitlint -e $GIT_PARAMS&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9009\u62E9\u4E8C-yorkie" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u4E8C-yorkie" aria-hidden="true">#</a> \u9009\u62E9\u4E8C: yorkie</h3><ul><li><p>\u5B89\u88C5 yorkie <code>npm install yorkie -D</code></p></li><li><p>\u5728 <code>package.json</code> \u4E2D\u6DFB\u52A0\u4EE3\u7801</p></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>  <span class="token property">&quot;gitHooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commit-msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commitlint -e $GIT_PARAMS&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5728 <code>git commit-msg</code> \u8FD9\u4E2A\u94A9\u5B50\u4E2D\u4F1A\u89E6\u53D1 <code>commitlint</code> \u7684\u64CD\u4F5C\u3002</p></blockquote><h2 id="\u914D\u5408-lint-staged-\u8FDB\u884C\u4EE3\u7801\u68C0\u9A8C\u548C\u4FEE\u590D" tabindex="-1"><a class="header-anchor" href="#\u914D\u5408-lint-staged-\u8FDB\u884C\u4EE3\u7801\u68C0\u9A8C\u548C\u4FEE\u590D" aria-hidden="true">#</a> \u914D\u5408 lint-staged \u8FDB\u884C\u4EE3\u7801\u68C0\u9A8C\u548C\u4FEE\u590D</h2>`,8),U=e("\u5728\u5B8C\u6210\u4E86 "),J=n("code",null,"git message",-1),Q=e(" \u7684\u6821\u9A8C\u4E4B\u540E\uFF0C \u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528 "),W={href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"},Y=e("lint-staged"),X=e(" \u548C "),Z=n("code",null,"git hooks",-1),ee=e(" \u6765\u8FDB\u884C\u4EE3\u7801\u63D0\u4EA4\u524D\u7684\u8BED\u6CD5\u3001\u98CE\u683C\u7684\u9A8C\u8BC1\u548C\u4FEE\u590D\u3002"),ne=o(`<ol><li><p>\u5B89\u88C5 <code>npm install -D lint-staged</code></p></li><li><p>\u5728\u8DDF\u76EE\u5F55\u4E0B\u521B\u5EFA <code>.lintstagedrc</code>, \u5E76\u5199\u5165</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;*.{js,vue}&quot;: [&quot;eslint --fix&quot;, &quot;git add&quot;]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6216\u8005\u5728 <code>package.json</code> \u4E2D\u5199\u5165</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;lint-staged&quot;: {
    &quot;*.{js,vue}&quot;: [&quot;eslint --fix&quot;, &quot;git add&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u5728 <code>husky</code> \u6216\u8005 <code>yorkie</code> \u914D\u7F6E\u4E2D\u6DFB\u52A0\u89E6\u53D1\u65F6\u673A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// husky \u914D\u7F6E\u65B9\u5F0F
&quot;husky&quot;: {
  &quot;hooks&quot;: {
    &quot;pre-commit&quot;: &quot;lint-staged&quot;,
    &quot;commit-msg&quot;: &quot;commitlint -e $GIT_PARAMS&quot;
  }
}

// yorkie \u914D\u7F6E\u65B9\u5F0F
 &quot;gitHooks&quot;: {
    &quot;pre-commit&quot;: &quot;lint-staged&quot;,
    &quot;commit-msg&quot;: &quot;commitlint -e $GIT_PARAMS&quot;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5728\u6BCF\u6B21\u63D0\u4EA4\u4E4B\u524D\u90FD\u4F1A\u89E6\u53D1 <code>pre-commit</code> \u8FD9\u4E2A <code>hook</code>, \u4ECE\u800C\u89E6\u53D1 <code>.lintstagedrc</code> \u6216\u8005 <code>package.json</code> \u4E2D\u7684 <code>lint-staged</code> \u91CC\u9762\u7684\u914D\u7F6E\u3002 \u5728\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u914D\u7F6E\u4E86\u5BF9\u6240\u6709 <code>.js</code> \u6216\u8005 <code>.vue</code> \u7ED3\u5C3E\u7684\u6587\u4EF6\u8FDB\u884C <code>eslint</code> \u7684\u4FEE\u590D\uFF0C \u5E76\u4E14\u5F53\u4FEE\u590D\u4E4B\u540E\u518D\u6B21\u6267\u884C <code>git add</code> \u5C06\u4FEE\u6539\u540E\u7684\u6587\u4EF6\u518D\u6B21\u653E\u5230\u6682\u5B58\u533A\u3002 \u8FD9\u6837\u5C31\u53EF\u4EE5\u4FDD\u8BC1\u6BCF\u6B21\u63D0\u4EA4\u7684\u4EE3\u7801\u90FD\u662F\u7EDF\u4E00\u98CE\u683C\u7684\u4EE3\u7801\u4E86\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>lint-staged</code> \u53EA\u5BF9\u6B64\u6B21\u63D0\u4EA4\u6240\u5728\u6682\u5B58\u533A\u7684\u6587\u4EF6\uFF08git add\u540E\u7684\u6587\u4EF6\uFF09\u8FDB\u884C\u4E00\u7CFB\u5217\u7684\u68C0\u67E5\u3001\u4FEE\u590D\u3001\u683C\u5F0F\u5316\u64CD\u7B49\u4F5C\u3002</p></div><h2 id="\u81EA\u52A8\u751F\u6210-change-log-\u5E76\u66F4\u65B0-version" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u751F\u6210-change-log-\u5E76\u66F4\u65B0-version" aria-hidden="true">#</a> \u81EA\u52A8\u751F\u6210 Change log \u5E76\u66F4\u65B0 Version</h2>`,9),se=e("\u5F53\u4F7F\u7528 "),ie=n("code",null,"Angular \u89C4\u8303",-1),oe=e(" \u63D0\u4EA4 "),ae=n("code",null,"git message",-1),te=e(", \u8FD8\u53EF\u4EE5\u4F7F\u7528 "),de={href:"https://github.com/conventional-changelog/standard-version",target:"_blank",rel:"noopener noreferrer"},ce=e("standard-version"),le=e("\u751F\u6210 "),re=n("code",null,"Change log",-1),ue=e(" \u6587\u6863\u3002 \u751F\u6210\u7684\u6587\u6863\u5C06\u4F1A\u5305\u62EC\u4E0B\u9762\u4E09\u4E2A\u90E8\u5206\u3002"),me=o(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new features   // \u65B0\u589E\u529F\u80FD\u8BB0\u5F55
bug fixes   // \u89E3\u51B3 bug \u8BB0\u5F55 
breaking changes   // \u4E0D\u517C\u5BB9\u53D8\u52A8\u8BB0\u5F55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BCF\u4E00\u90E8\u5206\u90FD\u4F1A\u5217\u51FA\u76F8\u5173\u7684 <code>commit</code>, \u5E76\u4E14\u6307\u5411\u8FD9\u4E9B <code>commit</code> \u7684\u8FDE\u63A5\u3002 <code>conventional-changelog</code> \u4F7F\u7528\u5982\u4E0B\uFF1A</p><ol><li>\u5B89\u88C5</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install -g standard-version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u5728 <code>package.json</code> \u4E2D\u6DFB\u52A0 <code>script</code> \u5B57\u6BB5</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;script&quot;: {
  &quot;release&quot;: &quot;standard-version&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C <code>npm run release</code> \u5C06\u4F1A\u6267\u884C\u4E0B\u9762\u7684\u6B65\u9AA4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u4FEE\u6539 package.json package-lock.json \u4E2D\u7684\u7248\u672C\u53F7
2. \u751F\u6210 CHANGELOG.md \u6587\u4EF6\u3002 
3. \u63D0\u4EA4  package.json package-lock.json CHANGELOG.md \u6587\u4EF6
4. \u7ED9\u672C\u6B21\u63D0\u4EA4\u6253\u4E0A tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://ww3.sinaimg.cn/large/006tNc79gy1g5wzem0mk4j30w00gy778.jpg" alt=""></p>`,9),pe=e("\u66F4\u591A "),ve=n("code",null,"stardard-version",-1),ge=e(" \u8BF7\u53C2\u8003 "),he={href:"/npm/standard-version",target:"_blank",rel:"noopener noreferrer"},be=e("stardard-version");function _e(ke,xe){const s=t("ExternalLinkIcon");return d(),c("div",null,[r,n("p",null,[u,n("a",m,[p,i(s)])]),v,n("p",null,[g,h,b,n("a",_,[k,i(s)]),x]),f,n("p",null,[q,y,j,A,z,w,n("a",C,[G,i(s)]),I]),N,n("p",null,[H,E,T,P,B,D,n("a",R,[L,i(s)]),S,n("a",O,[V,i(s)]),M,$,F]),K,n("p",null,[U,J,Q,n("a",W,[Y,i(s)]),X,Z,ee]),ne,n("p",null,[se,ie,oe,ae,te,n("a",de,[ce,i(s)]),le,re,ue]),me,n("p",null,[pe,ve,ge,n("a",he,[be,i(s)])])])}var qe=a(l,[["render",_e],["__file","git-commit.html.vue"]]);export{qe as default};
