# VyomGarudBlogs

VyomGarudBlogs is a modern blogging platform dedicated to UAV systems, defence-tech content, and aerospace insights.  
It is built with a **React + Vite** frontend and a **Strapi v5 + MySQL** backend following a clean headless architecture.

---

## 🏗️ Project Architecture

VyomGarudBlogs follows a **Headless CMS Architecture**, where:

- **Strapi v5 (Backend CMS)**  
  Manages all content including posts, authors, categories, tags, and media uploads.  
  Provides REST API endpoints consumed by the frontend.

- **React + Vite Frontend**  
  Fetches content using the Strapi API and renders dynamic pages including:
  - Home page with categories + posts
  - Search results (inline search)
  - Post detail pages
  - Author pages
  - Category pages
  - About page

- **TailwindCSS v4** is used for styling and responsiveness.

### 🔧 Tech Stack Summary

| Layer | Technology |
|-------|------------|
| Frontend | React + Vite + TailwindCSS v4 |
| Backend CMS | Strapi v5 |
| Database | MySQL |
| API Type | REST (via Strapi `/api/*`) |
| Images | Strapi media library (`/uploads/*`) |
| Markdown Rendering | react-markdown + remark-gfm |

---

## 📦 Strapi Collections (Backend Schema)

### 1. **Post**
- title  
- slug (UID)  
- excerpt  
- content (Markdown)  
- coverImage (media)  
- author (many-to-one)  
- categories (many-to-many)  
- tags (many-to-many)

### 2. **Author**
- name  
- bio (Markdown)  
- avatar (media)  
- email  
- posts (one-to-many)

### 3. **Category**
- name  
- slug (UID)  
- description (Markdown)  
- posts (many-to-many)

### 4. **Tag**
- name  
- slug (UID)  
- posts (many-to-many)

---


---

## 🚀 Running the Project Locally

### 📌 Backend Setup (Strapi v5)

1. Go to the VyomStrapi folder:
   ```bash
   cd VyomStrapi
2. npm install
3. Configure environment variables in .env
4. npm run develop

### 📌 Frontend Setup (React + Tailwind)

1. Go to the VyomFrontEnd folder:
   ```bash
   cd VyomFrontEnd
2. npm install
3. Add .env
4. npm run dev

