import{_ as a,c as l,o as e,a5 as t}from"./chunks/framework.-i2sbza6.js";const g=JSON.parse('{"title":"应用设置","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/app_setting.md","filePath":"zh/guide/app_setting.md","lastUpdated":1704286101000}'),i={name:"zh/guide/app_setting.md"},s=t(`<h1 id="应用设置" tabindex="-1">应用设置 <a class="header-anchor" href="#应用设置" aria-label="Permalink to &quot;应用设置&quot;">​</a></h1><p>设置页主要包含了以下几个部分：</p><h2 id="chaldea-user" tabindex="-1">Chaldea User <a class="header-anchor" href="#chaldea-user" aria-label="Permalink to &quot;Chaldea User&quot;">​</a></h2><p>一个简易的用户系统，仅用于备份数据至服务器并实现多设备同步数据。没有此需求可以不用创建账号，不影响其他一切应用内的功能。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>没有安全保证，请勿使用常用密码</p></div><h2 id="游戏账号设置" tabindex="-1">游戏账号设置 <a class="header-anchor" href="#游戏账号设置" aria-label="Permalink to &quot;游戏账号设置&quot;">​</a></h2><ul><li>多个账号切换</li><li>所属游戏区服</li></ul><h2 id="应用数据" tabindex="-1">应用数据 <a class="header-anchor" href="#应用数据" aria-label="Permalink to &quot;应用数据&quot;">​</a></h2><blockquote><p>数据根目录(<code>root_path</code>): 本应用所有数据保存的根目录，可用于手动备份还原。</p></blockquote><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>对于 Android 和 iOS，卸载应用将彻底删除<code>root_path</code>，导致所有数据丢失，请注意备份。</p></div><p>不同操作系统根目录不同</p><table><thead><tr><th style="text-align:left;">OS</th><th style="text-align:left;">根目录</th></tr></thead><tbody><tr><td style="text-align:left;">iOS</td><td style="text-align:left;"><code>文件应用/我的iPhone/Chaldea/</code></td></tr><tr><td style="text-align:left;">Android</td><td style="text-align:left;"><code>{emulated or SD card}/Android/data/cc.narumi.chaldea/files/</code></td></tr><tr><td style="text-align:left;">Windows</td><td style="text-align:left;"><code>chaldea.exe所在目录/userdata</code></td></tr><tr><td style="text-align:left;">macOS</td><td style="text-align:left;"><code>/Users/&lt;user&gt;/Library/Containers/cc.narumi.chaldea/Data/Documents/</code></td></tr></tbody></table><blockquote><p>实际路径可在<code>用户数据-数据目录</code>中查看</p></blockquote><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Android: 若存在 SD 卡，用户可选择是否启用外部储存(SD 卡)，请注意区分内部储存和外部储存的路径，可以在用户数据中设置。但是不保证高可用性。</p></div><p>文件目录结构</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>root_path</span></span>
<span class="line"><span>├── assets  // 图片等资源下载存放位置</span></span>
<span class="line"><span>├── backup  // 每日备份userdata.json于此</span></span>
<span class="line"><span>├── game    // 应用数据</span></span>
<span class="line"><span>├── downloads</span></span>
<span class="line"><span>├── ffo_output</span></span>
<span class="line"><span>├── logs</span></span>
<span class="line"><span>├── temp</span></span>
<span class="line"><span>└── user</span></span>
<span class="line"><span>    ├── settings.json   // 本地设置文件</span></span>
<span class="line"><span>    └── userdata.json   // 用户相关所有数据，备份这个最重要</span></span></code></pre></div><h3 id="用户数据管理" tabindex="-1">用户数据管理 <a class="header-anchor" href="#用户数据管理" aria-label="Permalink to &quot;用户数据管理&quot;">​</a></h3><ul><li>在线备份：服务器提供了简易的备份功能，可实现多设备的同步，需要手动上传下载，暂时无法自动同步。</li><li>Github 备份: 同步至 Github 仓库，SHA 不匹配时同步失败，可清除 SHA 后进行覆写。</li><li>历史备份: 于本地的每日备份(<code>backup</code>目录)，可选择历史备份进行还原</li></ul><p><strong>安卓外部储存</strong></p><blockquote><p>已禁用</p></blockquote><p>安卓用户可选择是否开启外部储存(若存在 SD 卡)，更改设置时，可选择自动迁移源数据至目标文件夹。 注意若目标文件已存在，自动迁移将覆盖数据！若不自动迁移，建议手动迁移数据后重启应用。</p><blockquote><p>做好手动备份以防意外！主要用户数据为<code>userdata</code>、<code>config</code>和<code>backup</code>文件夹。</p></blockquote><p>需要重启应用使该设置生效。</p><h3 id="游戏数据管理" tabindex="-1">游戏数据管理 <a class="header-anchor" href="#游戏数据管理" aria-label="Permalink to &quot;游戏数据管理&quot;">​</a></h3><p>游戏数据有一定的版本兼容性要求，即要求客户端版本大于其最低版本要求。若无法更新新数据时请先升级 app。</p><ul><li>下载源: 在设置页顶部的 chaldea 服务器，分国内和海外，若海外无法连接下载，请切换国内源</li><li>自动更新: 应用启动后后台更新，下载启动时可应用更新或手动更新</li><li>缓存图标: 主要是从者/礼装等图标及 buff 图标，约 3000+</li><li>清楚缓存: 可分别清理内存缓存、temp 目录、图片资源目录等类别</li></ul><h3 id="spoiler-settings" tabindex="-1">防剧透设置 <a class="header-anchor" href="#spoiler-settings" aria-label="Permalink to &quot;防剧透设置 {#spoiler-settings}&quot;">​</a></h3><p>有两处类似的关于剧透设置</p><ol><li>“隐藏未实装卡牌”: <ul><li>仅仅是默认在列表页开启未实装筛选，所有数据仍在，关闭筛选或其他地方仍可见所有信息</li><li>筛选根据当前账号所在区服进行隐藏未实装卡牌</li></ul></li><li>“删除未实装卡卡牌”: <ul><li>在加载数据时即刻删除所有未实装的“从者/礼装/纹章”，活动、主线和御主礼装保持不变</li><li>不同游戏账号之间使用相同的剧透设置，即使账号所设置的区服不同</li><li>当浏览未来活动时，会遇到部分仅显示<code>IDxxx</code>的图标，这是由于本地数据库已无相应记录无法显示。</li><li>防剧透设置需重启以应用更改</li></ul></li></ol><h3 id="通用设置" tabindex="-1">通用设置 <a class="header-anchor" href="#通用设置" aria-label="Permalink to &quot;通用设置&quot;">​</a></h3><ul><li>多语言支持：中(简&amp;繁)、英、日、韩(部分支持)</li><li>深色模式/夜间模式</li><li>置顶显示: 仅桌面端可用</li><li>自动旋转: 仅移动端（iPad 除外），是否允许横屏</li><li>首页显示当前账号名称</li><li>轮播设置：首页轮播图，以下几个数据源 <ul><li>App 通知：通常为有严重 bug 时来催赶紧更新，部分通知为常驻</li><li>Mooncell 首页轮播图</li><li>各区服服公告栏轮播图</li></ul></li></ul><h3 id="显示设置" tabindex="-1">显示设置 <a class="header-anchor" href="#显示设置" aria-label="Permalink to &quot;显示设置&quot;">​</a></h3><ul><li>筛选自动重置：主要用于从者/礼装/纹章列表页筛选选项在每次进入时自动重置</li><li>从者列表页 <ul><li><strong>关注</strong>按钮默认选项： 关注按钮有三种状态（关注/未关注/所有），可设置每次进入时时重设为所有、已关注或记住上一次选择</li><li>顶部职阶筛选样式 <ul><li>自动匹配</li><li>单行不展开 Extra 职阶</li><li>单行并展开 Extra 职阶</li><li>两行显示，Extra 职阶显示在第二行</li><li>隐藏职阶筛选（仍可在弹出的筛选设置里设置）</li></ul></li><li>[规划列表页]统一设置附加技能: 仅技能 2 或 全部三个技能</li></ul></li><li>从者详情页 <ul><li>标签页排序：规划、技能、宝具等等标签页自定义排序，</li><li>优先级备注：从者优先级有 1-5，该备注项主要用于标记每个优先级的含义，显示在图标下方</li></ul></li></ul><h2 id="app-自动更新" tabindex="-1">APP 自动更新 <a class="header-anchor" href="#app-自动更新" aria-label="Permalink to &quot;APP 自动更新&quot;">​</a></h2><p>在<code>关于Chaldea</code>中可开启自动更新，启动时自动检测可用更新并跳转至下载链接。</p><ul><li>手动解压并覆盖 Windows/Linux 程序或安装 apk</li><li>iOS 和 macOS 商店版请前往 App Store 更新</li></ul>`,36),n=[s];function o(d,p,c,r,u,h){return e(),l("div",null,n)}const m=a(i,[["render",o]]);export{g as __pageData,m as default};
