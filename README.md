# Premium School Teacher Portfolio Website

A complete, responsive, multi-page professional portfolio website designed specifically for school teachers, secondary educators, and STEM specialists. Built using modern HTML5, Tailwind CSS, and vanilla JavaScript without external build steps or dependencies.

---

## 📁 Project Structure

```text
teacher-portfolio/
├── index.html                # Page 1: Home page (Hero, quick stats, bio, subjects, philosophy)
├── about.html                # Page 2: About Me (Biography, career timeline, education, values)
├── teaching.html             # Page 3: Teaching & Subjects (Courses, weekly plan, FAQ accordion)
├── resources.html            # Page 4: Learning Resources (Search, category filters, PDF downloads)
├── achievements.html         # Page 5: Achievements & Experience (Certificates, gallery, awards)
├── contact.html              # Page 6: Contact (Details, office hours, mailto form, map)
├── robots.txt                # Search engine crawler instructions
├── sitemap.xml               # XML sitemap for SEO indexation
├── README.md                 # Project documentation and setup guide
├── js/
│   ├── config.js             # Centralized configuration file for personal information
│   └── main.js               # Interactive features (menu, search, filter, modal, form)
└── assets/
    ├── documents/            # Downloadable sample documents (CV, worksheets, study guides)
    │   ├── algebra-worksheet.pdf
    │   ├── chemistry-study-guide.pdf
    │   ├── math-revision-quiz.pdf
    │   ├── physics-lesson-plan.pdf
    │   ├── sample-cv.pdf
    │   └── teaching-certificate-sample.pdf
    └── images/               # Visual assets & SVG graphics
        ├── cert-masters-degree.svg
        ├── cert-national-board.svg
        ├── cert-stem-excellence.svg
        ├── classroom.svg
        ├── lab.svg
        ├── og-image.svg
        ├── resource-thumb-1.svg
        ├── resource-thumb-2.svg
        ├── resource-thumb-3.svg
        ├── resource-thumb-4.svg
        └── teacher-portrait.svg
```

---

## 🎨 Visual Design System & Palette

- **Primary Accent:** Deep Navy Blue (`#0f172a`, `#1e293b`)
- **Secondary Accent:** Royal Blue (`#2563eb`, `#1e40af`)
- **Backgrounds:** Clean White (`#ffffff`) and Soft Cool Light Gray (`#f8fafc`)
- **Text:** Slate / Charcoal (`#334155`, `#0f172a`)
- **Typography:** System Sans-Serif Stack with responsive font scale and clear heading hierarchy.

---

## ⚙️ Content Personalization Guide

To personalize the website for a specific teacher:

1. Open `js/config.js` in any code editor.
2. Update the fields in `TEACHER_CONFIG`:
   - `fullName`: Full legal name and honorifics (e.g. `"Sarah Jenkins, M.Ed."`)
   - `title`: Professional role (e.g. `"Senior High School Mathematics & Physics Educator"`)
   - `school` & `cityState`: Current workplace and city/state
   - `contact`: Email address, phone number, WhatsApp number, office hours
   - `social`: LinkedIn, Twitter/X, and YouTube profile URLs
   - `siteDomain`: Real published web domain URL (updates canonical links & sitemap)
3. To replace downloadable documents (CV, worksheets):
   - Copy your real PDF files into `assets/documents/`.
   - Update the file paths in `js/config.js` or directly inside the `href` attributes of `resources.html` and `index.html`.
4. To replace images (portrait, certificate previews):
   - Place your JPEG/PNG/SVG images into `assets/images/`.
   - Update `assets.portrait` in `js/config.js`.

---

## 🚀 Running Locally & Static Hosting

### 1. Local Preview
Since there are no build steps, you can open `index.html` directly in any browser:
- Double-click `index.html`, OR
- Serve locally using Python:
  ```bash
  python3 -m http.server 8080
  ```
  Then open `http://localhost:8080` in your web browser.

### 2. Static Hosting Options
This website can be hosted for free on static web platforms:
- **GitHub Pages:** Push the codebase to a repository and enable GitHub Pages in repository settings.
- **Netlify:** Drag and drop the project folder onto Netlify Drop, or connect your Git repository.
- **Vercel:** Import your repository to deploy instantly as a static site.
- **Cloudflare Pages:** Connect repository and select "Static Site" with no build command.

---

## 🌐 Custom Domain & HTTPS Setup

1. **Purchase Domain:** Register your desired domain (e.g., `www.teachername.com`) with a domain registrar (e.g., Namecheap, Cloudflare Registrar, Google Domains).
2. **Configure DNS Records:**
   - For Apex Domain (`teachername.com`): Set an `A` record pointing to your host's IP address.
   - For Subdomain/WWW (`www.teachername.com`): Set a `CNAME` record pointing to your host's target URL.
3. **Enable SSL/HTTPS:** Modern hosting providers (Netlify, Vercel, Cloudflare, GitHub Pages) provision free Let's Encrypt SSL certificates automatically within minutes of pointing DNS records.
4. **Update `sitemap.xml` & `robots.txt`:** Replace `https://sarahjenkins-teacher.example.com` with your actual domain URL.

---

## 📧 Contact Form & Mailto Fallback Explanation

Because this is a static website running without a server backend:
- The contact form utilizes client-side JavaScript validation (`js/main.js`).
- When submitted, it constructs a formatted `mailto:` link populated with the sender's name, email, subject, and message.
- Opening `mailto:` automatically opens the visitor's default mail application (e.g., Outlook, Apple Mail, Gmail) to deliver the email directly to the teacher.
- An on-screen status banner clearly explains this process to the user and offers a direct link if their mail application does not open automatically.

*If an automated serverless endpoint (e.g., Formspree, EmailJS, Web3Forms) is desired in the future, simply replace the `submit` event listener in `js/main.js` with an `async fetch()` API call to your form service endpoint.*

---

## ✅ Launch Checklist

Before making your site public:
- [ ] Updated personal details, school name, and contact info in `js/config.js`.
- [ ] Replaced sample PDF documents in `assets/documents/` with real educational files.
- [ ] Updated `assets/images/teacher-portrait.svg` with an official professional portrait.
- [ ] Updated canonical URLs and domain in `robots.txt` and `sitemap.xml`.
- [ ] Tested all navigation links, resource filters, and contact forms on mobile and desktop devices.
