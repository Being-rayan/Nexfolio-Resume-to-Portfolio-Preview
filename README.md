# Nexfolio

Nexfolio is an AI-powered resume-to-portfolio generator that converts a resume PDF into a responsive personal portfolio website with automatic content generation, live preview, and downloadable export support.

**Live Demo:** https://nexfolio-resume-live.vercel.app/  
**Source Code:** Private  
**Preview Repository:** Documentation and project showcase only

---

# Project Overview

Nexfolio was built to simplify portfolio creation for students, developers, and professionals who want a fast and automated way to build a modern portfolio website from their resume.

Instead of manually designing sections and writing portfolio content, users can upload a resume PDF and let the system automatically extract, organize, and generate a structured portfolio website.

The platform focuses on the complete pipeline:

- Resume upload
- Resume parsing
- AI-based understanding
- Structured data generation
- Portfolio rendering
- Preview workflow
- ZIP export

---

# How It Works

1. Upload a resume PDF
2. Backend extracts resume text
3. AI analyzes the resume content
4. Structured portfolio data is generated
5. Portfolio sections are rendered automatically
6. User previews the generated website
7. Final portfolio can be exported as downloadable files

---

# Portfolio Generation Pipeline

```text
Resume PDF
   ↓
PDF Text Extraction
   ↓
AI-Based Resume Understanding
   ↓
Structured Portfolio Data
   ↓
Generated Portfolio Website
   ↓
Preview + ZIP Export
```

---

# Key Features

- AI-assisted resume understanding
- Automatic portfolio content generation
- Resume-based project extraction
- Skills and experience parsing
- Portfolio preview system
- Downloadable ZIP export
- Multiple portfolio template support
- Full-stack architecture
- Backend resume processing pipeline
- Dynamic frontend rendering
- Structured section generation
- Responsive portfolio layouts

---

# Core Portfolio Sections

Generated portfolios can include:

- Hero section
- About section
- Skills
- Projects
- Experience
- Education
- Certifications
- Contact information
- Social links

---

# Tech Stack

## Frontend

- HTML
- CSS
- JavaScript

## Backend

- Python
- FastAPI
- Google Gemini API
- PyMuPDF
- pdfplumber
- MongoDB

## Deployment

- Vercel
- REST API architecture
- Environment-based API configuration

---

# Backend Workflow

```text
User uploads resume
        |
PDF text extraction begins
        |
Resume content cleaned and processed
        |
Gemini AI analyzes structured information
        |
Fallback parsing handles missing sections
        |
Portfolio JSON structure generated
        |
Frontend renders portfolio dynamically
        |
Preview and export become available
```

---

# AI Processing Features

The AI pipeline is designed to identify and structure:

- Personal information
- Skills
- Technical stacks
- Experience details
- Education records
- Project descriptions
- Contact information
- Social profiles

The system also includes rule-based fallback parsing to improve reliability when resumes contain inconsistent formatting.

---

# Validation And Testing

Verified checks include:

- Resume upload validation
- PDF extraction testing
- AI response handling
- Structured data generation
- Portfolio rendering validation
- Dynamic section generation
- ZIP export testing
- Frontend preview testing
- API endpoint validation
- Multi-resume compatibility testing

---

# Current Limitations

- Resume parsing quality depends on resume formatting
- AI-generated outputs may occasionally require manual refinement
- Highly complex resume layouts may affect extraction accuracy
- Public repository does not include production source code

This repository exists only for project showcase, workflow explanation, and recruiter preview.

---

# What This Project Demonstrates

- Full-stack application development
- AI-assisted document understanding
- Resume parsing pipelines
- Dynamic website generation
- Backend API architecture
- Structured data transformation
- Frontend rendering systems
- File upload and export workflows
- AI + web integration workflows

---

# Author

Rayan Qamar
