import{_ as e,c as a,o as i,a5 as t}from"./chunks/framework.-i2sbza6.js";const m=JSON.parse('{"title":"Search and Filters","description":"","frontmatter":{},"headers":[],"relativePath":"guide/search_filter.md","filePath":"guide/search_filter.md","lastUpdated":1677782591000}'),l={name:"guide/search_filter.md"},s=t('<h1 id="search-and-filters" tabindex="-1">Search and Filters <a class="header-anchor" href="#search-and-filters" aria-label="Permalink to &quot;Search and Filters&quot;">​</a></h1><p>The app provides search and filter functions at most pages.</p><h2 id="search" tabindex="-1">Search <a class="header-anchor" href="#search" aria-label="Permalink to &quot;Search&quot;">​</a></h2><p>Click 🔍 search button to open search input.</p><h3 id="custom-search-scope" tabindex="-1">Custom Search Scope <a class="header-anchor" href="#custom-search-scope" aria-label="Permalink to &quot;Custom Search Scope&quot;">​</a></h3><p>If there is a ⚙️ setting button on the trailing of search input, you can custom the search scope. Take the search setting of servant list page as example:</p><ul><li>Basic info: servant id, name, illustrator, CV and so on</li><li>Active skill: name and effects</li><li>Class Passive skill: name and effects</li><li>Append Skill: name and effects</li><li>Noble Phantasm: name, upper name(ruby) and effects</li></ul><p>Not include unimportant info like profiles.</p><p>If there is no such a setting button, only search the critical info.</p><h3 id="chinese-pinyin-and-japanese-romaji" tabindex="-1">Chinese Pinyin and Japanese Romaji <a class="header-anchor" href="#chinese-pinyin-and-japanese-romaji" aria-label="Permalink to &quot;Chinese Pinyin and Japanese Romaji&quot;">​</a></h3><ul><li>for multi-language fields, all languages are included in search</li><li>only partial critical fields support Chinese Pinyin and Romaji</li></ul><h3 id="multi-keywords" tabindex="-1">Multi-keywords <a class="header-anchor" href="#multi-keywords" aria-label="Permalink to &quot;Multi-keywords&quot;">​</a></h3><p>Use <strong>space</strong> to split keywords.</p><ul><li>By default, use <strong><em>AND</em></strong> to combine keywords <ul><li><code>A B C</code> = <code>A +B +C</code> = A AND B and C</li></ul></li><li><code>+B</code> means MUST contain <code>B</code><ul><li><code>A +B</code> = <code>+A +B</code> = A AND B</li></ul></li><li><code>-C</code> means MUST NOT contain <code>C</code><ul><li><code>A -C</code> = must A AND NOT C</li><li><code>A +B -C</code> = MUST A AND B and NOT C</li></ul></li></ul><h2 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-label="Permalink to &quot;Filters&quot;">​</a></h2><p>Click filter button to teh filter dialog. Take servant as example. List/Grid, sorting: display settings</p><ul><li>Costume: only show servants with costumes</li><li>Basic profile filter: class, rarity, NP color and type, alignment, traits, gender and so on.</li><li>User&#39;s plan status: dup servants, plan status, skill status and priority</li><li>Buff/effect filter: see <a href="./buff_filter">Buff Filter</a></li></ul><h3 id="combined-filter" tabindex="-1">Combined Filter <a class="header-anchor" href="#combined-filter" aria-label="Permalink to &quot;Combined Filter&quot;">​</a></h3><ul><li>Inside one filter group, use the <strong><em>OR</em></strong> to combine <ul><li>you can check <strong>☑️Match ALL</strong> button to change it</li></ul></li><li>All unselected=all selected</li><li>Different groups use <strong>*AND</strong> to combine</li><li><strong>☑️Invert Selection</strong></li></ul><p>You can choose whether to reset filter every time entering the list page.</p>',20),o=[s];function n(r,c,d,h,u,p){return i(),a("div",null,o)}const g=e(l,[["render",n]]);export{m as __pageData,g as default};
