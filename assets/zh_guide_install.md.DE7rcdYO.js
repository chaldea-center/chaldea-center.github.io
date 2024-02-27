import{A as e}from"./chunks/AppRelease.Bodbp7ZV.js";import{c as a,J as t,a5 as r,o as l}from"./chunks/framework.-i2sbza6.js";const s=r(`<h1 id="下载与安装" tabindex="-1">下载与安装 <a class="header-anchor" href="#下载与安装" aria-label="Permalink to &quot;下载与安装&quot;">​</a></h1><h3 id="系统要求" tabindex="-1">系统要求 <a class="header-anchor" href="#系统要求" aria-label="Permalink to &quot;系统要求&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:left;">最低要求</th></tr></thead><tbody><tr><td style="text-align:left;">Android</td><td style="text-align:left;">Android 6.0 (API level 23)</td></tr><tr><td style="text-align:left;">iOS</td><td style="text-align:left;">iOS 12.0</td></tr><tr><td style="text-align:left;">Windows</td><td style="text-align:left;">Windows 10, x64</td></tr><tr><td style="text-align:left;">macOS</td><td style="text-align:left;">macOS 10.14</td></tr><tr><td style="text-align:left;">Linux</td><td style="text-align:left;">Debian 10, x64 <sup>1</sup></td></tr><tr><td style="text-align:left;">Web(海外)<sup>3</sup></td><td style="text-align:left;"><a href="https://chaldea.center" target="_blank" rel="noreferrer">https://chaldea.center</a></td></tr><tr><td style="text-align:left;">Web(国内)</td><td style="text-align:left;"><a href="https://cn.chaldea.center" target="_blank" rel="noreferrer">https://cn.chaldea.center</a></td></tr></tbody></table><blockquote><p><sup>1</sup> 仅 Debian 发行版的 Linux 得到测试与支持。虽然可能能运行在其他发行版上，但我们目前无法保证完全兼容，也无法为这些平台出现的问题提供技术支持</p><p><sup>2</sup> <strong>移动端网页</strong>的性能、兼容性较差，不建议使用。自2.5.0起，web版要求在较新版本的浏览器上运行。 详见<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef#browser_compatibility" target="_blank" rel="noreferrer">WeakRef</a> 和 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility" target="_blank" rel="noreferrer">globalThis</a></p></blockquote><p>更多关于系统版本要求可查看<a href="https://docs.flutter.dev/reference/supported-platforms" target="_blank" rel="noreferrer">Flutter 文档</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>由于数据储存位置共享，请勿同时运行多个实例或网页，否则会导致数据相互覆盖。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>若遇到安装/启动问题，请先检查<a href="#注意事项">安装注意事项</a>。</p></div><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><h3 id="google-play" tabindex="-1">Google Play <a class="header-anchor" href="#google-play" aria-label="Permalink to &quot;Google Play&quot;">​</a></h3><p><a href="https://play.google.com/store/apps/details?id=cc.narumi.chaldea" target="_blank" rel="noreferrer"><img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" width="137.5"></a><a href="https://f-droid.org/packages/cc.narumi.chaldea.fdroid/" target="_blank" rel="noreferrer"><img alt="Get it on F-droid" src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" width="137.5"></a></p><p><a href="https://play.google.com/store/apps/details?id=cc.narumi.chaldea" target="_blank" rel="noreferrer">Get it on Google Play</a></p><h3 id="app-store" tabindex="-1">App Store <a class="header-anchor" href="#app-store" aria-label="Permalink to &quot;App Store&quot;">​</a></h3><p><a href="https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&amp;itscg=30200" target="_blank" rel="noreferrer"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1610841600&amp;h=cb0adac232fdd6b88894f78b2f349b6e" alt="Download on the App Store" width="120"></a></p><p><a href="https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&amp;itscg=30200" target="_blank" rel="noreferrer">Download on the App Store</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>包括 iOS App Store 和 Mac App Store</p></div><h3 id="github-release" tabindex="-1">GitHub Release <a class="header-anchor" href="#github-release" aria-label="Permalink to &quot;GitHub Release&quot;">​</a></h3><p>包含 Android、Windows 和 Linux 安装包。若最新版不包含所需平台，请检查更早的发布版本。</p><ul><li><a href="https://github.com/chaldea-center/chaldea/releases" target="_blank" rel="noreferrer">Github Releases</a></li><li><a href="#releases">历史版本</a> 可选代理下载</li></ul><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><h3 id="android" tabindex="-1">Android <a class="header-anchor" href="#android" aria-label="Permalink to &quot;Android&quot;">​</a></h3><p>对于 v2，所有 Android 版本均合并到一个安装包中，因此下载时无需分辨 arm64-v8a、armeabi-v7a、x86_64</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果你正在使用 v1.x，升级 v2 前必须要先<strong>卸载</strong>旧版本才能安装新版本，因此务必先备份数据到本地！v1 与 v2 的服务器备份也不相同！</p></div><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Windows 压缩包，请解压后再运行，并储存于非系统目录，<code>Program File</code>等系统目录内将导致程序无法运行。</p></div><h4 id="error-vcruntime140-1-dll-was-not-found" tabindex="-1">Error: <code>VCRUNTIME140_1.dll was not found</code> <a class="header-anchor" href="#error-vcruntime140-1-dll-was-not-found" aria-label="Permalink to &quot;Error: \`VCRUNTIME140_1.dll was not found\`&quot;">​</a></h4><p>若启动时报该错误，先安装<a href="https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads" target="_blank" rel="noreferrer">Microsoft Visual C++ redistributable package</a></p><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>macOS 现在仅提供应用商店版本</p></div><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>如果应用启动失败，请尝试从 Terminal 中启动<code>./chaldea</code>并检查可能输出的报错信息。</p><p>自 v2.3.0 起，桌面应用支持在系统托盘显示，在 Linux 系统中需要使用<code>libappindicator</code>相关库。如果系统未内置或未安装，则应用启动时可能会失败而无错误提示。但目前由于存在问题已禁用该功能（仍需安装相关库）。</p><p>以 Deibian 系列为例（如 Ubuntu），可以通过以下命令安装上述库：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Debian based</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt install libappindicator3-1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ubuntu 22.04 或更高</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get install libayatana-appindicator3-dev</span></span></code></pre></div><h2 id="releases" tabindex="-1">历史版本 <a class="header-anchor" href="#releases" aria-label="Permalink to &quot;历史版本 {#releases}&quot;">​</a></h2><blockquote><p>FGO 游戏安装包请查看<a href="./fgo_apk">FGO APK</a></p></blockquote><p>以下列出了 Chaldea app 的 Android、Linux 和 Windows 客户端下载地址，包括 beta 版。</p><p>国内用户若无法直连<strong>Github</strong>下载，请选择 <strong>代理(Proxy)</strong> 链接进行下载。</p><p>所有历史发布版本请见<a href="https://github.com/chaldea-center/chaldea/releases" target="_blank" rel="noreferrer">Github Releases</a></p><p>注意: <code>beta</code>版即预览版，随最新版代码一起更新。一般情况下下载 v2.x 最新正式版即可。</p><p>最新稳定版下载地址:</p><ul><li>Android: <a href="https://worker-cn.chaldea.center/releases/latest/android" target="_blank" rel="noreferrer">https://worker-cn.chaldea.center/releases/latest/android</a></li><li>Windows: <a href="https://worker-cn.chaldea.center/releases/latest/windows" target="_blank" rel="noreferrer">https://worker-cn.chaldea.center/releases/latest/windows</a></li><li>Linux: <a href="https://worker-cn.chaldea.center/releases/latest/linux" target="_blank" rel="noreferrer">https://worker-cn.chaldea.center/releases/latest/linux</a></li></ul>`,41),h=JSON.parse('{"title":"下载与安装","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/install.md","filePath":"zh/guide/install.md","lastUpdated":1708291033000}'),i={name:"zh/guide/install.md"},b=Object.assign(i,{setup(o){return(n,d)=>(l(),a("div",null,[s,t(e,{lang:"zh"})]))}});export{h as __pageData,b as default};
