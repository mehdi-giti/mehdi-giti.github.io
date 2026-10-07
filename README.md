# Mehdi Gitizadeh personal website

A responsive, single-page personal website in the Amber workstation style. Built with plain HTML, CSS, and JavaScript. No build process, framework, backend, or paid service is required.

## Open the website

Open `index.html` in a web browser. Keep the files and `assets` folder together.

## Publish with GitHub Pages

1. Create a GitHub repository, or open the repository you want to use.
2. Upload the contents of this folder to the root of the repository. `index.html` must be directly in the root, alongside `styles.css`, `script.js`, and `assets/`.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your branch (usually `main`) and the **/ (root)** folder, then save.
6. Once deployment finishes, GitHub displays your website address in the Pages settings.

Relative asset paths support both a main user site and a project site such as `username.github.io/repository/`. No domain or GitHub username has been assumed. The `.nojekyll` file is included for static publishing; make sure it is uploaded if your file browser hides dotfiles.

Official instructions:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Edit the content

- `index.html`: introduction, services, biography, career timeline, interests, contact links, and page metadata.
- `styles.css`: colors, layouts, typography, and responsive rules. Main colors are defined at the top.
- `script.js`: mobile navigation, active-section highlighting, and the footer year.
- `assets/mehdi-portrait.png`: introduction portrait.
- `assets/mehdi-outdoors.png`: About section photo.
- `assets/fonts/fonts.css`: Google Fonts import and the offline headline fallback.

Fonts: VT323 for the main headline; IBM Plex Mono for navigation and small labels; Space Grotesk for body text and section headings. The custom fonts load from Google Fonts and require internet access. If Google Fonts is unavailable, the page uses system fonts and remains functional. Images and all other assets are local.

The site uses the supplied CV and the requested consultation services. The CV itself is not downloadable from the page. Phone and email from the CV have not been published; the provided LinkedIn and Telegram profiles are the contact routes.

## Interaction and accessibility

- Responsive mobile navigation with Escape-to-close behavior.
- All content and contact links work without JavaScript.
- Skip link, semantic headings, visible keyboard focus, descriptive image text.
- Reduced-motion preference respected; no flashing, boot delays, or autoplay.
- No analytics, cookies, forms, backend calls, or API keys.

## Validation

Checked JavaScript syntax, local asset references, section anchors, unique IDs, image text alternatives, and the exact contact URLs. Mobile menu behavior is also checked in a DOM simulation. Live browser rendering was unavailable in the build environment; open `index.html` to review the final appearance in your browser before publishing.
