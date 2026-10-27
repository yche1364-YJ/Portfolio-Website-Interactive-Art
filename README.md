# Home made ideas

An illustrated, interactive portfolio by **Ying-Ju Chen**. A Taiwanese street house becomes a home for design experiments, selected projects, and unexpected ideas.

[Visit the website](https://yche1364-yj.github.io/Portfolio-Website-Interactive-Art/)

## Explore the house

- **Idea playground:** click or tap inside the room to drop a colorful shape onto a yellow seesaw. The balance responds to the shapes’ size and position. The girl briefly looks toward the heavier side, then returns to her laptop.
- **Room light switch:** switch the lights off to clear the shapes and darken the room. Switch them back on to continue.
- **Project windows:** open **01 / Future studio** or **02 / Album design** without leaving the homepage. Each project includes an introduction, final artwork, and selected process highlights.
- **Desktop:** drag a project window by its title bar. Neighboring illustrated buildings frame the main house.
- **Phones and tablets:** projects stack vertically and open in near-fullscreen, scrollable windows. Closing a window restores the homepage scroll position.
- **Hallucination Game:** opens in a separate browser tab with **Research and Game Proposal**, **Game**, and **Refine** sections. The research section presents the Lost in Light proposal, interaction flowchart, storyboard references, and build plan. The playable game and refinement sections remain placeholders.
- **About:** opens [chenyingju.com](https://chenyingju.com).
- **Contact:** opens your email application with a message addressed to **chenyingju.tw@gmail.com**.

## Selected projects

### 01 / Future studio

A fictional shared workspace for adults and children in 2035. AI-generated spatial references informed an editable Blender scene, with a branching canopy, rounded seating, and spaces for work, play, and rest.

### 02 / Album design

An expressive album-cover study inspired by Hsien Ching’s music. Bedroom imagery, layered typography, halftone texture, and contrasting colors bring playful energy to an everyday scene.

## Run locally

This is a static HTML, CSS, and JavaScript website. No dependency installation or build step is required.

From the folder containing `index.html`, run:

```sh
python3 -m http.server 8773
```

Then open **http://localhost:8773/** in a modern browser. If your working copy contains a `dist` folder, run the command inside `dist` to preview the upload version.

## Files

```text
index.html          Homepage and project-dialog structure
style.css           Illustration layout, responsive styles, and window appearance
play.js             Canvas character, shapes, seesaw physics, and lighting behavior
projects.js         Project copy, final artwork, and process content
windows.js          Project rendering, dragging, focus, and scroll management
hallucination-game.html  Separate Hallucination Game project page
game-page.css       Responsive project-page layout
game-page.js        Accessible three-tab navigation
assets/             Illustrations, favicon, architectural slices, and process images
future-studio.html  Fallback project link
album-design.html   Fallback project link
.nojekyll           Publishes the static files without Jekyll processing
```

The full project content is displayed in the homepage’s project windows. The standalone fallback HTML files are not the main case studies.

## Update project content

Edit `projects.js`. Each project contains a number, title, subtitle, introduction, hero image, and a `process` list. Add media to `assets/` and use paths relative to `index.html`.

Supported process blocks:

```js
// Text
{ type: 'text', heading: '01 / Exploration', text: 'Describe the process.' }

// Image
{
  type: 'image',
  src: 'assets/process/example.webp',
  alt: 'A meaningful description of the image',
  caption: 'An optional caption'
}

// Paired images; these stack on smaller screens
{ type: 'gallery', items: [ /* image blocks */ ] }

// Video; add your own video file before using this block
{
  type: 'video',
  src: 'assets/process/example.mp4',
  poster: 'assets/process/poster.webp',
  caption: 'An optional caption'
}
```

Only selected highlights from the project process documents are included. No video files are currently supplied.

## Publish with GitHub Pages

1. Upload **all contents** of the upload folder into the repository root. Keep `index.html`, the CSS and JavaScript files, and the complete `assets` folder together.
2. If using the supplied ZIP, extract it first. Upload its contents, not the ZIP file or an extra enclosing folder.
3. In the repository’s **Settings → Pages**, select the branch containing the files and the **root** folder as the publishing source.
4. Wait for the Pages deployment to finish, then visit the website.

Use relative asset paths such as `assets/example.png`, rather than `/assets/example.png`, because this website is hosted under a repository subpath.

When updating, replace the matching files together. The stylesheet and scripts use version query strings in `index.html`; update those values after changes so visitors receive the latest assets. If an old layout remains visible, try a hard refresh with **⌘ Shift R** on macOS or **Ctrl Shift R** on Windows/Linux.

For the original working folder, `dist/` is the upload-ready copy. Keep it synchronized with the files you edit before uploading.

## Keyboard and accessibility

- Use **Tab** to reach links, the room, the light switch, and dialog controls.
- In the room, use **Left/Right Arrow** to choose a drop position and **Space/Enter** to drop a shape. **R** toggles the lights.
- Close project windows with **Escape** or the **X** button.
- Use **Top ↑** at the end of a project to return to the top of its content.
- Project windows use native modal dialogs, restore focus on close, and pause videos when closed.
- Window animation and smooth scrolling respect reduced-motion preferences.

## Credits

Design and portfolio work by **Ying-Ju Chen**. The project studies use AI-assisted image exploration alongside manual design, illustration, and Blender or Illustrator workflows.

© 2026 Ying-Ju Chen. All rights reserved. Artwork and project materials are not licensed for reuse unless otherwise stated.
