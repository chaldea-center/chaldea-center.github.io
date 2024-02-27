import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.-i2sbza6.js";const y=JSON.parse('{"title":"Deep","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/import_https/deep.md","filePath":"zh/guide/import_https/deep.md","lastUpdated":1700584355000}'),e={name:"zh/guide/import_https/deep.md"},n=t(`<h1 id="deep" tabindex="-1">Deep <a class="header-anchor" href="#deep" aria-label="Permalink to &quot;Deep&quot;">​</a></h1><p>In FGO request, there are two important parameters related to user&#39;s device:</p><ul><li><code>UserAgent</code>: in http headers. Probably FGO won&#39;t check it.</li><li><code>deviceInfo</code>: in login post body. FGO will record this value in server and verify it when user requests reset Transfer Code (引き継ぎナンバー) via email which will ask user to provide last played device.</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The value also depends on Unity version, current FGO JP 2.87.0 uses <code>2020.3.34f1</code></p></div><h2 id="useragent" tabindex="-1">UserAgent <a class="header-anchor" href="#useragent" aria-label="Permalink to &quot;UserAgent&quot;">​</a></h2><p>On Android, get UA from system:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Build.VERSION.SDK_INT &gt;= Build.VERSION_CODES.JELLY_BEAN_MR1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http.agent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Example:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Dalvik/2.1.0 (Linux; U; Android 8.1; SM-G9500 Build/V417IR)&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # MuMu</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Dalvik/2.1.0 (Linux; U; Android 7.1.2; V1938CT Build/N2G48C)&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # LD5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Dalvik/2.1.0 (Linux; U; Android </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version.release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Build/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{id}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)&quot;</span></span></code></pre></div><p>On iOS, it defaults to the app&#39;s UserAgent (not sure)</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;FateGO/2.80.5 CFNetwork/1474 Darwin/23.0.0&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;FateGO/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fgover</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CFNetwork/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cfnetworkver</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Darwin/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utsname.release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div><h2 id="deviceinfo" tabindex="-1">deviceInfo <a class="header-anchor" href="#deviceinfo" aria-label="Permalink to &quot;deviceInfo&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> __fastcall</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NetworkManager__SetDeviceInfoField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RequestBase_o</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MethodInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  __int64 v3;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // x1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Il2CppObject </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deviceModel;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // x20</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Il2CppObject </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">operatingSystem;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // x0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  System_String_o </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v6;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // x0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  deviceModel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Il2CppObject </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UnityEngine_SystemInfo__get_deviceModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  operatingSystem </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Il2CppObject </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UnityEngine_SystemInfo__get_operatingSystem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  v6 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> System_String__Format_43739268</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((System_String_o </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)StringLiteral_23458, deviceModel, operatingSystem, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  RequestBase__addField_30957164</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(request, (System_String_o </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)StringLiteral_17935, v6, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Here format template is <code>{0} / {1}</code>.</p><h3 id="devicemodel" tabindex="-1">deviceModel <a class="header-anchor" href="#devicemodel" aria-label="Permalink to &quot;deviceModel&quot;">​</a></h3><p><a href="https://docs.unity3d.com/ScriptReference/SystemInfo-deviceModel.html" target="_blank" rel="noreferrer">Unity SystemInfo.deviceModel</a></p><p>On Android:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;samsung SM-G9500&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manufacturer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> {</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div><p>On iOS:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;iPhone6,1&quot;</span></span></code></pre></div><p>In device_info plugin is <code>iosInfo.utsname.machine</code></p><h3 id="operatingsystem" tabindex="-1">operatingSystem <a class="header-anchor" href="#operatingsystem" aria-label="Permalink to &quot;operatingSystem&quot;">​</a></h3><p><a href="https://docs.unity3d.com/ScriptReference/SystemInfo-operatingSystem.html" target="_blank" rel="noreferrer">Unity SystemInfo.operatingSystem</a></p><p>On Android:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Android OS 7.1.2 / API-25 (N2G48C/4565141)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Android OS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version.release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> / API-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version.sdkInt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{id}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version.incremental</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)&quot;</span></span></code></pre></div><p>On iOS:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Prints &quot;iPhone OS&quot; with iOS 15.3.1</span></span>
<span class="line"><span>// Prints &quot;iPad OS&quot; on iPad with iOS 16</span></span></code></pre></div>`,27),h=[n];function p(l,k,d,r,o,g){return a(),i("div",null,h)}const c=s(e,[["render",p]]);export{y as __pageData,c as default};
