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

- **`js/resumeBuilder.js`** - Contains all resume data as JavaScript objects (`work`, `education`, certificates) and renders them into the DOM
- **`js/helper.js`** - HTML template strings used by resumeBuilder.js for content injection

To update resume content (work experience, education, certificates), edit the data objects in `resumeBuilder.js`.

### Key JavaScript Files

- **`js/custom.js`** - Animations, smooth scrolling, sticky menu initialization
- **`js/stickUp.js`** - Sticky navigation menu implementation
- **`js/jquery.easypiechart.js`** - Animated circular skill charts

### Page Structure

All content is in `index.html` with sections: Banner → About Me → Experience → Technical Skills → Certificates → Education → Portfolio → Contact

Skill percentages for the pie charts are defined as `data-percent` attributes in `index.html`.
