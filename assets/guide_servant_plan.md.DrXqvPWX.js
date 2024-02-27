import{_ as e,c as t,o as a,a5 as l,ah as i,ai as n}from"./chunks/framework.-i2sbza6.js";const f=JSON.parse('{"title":"Servant Planning","description":"","frontmatter":{},"headers":[],"relativePath":"guide/servant_plan.md","filePath":"guide/servant_plan.md","lastUpdated":1704278861000}'),o={name:"guide/servant_plan.md"},s=l('<h1 id="servant-planning" tabindex="-1">Servant Planning <a class="header-anchor" href="#servant-planning" aria-label="Permalink to &quot;Servant Planning&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The <strong>Servant</strong> and <strong>Plan</strong> page are all for servants. <strong>Plan</strong> page is designed for batch changing the servant skill levels.</p></div><p><img src="'+i+'" alt="Servant List Page" loading="lazy"></p><figcaption style="text-align:center;">Servant List Page<br><small>1-Favorite/Other/All, 2-Filter, 3-Search, 4-Popup Menu, 5-Class Filter, 6-Hide One, 7-Batch Setting</small></figcaption><h2 id="servant-list-page" tabindex="-1">Servant List Page <a class="header-anchor" href="#servant-list-page" aria-label="Permalink to &quot;Servant List Page&quot;">​</a></h2><p>Similar to CE and Command Code list, it shows servants&#39; name, number, class and current skill levels if favorite.</p><h3 id="favorite" tabindex="-1">Favorite <a class="header-anchor" href="#favorite" aria-label="Permalink to &quot;Favorite&quot;">​</a></h3><p>Switch list among <strong>SHOW ALL</strong>, <strong>FAVORITE</strong> and <strong>NOT FAVORITE</strong>.</p><p>The default behavior can be set in <a href="./app_setting#display_settings">Display Settings</a></p><h3 id="filter" tabindex="-1">Filter <a class="header-anchor" href="#filter" aria-label="Permalink to &quot;Filter&quot;">​</a></h3><p>Provide the detailed servant basic info, traits, plan status and skill/NP effect filter. Effect filter doesn&#39;t include append skill since all append skills are almost the same. See <a href="./buff_filter">Buff Filter</a> for details.</p><h3 id="search" tabindex="-1">Search <a class="header-anchor" href="#search" aria-label="Permalink to &quot;Search&quot;">​</a></h3><ul><li>custom search scope: basic, skill, NP...</li><li>some key fields support Chinese Pinyin and Japanese Romaji search</li><li>multiple keyword support, see <a href="./search_filter">Search</a> for details.</li></ul><h3 id="popup-menu" tabindex="-1">Popup Menu <a class="header-anchor" href="#popup-menu" aria-label="Permalink to &quot;Popup Menu&quot;">​</a></h3><p>Not all options are shown in different pages.</p><ul><li><strong>Select Plan</strong>: support at most 5 plans</li><li><strong>Copy Plan from...</strong>: Copy another plan to current plan</li></ul><h3 id="top-class-filter-style" tabindex="-1">Top Class Filter Style <a class="header-anchor" href="#top-class-filter-style" aria-label="Permalink to &quot;Top Class Filter Style&quot;">​</a></h3><p>Go to <a href="./app_setting#display-settings">Display Settings</a> to choose the class filter style</p><h2 id="plan-list-page" tabindex="-1">Plan List Page <a class="header-anchor" href="#plan-list-page" aria-label="Permalink to &quot;Plan List Page&quot;">​</a></h2><p>Different from <strong>Servant List Page</strong>, it shows the servant detail level info for ascension, palingenesis, skills and costume, both current value and target value.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Main purpose of this page is to <strong>batch</strong> changing all shown servants&#39; level.</p></div><p>You can custom shown servants by filter dialog. What&#39;s more, click the trailing <strong>👁️‍🗨️Hide</strong> button will hide the specific servant which won&#39;t respond to your batch setting.</p><p>Make sure the correct plan is selected. Every account supports multiple plans, you can switch or copy plan in the popup menu.</p><h3 id="batch-settings" tabindex="-1">Batch Settings <a class="header-anchor" href="#batch-settings" aria-label="Permalink to &quot;Batch Settings&quot;">​</a></h3><p>There are the functions for every button:</p><ul><li>Set all for <code>Current</code> status or <code>Target</code> plan</li><li>Jump to Item List Page</li><li>Dropdown button to batch change value <ul><li>ascension</li><li>all 3 active skills</li><li>append skill(s): you can set changing <strong>only 2nd</strong> or <strong>all 3</strong> append skill(s) in <a href="./app_setting#display-settings">Display Settings</a></li><li>all costumes</li></ul></li></ul><p>When you click <code>Lv.x</code>, all shown servants&#39; current/target level will change to <code>Lv.x</code>.</p><p>If you select <code>x+1</code> for skills, it means change from <code>Lv.x</code> to <code>Lv.x+1</code>. For me, mostly used for check which item is lacking at the moment.</p><h2 id="detail-page-plan-tab" tabindex="-1">Detail Page - Plan Tab <a class="header-anchor" href="#detail-page-plan-tab" aria-label="Permalink to &quot;Detail Page - Plan Tab&quot;">​</a></h2><p><img src="'+n+'" alt="Servant Detail Page" loading="lazy"></p><figcaption style="text-align:center;">Servant Detail Page<br><small>1-Favorite, 2-Popup Menu, 3-Growth Curve, 4-Priority, 5-Custom Tab Sorting, 6-Plan Settings, 7-Toolbar(Enhancement and Shortcuts)</small></figcaption><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Switch <strong>Slider Mode</strong> and <strong>Dropdown Mode</strong> in the popup menu.</p></div><h3 id="favorite-1" tabindex="-1">Favorite <a class="header-anchor" href="#favorite-1" aria-label="Permalink to &quot;Favorite&quot;">​</a></h3><p>❤️ 🤍</p><p>Add servant into plan or remove from plan. Changing current or plan value will automatically set favorite❤️.</p><p>The item detail page only shows favorite servants&#39; demands by default.</p><h3 id="popup-menu-1" tabindex="-1">Popup Menu <a class="header-anchor" href="#popup-menu-1" aria-label="Permalink to &quot;Popup Menu&quot;">​</a></h3><ul><li><strong>Select Plan</strong>: same as above</li><li><strong>Reset</strong>: Reset this servant&#39;s all status and plan</li><li><strong>Reset Plan</strong>: Only reset plan to current status</li><li><strong>Jump to</strong>: Jump to wiki pages</li><li><strong>Switch Slider/Dropdown</strong>: switch display mode as you like</li><li><strong>Create Duplicated Servant</strong>: see following section</li></ul><h3 id="duplicated-servant" tabindex="-1">Duplicated Servant <a class="header-anchor" href="#duplicated-servant" aria-label="Permalink to &quot;Duplicated Servant&quot;">​</a></h3><p>By default, we use servant collection number as key. So every servant can have only one instance. Here we call it <strong>Primary</strong> one.</p><p>If your true love is Ishtar, and want to plan 2 Ishtar for same servant collection number. You can create <strong>duplicated</strong> servant. in popup menu.</p><p>e.g. the number of primary Ishtar is No.142, the duplicated Ishtar has a new number of No.142001. <s>which means you can create at most 999 duplicated servants.</s></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Duplicated servants may cause some potential bugs, if encountered, please tell me.</p></div><h3 id="priority" tabindex="-1">Priority 1️⃣~5️⃣ <a class="header-anchor" href="#priority" aria-label="Permalink to &quot;Priority :one:~:five:&quot;">​</a></h3><p>Apply different priority for servants, as an extra filter property. Default to P1, ranges from P1 to P5.</p><p>E.g. set low rarity cards to P1, SR&amp;SSR cards to P2, upcoming servants to P3. It&#39;s convenient to filter out which priority servants should be added into plan.</p><blockquote><p>To remember the meanings of P1~P5, you can set the label for priorities in <a href="./app_setting#display-settings">Display Settings-Priority Tagging</a></p></blockquote><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The priority filter in servant list page, item list page and statistic page, share the global priority filter setting. Unchecked priority won&#39;t be added into plan. What&#39;s more, all unselected=all selected.</p></div><h3 id="leveling-plan" tabindex="-1">Leveling Plan <a class="header-anchor" href="#leveling-plan" aria-label="Permalink to &quot;Leveling Plan&quot;">​</a></h3><p>In <strong>Plan</strong> tab, For every attribute with range values, the left value is <strong>current level</strong>, and the right value is <strong>target/plan value</strong>. If it&#39;s not a range, just a single value, it won&#39;t be included in plan, just recording such a info, like NP level.</p><p>Click the right info button ℹ️ to check the item cost details or tips.</p><ol><li>Ascension - 0~4</li><li>Active Skill - 1~10</li><li>Costume Unlock - 0 means locked, 1 means unlocked</li><li>Append Skill - 0~10, <code>0/-</code> means unlocked, 0-1 will cost 120 coins</li><li>Servant coin - coin amount of servant specific coin</li><li>Palingenesis - max level(0 grail)~Lv.120(n grails), differ from servant rarity</li><li>NP level - just recording, not used</li><li>HP/ATK Fou-kun - 0~2000, 1000 by default. The internal value and shown value has such relations: <ul><li><code>0</code> Fou-kun = <code>-20</code>(calculated by silver(3) Fou-kun)</li><li><code>1000</code> Fou-kun = <code>0</code></li><li><code>2000</code> Fou-kun = <code>50</code>(calculated by gold(4) Fou-kun)</li></ul></li><li>Command Codes - it&#39;s easy to find out code pinned on which servants in code detail page</li></ol><h3 id="toolbar" tabindex="-1">Toolbar <a class="header-anchor" href="#toolbar" aria-label="Permalink to &quot;Toolbar&quot;">​</a></h3><p>From left to right.</p><ul><li>ℹ️: show item cost for current plan</li><li><code>Enhance</code> button: enter <strong>Enhance Mode</strong>, and now: <ul><li>current value cannot be changed</li><li>change target value for this enhancement(it&#39;s not servant plan value)</li><li>click <strong>OK</strong> will execute enhancement and take out items</li></ul></li><li><code>Lv.x</code> dropdown <ul><li>quickly setting all 3 <strong>active skills</strong> to the same value. Meanwhile, ascension will be set to 4. Append skills are not changed.</li><li>in <strong>normal mode</strong>, it changes current value. In <strong>Enhance Mode</strong>, it changes target value.</li></ul></li><li><strong>CURRENT 310⬆️</strong>: Change all current value to 4-10/10/10 (ascension 4+active skill 10/10/10)</li><li><strong>TARGET 999↗️</strong>: Change target value to 4-9/9/9</li><li><strong>TARGET 310↗️</strong>: Change target value to 4-10/10/10</li></ul><h3 id="others" tabindex="-1">Others <a class="header-anchor" href="#others" aria-label="Permalink to &quot;Others&quot;">​</a></h3><ul><li>Display order of tabs can be customized in <a href="./app_setting#display-settings">Display Settings-Tabs Sorting</a></li><li>Click ATK/HP besides avatar to show the ATK/HP growth curve</li><li>Skill: list active/class passive/append skills effects</li><li>Noble Phantasm: list NP effects</li><li>Info <ul><li>game base data: illustrator, voice actor, traits, alignment, hits, NP rate, bond points and so on.</li><li>profiles</li><li>bond CE</li><li>valentine CE</li><li>related cards: shown in CE/Command code <blockquote><p>click <code>中|日|EN</code> to switch the display language for card profile text</p></blockquote></li></ul></li><li>Illustrations</li><li>Sprites: ascension icons and battle models</li><li>Summons: those with current servant picked up, class pickup or guarantee summon <blockquote><p>A ⭐ is shown for Single PickUp</p></blockquote></li><li>Voices <ul><li>▶️ download on play</li><li>some voice file may be not uploaded, especially for new servants</li><li>some voice formats may be not supported by platform</li><li>click ⬇️ to download voice file to local</li><li>click <code>中|日|EN</code> to switch the display language for voice text <ul><li>English text may be mismatched</li></ul></li></ul></li><li>Quests: interludes and rank-up quests</li></ul>',57),r=[s];function c(p,d,u,h,g,m){return a(),t("div",null,r)}const b=e(o,[["render",c]]);export{f as __pageData,b as default};
