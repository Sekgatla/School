# Lounge. — Student Academic Support Platform

> **HCIN6222 Human-Computer Interaction — ST10462424 Manubi Thanyani**

Lounge. is a web-based academic support platform designed to connect students with lecturers and classmates. It provides a calm, organised space where students can ask questions, access study materials, watch tutorials, join discussions, collaborate in study groups, and message lecturers — all in one place.

---

## Live Preview

The application runs as a Single-Page Application (SPA) built with vanilla HTML, CSS, and JavaScript, served via [Vite](https://vitejs.dev/).

---

## Features

| Feature | Description |
|---|---|
| **Study Dashboard** | Personalised overview of questions, materials, tutorials and discussions |
| **Q&A Forum** | Post questions by subject; lecturers and students answer |
| **Study Materials** | Upload and download notes, slides, and past exam papers — filterable by subject and type |
| **Video Tutorials** | Watch and download recorded lessons, searchable by subject and course |
| **Discussions** | Start or join topic discussions; full thread with replies |
| **Study Room** | Create or join collaborative study groups with built-in group chat |
| **Direct Messages** | Private messaging between students and lecturers |
| **Profile** | View academic profile, enrolled subjects, and activity stats |
| **Settings** | Dark/Night mode toggle, font size, notification preferences |
| **Activity History** | Full chronological activity log |
| **About Page** | Project background and platform description |

---

## Screenshots

### Landing Page
The landing page introduces the platform, showcases its features, and provides login/register access.

### Dashboard
A personalised overview showing stats (questions, materials, tutorials, discussions), recent activity, quick links, and enrolled subjects. All stat cards are clickable and navigate to the relevant section.

### Q&A Forum
Students post questions by subject. Questions are searchable and filterable. Clicking a question opens the full thread with answers, author roles (Lecturer/Student), and an "Add Answer" button.

### Study Materials
Materials are displayed in a grid with subject and type filters, live search, download buttons, and an Upload Material button with a drag-and-drop modal.

### Video Tutorials
Tutorials are searchable by title and subject. Clicking any tutorial opens a video player modal showing duration, view count, and a download option.

### Discussions
Start a Topic button opens a modal form. Each discussion card is clickable, opening the full thread with replies and a reply compose box at the bottom.

### Study Room
Browse available study groups, join or leave them, and chat with group members in a shared group chat panel. A "Create Group" button is available for starting new groups.

### Direct Messages
Full conversation list on the left; clicking opens a conversation view with message history and a send box. Pressing Enter or clicking Send delivers the message.

### Settings — Night / Dark Mode
Settings page includes a toggle for dark mode (also accessible via the moon icon in the sidebar), font size adjustment, and notification toggles.

### Profile
Displays the user's name, role, email, enrolled subjects, and activity statistics (questions asked, discussions started, study groups joined).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML5, CSS3, JavaScript (ES Modules) |
| Dev Server | [Vite](https://vitejs.dev/) |
| Styling | Custom CSS with CSS Variables (no Tailwind/Bootstrap) |
| Architecture | Single-Page Application (SPA) with client-side routing |
| Package Manager | pnpm (workspace monorepo) |
| Runtime | Node.js 24 |

---

## Project Structure

```
artifacts/
└── lounge/
    ├── index.html              # Entry HTML
    ├── src/
    │   ├── main.js             # Full SPA — all pages, routing, actions
    │   └── styles.css          # Complete design system + dark mode
    ├── package.json
    └── vite.config.ts
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#F0EBE3` | Warm cream page background |
| `--bg-card` | `#FFFFFF` | Card surfaces |
| `--primary` | `#E05428` | Burnt orange — buttons, links, badges |
| `--text` | `#1C1A18` | Primary text |
| `--text-muted` | `#767268` | Secondary text |
| Font | Inter (Google Fonts) | All text |

Dark mode overrides `--bg`, `--bg-card`, `--text`, `--border`, and `--primary-light` via the `body.dark` class.

---

## Running Locally

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm --filter @workspace/lounge run dev
```

The app will be available at `http://localhost:3000`.

---

## Navigation

All navigation is client-side. The sidebar includes:

- Dashboard
- Q&A Forum
- Materials
- Tutorials
- Discussions
- Study Room
- Messages
- Activity History
- Settings
- About Lounge.

---

## Academic Context

- **Module:** HCIN6222 — Human-Computer Interaction
- **Student:** Manubi Thanyani
- **Student Number:** ST10462424
- **Qualification:** Bachelor of Information Technology
- **Institution:** IIE Varsity College
- **Purpose:** Practical Portfolio of Evidence (POE) — Usability Design Project

---

## Usability Principles Applied

This platform was designed with Nielsen's 10 Usability Heuristics in mind:

1. **Visibility of system status** — Toast notifications confirm every action (upload, download, post, join)
2. **Match between system and real world** — Familiar language: "Ask a Question", "Download", "Start Topic"
3. **User control and freedom** — Back links on all detail pages, Cancel on all modals
4. **Consistency and standards** — Uniform card layouts, consistent button styles across all pages
5. **Error prevention** — Required field validation before form submission
6. **Recognition rather than recall** — Subject badges, icons, and labels on every item
7. **Flexibility and efficiency** — Search + filter bars on Materials, Tutorials, Forum, Discussions
8. **Aesthetic and minimalist design** — Warm cream background, clean card UI, no visual clutter
9. **Night mode** — Dark theme for comfortable use during late-night studying
10. **Help and documentation** — About page, role indicators (Lecturer/Student) on all content

---

## License

This project was created for academic purposes. All rights reserved — ST10462424 Manubi Thanyani.
