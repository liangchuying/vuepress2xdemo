import{_ as n,o as s,c as a,b as t}from"./app-xyvm7-4C.js";const e={},p=t(`<h1 id="dom元素操作" tabindex="-1"><a class="header-anchor" href="#dom元素操作" aria-hidden="true">#</a> Dom元素操作</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 操作节点 增删 改 查</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> nodeOps <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建元素 createElement 注意: vue  =&gt; 平台.....</span>

    <span class="token function-variable function">insert</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">child<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        parent<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> anchor <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">remove</span><span class="token operator">:</span> <span class="token parameter">child</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// 删除元素</span>
        <span class="token keyword">const</span> parent <span class="token operator">=</span> child<span class="token punctuation">.</span>parentNode
        <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">createElement</span><span class="token operator">:</span> <span class="token punctuation">(</span>tag<span class="token punctuation">,</span> isSVG<span class="token punctuation">,</span> is<span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">Element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> is <span class="token operator">?</span> <span class="token punctuation">{</span> is <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> el
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">createText</span><span class="token operator">:</span> <span class="token parameter">text</span> <span class="token operator">=&gt;</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function-variable function">createComment</span><span class="token operator">:</span> <span class="token parameter">text</span> <span class="token operator">=&gt;</span> document<span class="token punctuation">.</span><span class="token function">createComment</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function-variable function">setText</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> text</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>nodeValue <span class="token operator">=</span> text
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">setElementText</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> text</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">querySelector</span><span class="token operator">:</span> <span class="token parameter">selector</span> <span class="token operator">=&gt;</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","nodeOps.html.vue"]]);export{r as default};
