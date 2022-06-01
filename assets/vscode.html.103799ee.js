import{_ as s,d as n}from"./app.6d8b3b6f.js";const a={},l=n(`<h1 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> vscode</h1><h2 id="vscode-\u53F3\u952E\u6253\u5F00\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#vscode-\u53F3\u952E\u6253\u5F00\u6587\u4EF6\u5939" aria-hidden="true">#</a> vscode \u53F3\u952E\u6253\u5F00\u6587\u4EF6\u5939</h2><ol><li>\u627E\u5230vscode\u7684\u5B89\u88C5\u8DEF\u5F84</li></ol><p>\u6BD4\u5982\u6211\u7684\u662F\uFF1AD:\\Programs\\Microsoft VS Code</p><ol start="2"><li>\u65B0\u5EFAvsCodeOpenFolder.reg\uFF08\u653E\u5728\u4EFB\u4F55\u5730\u65B9\u90FD\u53EF\u4EE5\uFF09</li></ol><p>\u5C06\u4EE5\u4E0B\u5185\u5BB9\u7C98\u8D34\u8FDB\u53BB\uFF0C\u6CE8\u610Fvscode\u8DEF\u5F84\u8981\u6839\u636E\u81EA\u5DF1\u7535\u8111\u4E0A\u7684\u5B89\u88C5\u8DEF\u5F84\u4FEE\u6539</p><ol start="3"><li>\u53CC\u51FBvsCodeOpenFolder.reg,\u786E\u5B9A\u5C31\u884C</li></ol><div class="language-r ext-r line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">Windows Registry Editor Version </span><span style="color:#AE81FF;">5.00</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">[HKEY_CLASSES_ROOT\\</span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;">\\shell\\VSCode]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">@</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;Open with Code&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6DB74;">&quot;Icon&quot;</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;D:</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Programs</span><span style="color:#AE81FF;">\\M</span><span style="color:#E6DB74;">icrosoft VS Code</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Code.exe&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">[HKEY_CLASSES_ROOT\\</span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;">\\shell\\VSCode\\command]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">@</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">D:</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Programs</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Microsoft VS Code</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Code.exe</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;"> </span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">%1</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">     </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">Windows Registry Editor Version </span><span style="color:#AE81FF;">5.00</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">[HKEY_CLASSES_ROOT\\Directory\\shell\\VSCode]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">@</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;Open with Code&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6DB74;">&quot;Icon&quot;</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;D:</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Programs</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Microsoft VS Code</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Code.exe&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">[HKEY_CLASSES_ROOT\\Directory\\shell\\VSCode\\command]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">@</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">D:</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Programs</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Microsoft VS Code</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Code.exe</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;"> </span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">%V</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">Windows Registry Editor Version </span><span style="color:#AE81FF;">5.00</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\VSCode]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">@</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;Open with Code&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6DB74;">&quot;Icon&quot;</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;D:</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Programs</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Microsoft VS Code</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Code.exe&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\VSCode\\command]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">@</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">D:</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Programs</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Microsoft VS Code</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">Code.exe</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;"> </span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">%V</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div>`,8);function p(e,o){return l}var c=s(a,[["render",p],["__file","vscode.html.vue"]]);export{c as default};
