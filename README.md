# Homemade Ideas — Ying-Ju Chen

Static website: serve `dist/`. No installation or build required.

## Update content
Edit `dist/projects.js`. Add files in `dist/assets/`.
Blocks support:
- `{type:'image', src:'assets/image.png', alt:'description', caption:'caption'}`
- `{type:'video', src:'assets/movie.mp4', poster:'assets/poster.png', caption:'caption'}`
- `{type:'text', heading:'heading', text:'description'}`
No video was supplied; the renderer is ready for one. Full case-study descriptions remain marked as in preparation.

## Behavior
Projects open in-place native modal dialogs: desktop title-bar dragging; near-fullscreen on phone/tablet; Escape/X closes, restores focus and scroll; background inert. One active modal at a time. Media pauses on close.
Room click/tap drops a random shape; object size and position influence board balance. The girl glances toward the heavier side and resumes her laptop. Reset clears shapes; 28-shape cap. Arrow keys select side, Space/Enter drops.
ABOUT opens chenyingju.com. CONTACT opens the user's mail client addressed to chenyingju.tw@gmail.com.
