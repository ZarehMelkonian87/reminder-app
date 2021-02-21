<html><head></head><body ><div style="margin-top: 30px; margin-bottom: 100px;"><div><h1>Getting started</h1><p><b>Reminder</b> is using create-react-app using. </p><ul><li>Install NodeJs  </li><li>Download the project from gitHube</li><li>Open Terminal</li><li>Go to your file project</li><li>Run in terminal <pre style="color: black; background: rgb(245, 242, 240) none repeat scroll 0% 0%; text-shadow: white 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; -moz-tab-size: 4; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto;"><code style="color: black; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; text-shadow: white 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; -moz-tab-size: 4; hyphens: none;">npm install</code></pre></li><li>Then run <pre style="color: black; background: rgb(245, 242, 240) none repeat scroll 0% 0%; text-shadow: white 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; -moz-tab-size: 4; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto;"><code style="color: black; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; text-shadow: white 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; -moz-tab-size: 4; hyphens: none;">npm start</code></pre></li><li>Navigate to <code>http://localhost:3000</code></li></ul>
  <h1>Dependencies</h1>
  <ul>
    <li>Material-ui</li>
    <li>react-redux</li>
    <li>react-router-dom</li>
    <li>uuid</li>
    <li>axios</li>
</ul>
  <h1>Files and Folders structure</h1>

  <pre style="color: black; background: rgb(245, 242, 240) none repeat scroll 0% 0%; text-shadow: white 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; -moz-tab-size: 4; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto;"><code style="color: black; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; text-shadow: white 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; -moz-tab-size: 4; hyphens: none;">Reminder<span class="token" style="color: rgb(153, 153, 153);">.</span>

<span class="token property-access">├──</span> <span class="token" style="color: rgb(153, 0, 85);">README.md</span>
├── package.json
├── package-lock.json
└── src
    ├── index.js
    ├── Auth.js
    ├── App.js
    ├── routes.js
    ├── assets
    │&nbsp;&nbsp; ├── css
    │&nbsp;&nbsp; │&nbsp;&nbsp; └── reminder.css
    │&nbsp;&nbsp; ├── img
    │&nbsp;&nbsp; │&nbsp;&nbsp; └── svgs
    │&nbsp;&nbsp; └── jss
    │&nbsp;&nbsp;     │&nbsp;&nbsp; ├── components
    │&nbsp;&nbsp;     │&nbsp;&nbsp; ├── layouts
    │&nbsp;&nbsp;     │&nbsp;&nbsp; └── pages
    ├── components
    │&nbsp;&nbsp; ├── Categories
    │&nbsp;&nbsp; │&nbsp;&nbsp; ├── Categories.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; └── CategoryCard.jsx
    │&nbsp;&nbsp; ├── common
    │&nbsp;&nbsp; │&nbsp;&nbsp; ├── CustomIcons
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── CategoryIcon.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── CircleIconChecked.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── CircleIconUnchecked.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── DeleteIcon.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── DynamicSvgIcon.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── HeaderBG.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── HomeIcon.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── PersonalIcon.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; └── ProfileIcon.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; ├── date
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; └── DateAndTimePicker.jsx
    │&nbsp;&nbsp; ├── Header
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── Header.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; └── ListHeader.jsx
    │&nbsp;&nbsp; ├── Navbar
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── Navbar.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; └── NavbarLinkButton.jsx
    │&nbsp;&nbsp; ├── Tasks
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── TaskCreateDialog.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── TaskItem.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── taskNotification.jsx
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; └── Tasks.jsx
    │&nbsp;&nbsp; ├── TodayReminder
    │&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; └── TodayReminder.jsx
    ├── data  // This is a temporary folder. I am keeping json data for temporary use. after connection to the api I delete this folder.
    ├── layouts
    │&nbsp;&nbsp; ├── GuestLayout.jsx
    │&nbsp;&nbsp; └── UserLayout.jsx
    ├── pages
    │&nbsp;&nbsp; ├── CategoryPage.jsx
    │&nbsp;&nbsp; ├── ProfilePage.jsx
    │&nbsp;&nbsp; └── TaskPage.jsx
    └── slices
     &nbsp;&nbsp; ├── actions
     &nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── jwt.js
     &nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; └── task.js
     &nbsp;&nbsp; └── TaskPage.jsx
     &nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├── jwt.js
     &nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; └── task.js
     &nbsp;&nbsp; └── index.js

    </code></pre>
    
<h1>Components</h1>

<h2>DynamicSvgIcon</h2>

<p>You will find this component in src/components/common/CustomIcons/DynamicSvgIcon.jsx In this component there is just the structure of the Svg Icon. The icons can be found in same folder. I have done this to have an easy acsess to all icons via props. </p>

<pre style="color: black; background: rgb(245, 242, 240); text-shadow: white 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto;"><code style="color: black; background: none; text-shadow: white 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none;">
    <span class="token maybe-class-name" style="color: rgb(7, 80, 0);" ><span style="color: rgb(153, 153, 153);"><</span>DynamicSvgIcon</span>
          </span><span class="token property-access" style="color: rgb(2, 123, 204);" > width={screenWidth.windowWidth}</span> 
          </span><span class="token property-access" style="color: rgb(2, 123, 204);"> height='318'</span> 
          </span><span class="token property-access" style="color: rgb(2, 123, 204);"> viewBox={`0 0 320 318`}</span> 
          </span><span class="token property-access" style="color: rgb(2, 123, 204);"> viewBox={`0 0 320 318`}</span> 
    <span class="token maybe-class-name" style="color: rgb(153, 153, 153);">/></span><span class="token" style="color: rgb(153, 153, 153);"></code></pre>

  <h2>Props</h2><p></p>
  <ul>
    <li>icon</li>
    <li>All SVG style parameteres such us "fill", "fontSize"</li>
</ul>
