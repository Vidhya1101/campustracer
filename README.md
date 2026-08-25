# 🎓 CampusTracer – Lost and Found Management System

> **A centralized web-based platform designed to organize, track, and resolve lost-and-found items across college campuses.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=github)](https://vidhya1101.github.io/campustracer/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/Vidhya1101/campustracer)

---

## 📌 Project Overview

**CampusTracer** is a web-based Lost and Found Management System designed for college campuses. It provides a centralized platform where students can report lost items, register found items, browse available items, and submit claims for items they believe belong to them.

The main purpose of **CampusTracer** is to make the lost-and-found process more organized, accessible, and convenient instead of depending on WhatsApp groups, notice boards, or word-of-mouth communication.

---

## 🎯 Problem Statement

In a college campus, students frequently lose personal belongings such as ID cards, books, bags, electronic devices, and other items. Finding these items can be difficult because information is often shared through different groups or informal communication channels.

**CampusTracer** solves this problem by providing a single platform where lost and found items can be reported, searched, and claimed.

---

## 💡 Solution

**CampusTracer** provides separate sections for reporting lost and found items. Users can enter the relevant details of an item and browse existing records to find possible matches.

When a user finds an item that may belong to them, they can submit a claim. The application checks the available item details to help verify whether the claim is a possible match.

---

## ✨ Key Features

- **1. Lost Item Reporting** – Users can report an item they have lost by providing details such as the item name, description, location, and other relevant information.
- **2. Found Item Reporting** – Users who find an item can register it on the platform so that the owner can search for it.
- **3. Browse Items** – Users can browse the available lost and found records and look for items that match their belongings.
- **4. Claim System** – Users can submit a claim when they find a possible match for a lost item.
- **5. Claim Verification** – The application checks item details and matching information to improve the reliability of the claim process.
- **6. Centralized Platform** – All lost and found information is maintained in one place, making it easier for students to search and manage records.

---

## 🔄 How the System Works

```text
User
  ↓
CampusTracer Web Interface
  ↓
Report Lost / Report Found
  ↓
Backend REST API
  ↓
Store and Retrieve Item Information
  ↓
Browse Available Items
  ↓
Submit Claim
  ↓
Verify Item Details
## 🛠️ Technologies Used

| Component | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| API | REST API |
| Data Storage | JSON-based data |
| Testing | Selenium WebDriver |
| Containerization | Docker |
| CI/CD | Jenkins |
| Version Control | Git & GitHub |
| Deployment | GitHub Pages |

---

## 📁 Main Modules

- 🏠 **Dashboard** – Provides access to the main features of the application.
- 📌 **Lost Items** – Allows users to report lost belongings.
- 🔎 **Found Items** – Allows users to report items they have found.
- 📋 **Browse** – Displays available lost and found records.
- ✅ **Claim** – Allows users to submit claims for matching items.

---

## 👩‍💻 My Contribution

I worked on the development of the **CampusTracer** web application, including the frontend interface and application flow. I implemented the **Lost, Found, Browse, and Claim** modules and connected the frontend with the **Node.js and Express.js** backend.

I also worked on testing the application and explored DevOps practices by containerizing the application using **Docker** and creating a **Jenkins CI/CD pipeline** for automated testing and application deployment.

---

## 🐳 DevOps Implementation

The project was also used to implement a basic **CI/CD workflow**:

```text
GitHub
   ↓
Jenkins
   ↓
Clone Project
   ↓
Run Tests
   ↓
Build Docker Image
   ↓
Run Docker Container
   ↓
Application

### 🐳 Docker

Docker was used to containerize the application so that it could run consistently in a controlled environment.

### ⚙️ Jenkins

Jenkins was used to automate the project workflow, including pulling the code, running tests, building the Docker image, and running the application.

### 🧪 Selenium

Selenium WebDriver was used to automate testing of important user flows such as reporting and claiming items.

---

## 🚀 Deployment

The frontend application is deployed using **GitHub Pages**.

- 🌐 **Live Application:** https://vidhya1101.github.io/campustracer/
- 📂 **Source Code:** https://github.com/Vidhya1101/campustracer

---

## 🔮 Future Enhancements

- 🔐 User registration and login
- 👤 User profile management
- 🔎 Improved search and filtering
- 🖼️ Image-based item matching
- 📧 Email and notification support
- ✅ Improved claim verification
- 🗄️ Database integration for large-scale usage
- 📱 Mobile application support

---

## 📌 Project Highlights

- ✅ Solves a real-world campus problem.
- ✅ Provides a centralized Lost and Found platform.
- ✅ Uses a Node.js and Express.js backend.
- ✅ Includes REST API communication.
- ✅ Uses Docker for containerization.
- ✅ Uses Jenkins for CI/CD automation.
- ✅ Uses Selenium for automated testing.
- ✅ Deployed using GitHub Pages.

---

## 👩‍💻 Developed By

### **Vidhya Sri**

🎓 **B.Tech – Information Technology**

🏫 **Prasad V. Potluri Siddhartha Institute of Technology (PVPSIT)**

🔗 **GitHub:** https://github.com/Vidhya1101

🌐 **Live Project:** https://vidhya1101.github.io/campustracer/
