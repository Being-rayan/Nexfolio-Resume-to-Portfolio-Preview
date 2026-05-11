# Nexfolio : AI Resume-to-Portfolio Generator

Nexfolio is an AI-assisted web application that converts a user's resume PDF into a ready-to-use personal portfolio website. It extracts key resume details, generates a structured portfolio layout, provides a live preview, and allows users to export the generated website files for deployment.

## Live Demo

Generated portfolio demo:  
https://nexfolio-generated.vercel.app/

## Project Overview

Nexfolio was built to simplify the process of creating a personal portfolio website from a resume. Instead of manually writing HTML, CSS, and JavaScript, users can upload their resume and the system automatically extracts relevant information such as name, role, skills, projects, experience, education, and contact details.

The extracted data is then used to generate a clean and responsive portfolio website that can be previewed, exported, and deployed on platforms such as GitHub Pages or Vercel.

The project has been tested with multiple resume inputs, including sample CVs from friends, and successfully generated deployable portfolio websites.

## Key Features

- Resume PDF upload
- AI-based resume information extraction
- Automatic portfolio website generation
- Live portfolio preview
- Exportable HTML, CSS, and JavaScript files
- ZIP export support
- Responsive portfolio design
- Deployable on GitHub Pages or Vercel
- Tested with multiple resume formats

## Tech Stack

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Python
- FastAPI
- MongoDB
- PyMuPDF
- Google Gemini API

### Tools and Platforms

- VS Code
- Git
- GitHub
- Vercel

## How It Works

1. The user uploads a resume PDF.
2. The backend extracts text from the resume using PyMuPDF.
3. The extracted content is processed using the Google Gemini API.
4. Important resume details are structured into usable portfolio sections.
5. The system generates portfolio website files.
6. The user can preview the portfolio and export the generated files.
7. The exported portfolio can be deployed using GitHub Pages or Vercel.

## AI Disclaimer

Nexfolio uses AI to extract, organize, and structure resume information. Since AI-generated output may not always be fully accurate, users should review and edit the generated portfolio before using it for professional purposes or public deployment.

## Repository Status

This repository currently serves as a project showcase. It includes generated portfolio previews, screenshots, and proof-of-work material demonstrating the functionality of the system.

The complete source code, backend implementation, environment configuration, and deployment setup are currently being organized and may be published in future updates.

## Current Limitations

- AI-generated content may require manual review.
- Some backend and deployment configuration files are not included in this public repository yet.
- Output quality may vary depending on the structure and clarity of the uploaded resume.
- Additional templates and customization options can be added in future versions.

## Future Improvements

- Add multiple portfolio templates
- Improve resume parsing accuracy
- Add user authentication
- Add dashboard for managing generated portfolios
- Support direct one-click deployment
- Add manual editing options before export
- Improve UI customization for colors, fonts, and layouts

## Author

**Rayan Qamar**

## Purpose

This project was created for portfolio building, learning, and practical full-stack AI-based web application development. It demonstrates the use of AI, backend APIs, resume parsing, file generation, and deployment-ready portfolio creation.
