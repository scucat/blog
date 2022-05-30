import{_ as s,d as n}from"./app.910433da.js";const a={},l=n(`<blockquote><p>\u672C\u7AD9\u57FA\u4E8Evuepress2\u642D\u5EFA\uFF0C\u5BF9theme-default\u6837\u5F0F\u8FDB\u884C\u4E86\u81EA\u5B9A\u4E49\u5F00\u53D1</p></blockquote><h2 id="\u4FEE\u6539\u9ED8\u8BA4\u4E3B\u9898\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u9ED8\u8BA4\u4E3B\u9898\u6837\u5F0F" aria-hidden="true">#</a> \u4FEE\u6539\u9ED8\u8BA4\u4E3B\u9898\u6837\u5F0F</h2><p><img src="https://raw.githubusercontent.com/scucat/images/master/20220523103414.png" alt="666"></p><h2 id="\u5B9E\u73B0\u4E00\u952E\u590D\u5236\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u952E\u590D\u5236\u4EE3\u7801" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u952E\u590D\u5236\u4EE3\u7801</h2><p>\u4FEE\u6539 <code>theme-default/lib/client/components/Page.vue</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">setup</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">lang</span><span style="color:#F92672;">=</span><span style="color:#E6DB74;">&quot;ts&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">import PageMeta from &#39;@theme/PageMeta.vue&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">import PageNav from &#39;@theme/PageNav.vue&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">import </span><span style="color:#F92672;">{</span><span style="color:#F8F8F2;"> usePageData, usePageFrontmatter </span><span style="color:#F92672;">}</span><span style="color:#F8F8F2;"> from &#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">import </span><span style="color:#F92672;">{</span><span style="color:#F8F8F2;"> computed, ComputedRef, onMounted </span><span style="color:#F92672;">}</span><span style="color:#F8F8F2;"> from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">import type </span><span style="color:#F92672;">{</span><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F8F8F2;">  DefaultThemeNormalPageFrontmatter,</span></span>
<span class="line"><span style="color:#F8F8F2;">  DefaultThemePageFrontmatter,</span></span>
<span class="line"><span style="color:#F8F8F2;">  DefaultThemePageData,</span></span>
<span class="line"><span style="color:#F8F8F2;">   </span><span style="color:#F92672;">}</span><span style="color:#F8F8F2;"> from &#39;../../shared&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">const page = usePageData&lt;</span><span style="color:#66D9EF;font-style:italic;">DefaultThemePageData</span><span style="color:#F8F8F2;">&gt;()</span></span>
<span class="line"><span style="color:#F8F8F2;">console.log(page)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">const frontmatter = usePageFrontmatter&lt;</span><span style="color:#66D9EF;font-style:italic;">DefaultThemePageFrontmatter</span><span style="color:#F8F8F2;">&gt;()</span></span>
<span class="line"><span style="color:#F8F8F2;">const author = frontmatter.value.author.name </span></span>
<span class="line"><span style="color:#F8F8F2;">var date = frontmatter.value.date</span></span>
<span class="line"><span style="color:#F8F8F2;">date = date.toString().substring(0,10)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">/**</span></span>
<span class="line"><span style="color:#F8F8F2;"> * \u590D\u5236\u5355\u884C\u5185\u5BB9\u5230\u7C98\u8D34\u677F</span></span>
<span class="line"><span style="color:#F8F8F2;"> * content : \u9700\u8981\u590D\u5236\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#F8F8F2;"> * message : \u590D\u5236\u5B8C\u540E\u7684\u63D0\u793A\uFF0C\u4E0D\u4F20\u5219\u9ED8\u8BA4\u63D0\u793A&quot;\u590D\u5236\u6210\u529F&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;"> */</span></span>
<span class="line"><span style="color:#F8F8F2;">function copyToClip(content, message) </span><span style="color:#F92672;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">    var aux </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document.</span><span style="color:#A6E22E;">createElement</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;textarea&quot;</span><span style="color:#F8F8F2;">); </span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// aux.setAttribute(&quot;value&quot;, content); // \u8FD9\u6837\u5199\u6CA1\u6709\u4FDD\u7559\u6362\u884C\u7B26</span></span>
<span class="line"><span style="color:#F8F8F2;">    aux.value </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> content</span></span>
<span class="line"><span style="color:#F8F8F2;">    document.body.</span><span style="color:#A6E22E;">appendChild</span><span style="color:#F8F8F2;">(aux); </span></span>
<span class="line"><span style="color:#F8F8F2;">    aux.</span><span style="color:#A6E22E;">select</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">    document.</span><span style="color:#A6E22E;">execCommand</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;copy&quot;</span><span style="color:#F8F8F2;">); </span></span>
<span class="line"><span style="color:#F8F8F2;">    document.body.</span><span style="color:#A6E22E;">removeChild</span><span style="color:#F8F8F2;">(aux);</span></span>
<span class="line"><span style="color:#F92672;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">onMounted(() =&gt; </span><span style="color:#F92672;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;mounted&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  var codes </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document.</span><span style="color:#A6E22E;">getElementsByClassName</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;shiki&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">  console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(codes.length)</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#A6E22E;">for</span><span style="color:#F8F8F2;"> (let i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> codes.length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    var code </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> codes[i]</span></span>
<span class="line"><span style="color:#F8F8F2;">    var copy_div </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document.</span><span style="color:#A6E22E;">createElement</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;div&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    copy_div.classList.add(</span><span style="color:#E6DB74;">&quot;code-copy&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    copy_div.setAttribute(</span><span style="color:#E6DB74;">&#39;title&#39;</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&#39;\u590D\u5236\u4EE3\u7801&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    copy_div.innerText = </span><span style="color:#E6DB74;">&#39;\u590D\u5236&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    code.appendChild(copy_div)</span></span>
<span class="line"><span style="color:#F8F8F2;">    copy_div.onclick = function(){</span></span>
<span class="line"><span style="color:#F8F8F2;">      var previous = this.previousSibling.textContent</span></span>
<span class="line"><span style="color:#F8F8F2;">      copyToClip(previous,null)</span></span>
<span class="line"><span style="color:#F8F8F2;">      this.innerText = </span><span style="color:#E6DB74;">&#39;\u590D\u5236\u6210\u529F&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    copy_div.onmouseleave = function(){</span></span>
<span class="line"><span style="color:#F8F8F2;">      let that = this</span></span>
<span class="line"><span style="color:#F8F8F2;">      setTimeout(function(){ that.innerText = </span><span style="color:#E6DB74;">&#39;\u590D\u5236&#39;</span><span style="color:#F8F8F2;">; }, 5000);</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;main class=</span><span style="color:#E6DB74;">&quot;page&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span></span>
<span class="line"><span style="color:#F8F8F2;">    &lt;slot name=</span><span style="color:#E6DB74;">&quot;top&quot;</span><span style="color:#F8F8F2;"> /&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span></span>
<span class="line"><span style="color:#F8F8F2;">    &lt;div class=</span><span style="color:#E6DB74;">&quot;theme-default-content&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">      &lt;div class=</span><span style="color:#E6DB74;">&quot;page-bar no-print&quot;</span><span style="color:#F8F8F2;"> style=</span><span style="color:#E6DB74;">&quot;padding-top:1rem;&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">        &amp;nbsp;</span></span>
<span class="line"><span style="color:#F8F8F2;">        &lt;span style=</span><span style="color:#E6DB74;">&quot;float:right;color:#999;&quot;</span><span style="color:#F8F8F2;">&gt; \u{1F464}{{ author }}  &amp;nbsp;&amp;nbsp; \u{1F4C5}{{ date }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">      &lt;Content /&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">    &lt;PageMeta /&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">    &lt;PageNav /&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">    &lt;slot name=</span><span style="color:#E6DB74;">&quot;bottom&quot;</span><span style="color:#F8F8F2;"> /&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;/main&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;style lang=</span><span style="color:#E6DB74;">&quot;scss&quot;</span><span style="color:#F8F8F2;"> scoped&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">.theme-default-content{</span></span>
<span class="line"><span style="color:#F8F8F2;">  margin-top: 1rem;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">&lt;/</span><span style="color:#F8F8F2;">style</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br></div></div><p>\u540C\u65F6\u5728 <code>theme-default/lib/client/styles/code.scss</code> \u6DFB\u52A0\u4EE5\u4E0B\u6837\u5F0F</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#A6E22E;">.code-copy</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">font-family</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">var</span><span style="color:#F8F8F2;">(--font-family-code);</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">font-size</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0.5</span><span style="color:#F92672;">rem</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">rgb</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">158</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">158</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">158</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">position</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">absolute</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">top</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">.8</span><span style="color:#F92672;">rem</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">right</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">2</span><span style="color:#F92672;">rem</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">cursor</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">pointer</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.code-copy:hover</span><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">color</span><span style="color:#F8F8F2;">:</span><span style="color:#66D9EF;">white</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,8);function p(e,o){return l}var t=s(a,[["render",p],["__file","vuepress.html.vue"]]);export{t as default};
