import{_ as a,c as e,o as t,a5 as l}from"./chunks/framework.-i2sbza6.js";const b=JSON.parse('{"title":"Battle Simulation","description":"","frontmatter":{},"headers":[],"relativePath":"laplace/battle.md","filePath":"laplace/battle.md","lastUpdated":1691155607000}'),i={name:"laplace/battle.md"},o=l('<h1 id="battle-simulation" tabindex="-1">Battle Simulation <a class="header-anchor" href="#battle-simulation" aria-label="Permalink to &quot;Battle Simulation&quot;">​</a></h1><p><img src="https://data-cn.chaldea.center/public/battle_en.png" alt="Battle Simulation" loading="lazy"></p><figcaption style="text-align:center;">Battle Simulation</figcaption><p>The simulation mostly behaves the same as <a href="https://www.fgo-teamup.com" target="_blank" rel="noreferrer">FGO Teamup</a>, and the backend behaves similarly to <a href="https://github.com/SharpnelXu/FGOSimulator" target="_blank" rel="noreferrer">FGO Simulator</a> but with Atlas DB data structure.</p><h3 id="normal-operations" tabindex="-1">Normal Operations <a class="header-anchor" href="#normal-operations" aria-label="Permalink to &quot;Normal Operations&quot;">​</a></h3><ul><li>Click icons of enemy / ally to view current buff status</li><li>Field Traits: Will include all traits including those granted by servants</li><li>Records: Show all actions done by users including Instant Death and Damage parameters <ul><li>Click Tt to switch between verbose mode and normal mode</li><li>Click Camera icon to save actions to PNG</li><li>Click skill activator or DMG/NP/Star in records to check parameters and buff status at that point</li></ul></li></ul><h3 id="button-bars" tabindex="-1">Button Bars <a class="header-anchor" href="#button-bars" aria-label="Permalink to &quot;Button Bars&quot;">​</a></h3><ul><li>Mystic Code Skills</li><li>Probability Threshold: Same as the Probability Threshold in the Team Setup page</li><li>Critical Star: Shows the expected star count. Due to randomness in star generation in the actual game, the value may vary</li><li><code>&gt;&gt;</code> Skip current wave: Clear all enemies in the current wave and goes to the next. Does not trigger death effects</li><li>Undo: undo the last user action</li><li>Manual Random Value Mode (Dice Icon): All damage and probability checks will be determined by user</li><li>Attack: Select command cards</li></ul><h3 id="select-command-cards" tabindex="-1">Select Command Cards <a class="header-anchor" href="#select-command-cards" aria-label="Permalink to &quot;Select Command Cards&quot;">​</a></h3><ul><li>Clicking on NP icon when NP is below 100 will prompt to select if force NP to 100</li><li>Clicking command card one time means normal attack (blue frame), clicking twice on the same card for critical attack (red frame)</li><li>Random: Random value for damage calculation with range 0.900-1.099</li><li>After 7th: <ul><li>After 7th: Allows Mighty Chain, gain 20 stars on Quick Chain, and grant first card bonus even if first card cannot be performed (stunned)</li><li>Before 7th: Gain 10 stars on Quick Chain, and does not grant first card bonus if first card cannot be performed (stunned)</li></ul></li></ul><h3 id="top-right-popup-menu" tabindex="-1">Top Right Popup Menu <a class="header-anchor" href="#top-right-popup-menu" aria-label="Permalink to &quot;Top Right Popup Menu&quot;">​</a></h3><ul><li>Quest: Go to detail page of current quest</li><li>Battle Log: Check more detailed logs</li><li>Command Spell: Release Noble Phantasm (Single target 100% NP battery)</li><li>Command Spell: Repair Spirit Origin (Single target 100% HP Recovery)</li><li>Reset Skill CD: Reset all skill CD of selected target to 0</li><li>Activate Custom Skill: Includes Instant Death etc. Can be configured to be passive, active, and assign activator for Challenge quest simulation. For more information, check <a href="./faq#custom-skills">Custom Skills</a></li></ul>',12),n=[o];function r(s,c,d,u,m,h){return t(),e("div",null,n)}const f=a(i,[["render",r]]);export{b as __pageData,f as default};
