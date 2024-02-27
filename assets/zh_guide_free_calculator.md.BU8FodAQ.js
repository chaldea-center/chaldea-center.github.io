import{_ as e,c as r,o as t,a5 as o}from"./chunks/framework.-i2sbza6.js";const _=JSON.parse('{"title":"Free 本规划","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/free_calculator.md","filePath":"zh/guide/free_calculator.md","lastUpdated":1677782591000}'),a={name:"zh/guide/free_calculator.md"},s=o('<h1 id="free-本规划" tabindex="-1">Free 本规划 <a class="header-anchor" href="#free-本规划" aria-label="Permalink to &quot;Free 本规划&quot;">​</a></h1><p>功能: 根据素材需求计算最优刷本组合，或设置素材权重对比 Free 本效率。<strong>羁绊</strong>和**御主经验(EXP)**亦可作为特殊素材一起规划。</p><p>可以直接进入此页面设置素材需求，也可以从<a href="./items">素材列表页</a>统计好素材缺口后点击<strong>规划 Free 本</strong>跳转到本页。</p><h2 id="素材需求设置" tabindex="-1">素材需求设置 <a class="header-anchor" href="#素材需求设置" aria-label="Permalink to &quot;素材需求设置&quot;">​</a></h2><p>通过➕按钮添加素材，其中羁绊和御主 EXP 归在第一类<strong>特殊素材</strong>中。每日任务的部分关卡可能缺少羁绊值和御主 EXP 数据。</p><p>点击素材图标进入素材详情，点击素材名称切换当前素材。</p><p><strong>需求</strong>页默认设置素材的需求量，点击<strong>规划/效率</strong>下拉按钮切换为输入素材权重， 每种素材默认权重<code>w</code>为 1.0。</p><p><code>关卡效率x = Σx_i*w_i = 每个素材掉率*权重的加和</code></p><p>以夏洛特为例，AP20，平均每场掉落 0.65 个虚影之尘和 0.519 个英雄之证， 虚影之尘权重为 2.0，英雄之证权重为 1.0，则此关卡的综合效率为 <code>0.65×2.0+0.519×1.0=1.819</code></p><p>每个素材的掉率可归一化为每 20AP 的掉率，或实际每场 Free 本掉率，在设置中设置。</p><h3 id="设置项" tabindex="-1">设置项 <a class="header-anchor" href="#设置项" aria-label="Permalink to &quot;设置项&quot;">​</a></h3><p>点击⚙️设置按钮弹出设置选项。非默认值时设置按钮呈红色。</p><ol><li><strong>掉落数据默认使用新数据</strong>（日服 6 周年之后），可切换为旧数据(2021.08.02 效率剧场最后更新)，其中旧数据不包含 2.6 及之后的新素材。</li><li><strong>最低 AP</strong>: 过滤 AP 低于一定值的关卡，一般也就用于过滤凶骨等开服素材在前几章的高 AP 效率低 AP 的精污关卡。</li><li><strong>Free 进度</strong>: 可根据当前所在服务器自定义主线 Free 进度，未实装的主线 Free 将不列入规划。</li><li><strong>规划目标</strong>: AP 最少、计数(刷本次数)最少为优化目标</li><li><strong>效率类型</strong>(仅用于效率对比): 归一化 20AP 效率、每场效率</li><li><strong>黑名单</strong>: 规划时可自定义将某些关卡加入黑名单，如最优解里某关卡太难 3T。</li></ol><h2 id="规划结果页" tabindex="-1">规划结果页 <a class="header-anchor" href="#规划结果页" aria-label="Permalink to &quot;规划结果页&quot;">​</a></h2><p>设置好素材需求与条件后，点击求解，即可在规划页查看计算的最优解组合。</p><p>点击关卡可展开 Free 本配置，可选择将当前 Free 本加入黑名单或移出黑名单，重新求解。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>为了防止整数线性规划的 NP 难问题产生的不必要的计算时间成本，此处求解采用非整数线性规划求解，求解结果实际为实数，因此显示的结果存在 ±1 的误差属正常现象。</p><p>此处整数解和实数解不会存在太大差别，而且精确的整数解于本问题中本身意义就不大，掉率这东西不像周常规划目标数一样准确。</p></div><p>无效素材即无法找到任何一个符合要求的 Free 本的素材将显示在顶部。如指定主线进度下新素材、使用旧数据时 2.6 新素材等。</p><h2 id="效率结果页" tabindex="-1">效率结果页 <a class="header-anchor" href="#效率结果页" aria-label="Permalink to &quot;效率结果页&quot;">​</a></h2><p>对所有包含所需素材的关卡进行综合效率排序。仅计算所需素材的权重，未列入的素材不计算其权重。</p><p><strong>排序:</strong> 按上述每 20AP/每场素材效率、羁绊效率(绊/AP)</p><p><strong>筛选:</strong></p><ul><li>点击下方素材按钮，筛选有掉落该素材的 Free 本</li><li>➕按钮: 切换 <strong>&quot;且&quot;</strong> (默认)、<strong>&quot;或&quot;</strong> 模式，用于同时选中多个素材时的筛选 <ul><li>当为 <strong>&quot;且&quot;</strong> 模式时，筛选同时掉落选中的素材的 Free 本</li><li>当为 <strong>&quot;或&quot;</strong> 模式时，筛选掉落任一素材的 Free 本</li></ul></li></ul><h2 id="free-本一览" tabindex="-1">Free 本一览 <a class="header-anchor" href="#free-本一览" aria-label="Permalink to &quot;Free 本一览&quot;">​</a></h2><p>用于浏览所有主线关卡的 Free 本。</p>',25),l=[s];function n(i,c,p,d,h,g){return t(),r("div",null,l)}const P=e(a,[["render",n]]);export{_ as __pageData,P as default};
