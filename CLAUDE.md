# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a responsive single-page resume/portfolio website built with vanilla HTML, CSS, and JavaScript. It uses Bootstrap 3 for layout and several jQuery plugins for interactive features.

## Development Commands

**Run locally:**
```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

No build process, linting, or automated tests exist. Testing is manual browser verification.

## Architecture

### Data-Driven Content System

The resume content is separated from presentation:

- **`js/resumeBuilder.js`** - Contains all resume data as JavaScript objects and renders them into the DOM. Two top-level objects: `work` (with a `jobs` array) and `education` (with both `schools` and `certificates` arrays). Each object has `display*()` methods that build DOM nodes via jQuery `.append()` and inject `%data%`/`%description%` placeholders into the helper templates. The file calls `work.display()`, `education.displaySchool()`, and `education.displayCertificate()` at the bottom, so it runs immediately on load.
- **`js/helper.js`** - HTML template strings (with `%data%` / `%description%` placeholders) consumed by resumeBuilder.js, plus the section title constants.

To update resume content (work experience, education, certificates), edit the data objects in `resumeBuilder.js`. Note: certificates are part of the `education` object, not separate.

**Script load order matters** (see bottom of `index.html`): `helper.js` must load before `resumeBuilder.js`, since resumeBuilder runs at load time and references the helper template strings. `jquery.js` and `bootstrap.min.js` load first; `jquery.easypiechart.js` loads after.

### Key JavaScript Files

- **`js/custom.js`** - Animations, smooth scrolling, sticky menu initialization
- **`js/stickUp.js`** - Sticky navigation menu implementation
- **`js/jquery.easypiechart.js`** - Animated circular skill charts

### Page Structure

All content is in `index.html` with sections: Banner → About Me → Experience → Technical Skills → Certificates → Education → Portfolio → Contact

Skill percentages for the pie charts are defined as `data-percent` attributes on `.chart.skilBg` spans in `index.html`.

### Backup files

`*.orig` files (`index.html.orig`, `js/resumeBuilder.js.orig`, `css/style.css.orig`) are prior versions kept as backups. They are not loaded by the page — do not edit them as if they were live.
