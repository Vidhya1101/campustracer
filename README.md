# CampusTracer – Lost and Found Management System

🚀 **Live Demo:** https://vidhya1101.github.io/campustracer/

## Project Overview

CampusTracer is a web-based Lost and Found Management System designed for college campuses. It provides a centralized platform where students can report lost items, register found items, browse available listings, and submit claims for matching items.

The project aims to make the lost-and-found process more organized, accessible, and convenient by providing a single platform instead of relying on informal communication or notice boards.

## Key Features

- **Lost Item Reporting:** Users can submit details about items they have lost.
- **Found Item Reporting:** Users can report items they have found on campus.
- **Browse Items:** Users can view available lost and found records.
- **Claim System:** Users can submit claims for items they believe belong to them.
- **Claim Verification:** Item details are checked to improve the reliability of claims.
- **Centralized Management:** Lost and found information is maintained in one platform.

## How It Works

1. A user reports a lost or found item through the web interface.
2. The item information is sent to the backend through REST APIs.
3. Users can browse the available records and look for matching items.
4. A user can submit a claim for a matching item.
5. The claim is checked using the available item details before the process is completed.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- REST API
- JSON-based data storage
- Git & GitHub
- Docker
- Jenkins
- Selenium WebDriver

## Project Structure

The application contains separate pages for the main functions of the system, including the dashboard, lost item reporting, found item reporting, browsing records, and claiming an item.

## DevOps and Testing

The project was also used to practice DevOps concepts. The application was containerized using Docker, and a Jenkins pipeline was used to automate stages such as pulling the source code, running tests, building the Docker image, and running the application in a container. Selenium WebDriver was used for application testing.

## My Contribution

I worked on the web interface and application flow, implemented the Lost, Found, Browse, and Claim modules, connected the frontend with the Node.js and Express.js backend, and worked on testing, Docker containerization, and Jenkins CI/CD integration.

## Links

- **Live Demo:** https://vidhya1101.github.io/campustracer/
- **Source Code:** https://github.com/Vidhya1101/campustracer

## Future Scope

- User login and profile management
- Improved item search and filtering
- Image-based item matching
- Email or notification support
- Better claim verification
- Database integration for scalable deployment
