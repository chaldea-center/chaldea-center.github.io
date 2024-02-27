import{_ as e,c as a,o as t,a5 as l}from"./chunks/framework.-i2sbza6.js";const m=JSON.parse('{"title":"APP Settings","description":"","frontmatter":{},"headers":[],"relativePath":"guide/app_setting.md","filePath":"guide/app_setting.md","lastUpdated":1677782591000}'),s={name:"guide/app_setting.md"},i=l(`<h1 id="app-settings" tabindex="-1">APP Settings <a class="header-anchor" href="#app-settings" aria-label="Permalink to &quot;APP Settings&quot;">​</a></h1><h2 id="chaldea-user" tabindex="-1">Chaldea User <a class="header-anchor" href="#chaldea-user" aria-label="Permalink to &quot;Chaldea User&quot;">​</a></h2><p>A very simple user system, only for user data backup and multi-device synchronization.</p><p>It&#39;s not a necessary step if you just use it on one device. Everything in app is available regardless of registered or not.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>NO security guarantee! DON&#39;T use frequently used passwords!!!</p></div><h2 id="game-account" tabindex="-1">Game Account <a class="header-anchor" href="#game-account" aria-label="Permalink to &quot;Game Account&quot;">​</a></h2><ul><li>Switch among multiple game accounts</li><li>Game Server</li></ul><h2 id="app-data" tabindex="-1">App Data <a class="header-anchor" href="#app-data" aria-label="Permalink to &quot;App Data&quot;">​</a></h2><blockquote><p>Root folder for app data(<code>root_path</code>): All data saved here, you can manually backup them.</p></blockquote><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>For Android and iOS, uninstall app will fully delete <code>root_path</code> including your user data.</p></div><p>The root path differs from platforms</p><table><thead><tr><th style="text-align:left;">OS</th><th style="text-align:left;">Root Path</th></tr></thead><tbody><tr><td style="text-align:left;">iOS</td><td style="text-align:left;"><code>&quot;File&quot; App/On My iPhone/Chaldea/</code></td></tr><tr><td style="text-align:left;">Android</td><td style="text-align:left;"><code>Android/data/cc.narumi.chaldea/files/</code></td></tr><tr><td style="text-align:left;">Windows</td><td style="text-align:left;"><code>folder_of_chaldea.exe/userdata</code></td></tr><tr><td style="text-align:left;">macOS</td><td style="text-align:left;"><code>/Users/&lt;user&gt;/Library/Containers/cc.narumi.chaldea/Data/Documents/</code></td></tr></tbody></table><blockquote><p>The true path can be found in <code>User Data-Data Folder</code>.</p></blockquote><p>Directory Structure:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>root_path</span></span>
<span class="line"><span>├── assets  // image/voice assets downloaded path</span></span>
<span class="line"><span>├── backup  // daily backup of userdata.json</span></span>
<span class="line"><span>├── game    // app dataset</span></span>
<span class="line"><span>├── downloads</span></span>
<span class="line"><span>├── ffo_output</span></span>
<span class="line"><span>├── logs</span></span>
<span class="line"><span>├── temp</span></span>
<span class="line"><span>└── user</span></span>
<span class="line"><span>    ├── settings.json   // main local settings</span></span>
<span class="line"><span>    └── userdata.json   // ALL user-related data</span></span></code></pre></div><h3 id="user-data-management" tabindex="-1">User Data Management <a class="header-anchor" href="#user-data-management" aria-label="Permalink to &quot;User Data Management&quot;">​</a></h3><ul><li>Online backup: the server provides user data backup and restore.</li><li>Github Backup: sync data with Github repo. It will fail if SHA mismatch, you can clear SHA then force overwrite remote file.</li><li>Backup history: the app will create a backup everyday(in <code>backup</code> folder), you can restore it in backup history.</li></ul><p>And Chaldea server also provides a simple backup feature, you need to manually upload to or download from server among multiple devices.</p><p><strong>Android External Storage</strong></p><blockquote><p>Disabled. Android users can select whether to use external storage if SD card exists. When toggle the setting, you can choose to auto migrate app data to target directory. Take attention, auto migration will <strong>override</strong> files if already exist in target directory. Otherwise, you can choose to manually copy your data.</p></blockquote><blockquote><p>Do manual BACKUP for your data to avoid accident, mainly in <code>userdata</code>, <code>config</code> and <code>backup</code>.</p></blockquote><p>You need to restart app to let it take effect.</p><h3 id="game-data-management" tabindex="-1">Game Data Management <a class="header-anchor" href="#game-data-management" aria-label="Permalink to &quot;Game Data Management&quot;">​</a></h3><p>The dataset has minimal app requirement. If you cannot update to the latest data, please upgrade app first.</p><ul><li>Download Source: Global and China source, set at top of Settings page</li><li>Auto update: background update after startup, and apply it at the next startup or manually update it here.</li><li>Cached resources: mainly servant/ce/cc/buff icons</li><li>Clear caches: such as memory cache, temp dir, image assets etc.</li></ul><h3 id="spoiler-settings" tabindex="-1">Spoiler Settings <a class="header-anchor" href="#spoiler-settings" aria-label="Permalink to &quot;Spoiler Settings&quot;">​</a></h3><p>There are 2 similar settings:</p><ol><li>&quot;Hide Unreleased Cards&quot;: <ul><li>Only turn on filter in svt/cc/ce list page. All data are still there, turn off filter or in other pages, you can still find the unreleased cards.</li><li>The filter is based on current game account&#39;s region setting.</li></ul></li><li>&quot;Delete Unreleased Cards&quot;: <ul><li>Delete unreleased Servant/CE/CC data when loading, Events, main stories and mystic codes are kept there.</li><li>You must restart app to make spoiler change to take effect.</li><li>So when you check future event, there may be some icons only display <code>IDxxxx</code> which is already removed from local database.</li><li>All game accounts use the same spoiler settings when they set to different game server region.</li></ul></li></ol><h3 id="general-settings" tabindex="-1">General Settings <a class="header-anchor" href="#general-settings" aria-label="Permalink to &quot;General Settings&quot;">​</a></h3><ul><li>Multi-language support: Simplified and Traditional Chinese, English, Japanese and Korean(partial supported)</li><li>Dark Mode</li><li>Always on Top: for desktop platforms</li><li>Auto Rotate: for mobiles except iPad</li><li>Show Account at HomePage: beside refresh icon</li><li>Carousel Setting <ul><li>App announcement: usually about critical bugs, some are sticky</li><li>Mooncell homepage carousel(CN&amp;JP)</li><li>carousels of each region&#39;s announcement</li></ul></li></ul><h3 id="display-settings" tabindex="-1">Display Settings <a class="header-anchor" href="#display-settings" aria-label="Permalink to &quot;Display Settings&quot;">​</a></h3><ul><li>Auto Reset Filters: for Servant/CE/CommandCode filters, reset when you enter the list page</li><li>Servant List Page <ul><li><strong>Favorite</strong> button&#39;s default behavior: <strong>Show Favorite</strong>, <strong>Show ALL</strong> or <strong>Remember</strong></li><li>Top Class Filter Style: <ul><li>Auto match screen size</li><li>Single row with <strong>Extra</strong> class collapsed</li><li>Single row with <strong>Extra</strong> class expended</li><li>Expand <strong>Extra</strong> class in the second row</li><li>Hide class filter</li></ul></li><li>[Plan List Page] Only Change 2nd Append Skill or all 3 skills</li></ul></li><li>Servant Detail Page <ul><li>Tab Sorting: sorting plan, skill, np and other tabs as you like</li><li>Priority Tagging: servant priority P1~P5, just label them with text to help you remember</li></ul></li></ul><h2 id="app-auto-upgrade" tabindex="-1">APP Auto Upgrade <a class="header-anchor" href="#app-auto-upgrade" aria-label="Permalink to &quot;APP Auto Upgrade&quot;">​</a></h2><p>Inside <code>About Chaldea</code>, you can turn on app auto upgrade. It will detect updates and jump to download link.</p><ul><li>You have to manually extract and replace the archived file in Windows/Linux or manually install apk on Android.</li><li>For iOS and Mac App Store version, please check update in store</li></ul>`,35),n=[i];function o(r,d,p,c,u,h){return t(),a("div",null,n)}const f=e(s,[["render",o]]);export{m as __pageData,f as default};
