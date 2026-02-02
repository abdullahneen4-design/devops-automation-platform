This project was built as a practical DevOps showcase aligned with real job requirements, focusing on automation, CI/CD, and containerized services.


# DevOps Automation Platform

A small-scale DevOps automation platform designed to simulate real production
environments in a simplified and practical way.  
This project demonstrates CI/CD pipelines, containerized services, workflow
automation, and Linux-based troubleshooting.

---

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** SQLite
- **Automation:** n8n (Workflow Automation)
- **Containers:** Docker, Docker Compose
- **CI/CD:** GitHub Actions
- **Testing:** Jest, Supertest
- **Environment:** Linux (Dockerized)

---

## Architecture Overview

The platform consists of two main services running in Docker containers:

### 1. Backend API
- Provides a REST API for managing tasks
- Supports creating, listing, and running tasks
- Manages task lifecycle and status updates
- Exposes a health check endpoint

### 2. n8n Automation Service
- Receives incoming webhook requests
- Validates and processes request data
- Triggers backend API actions
- Returns structured responses to clients

All services communicate over a shared Docker network using internal service
names, simulating a production-like microservices setup.

---

## Key Features

- RESTful API for task management
- Workflow automation using n8n
- Dockerized services with internal networking
- Automated CI pipeline with GitHub Actions
- Automated API tests
- Health check endpoint for service monitoring
- Real-world troubleshooting scenarios (ports, containers, pipelines)

---

## CI/CD Pipeline

The project includes a GitHub Actions CI pipeline that runs on every push:

- Checkout repository
- Set up Node.js environment
- Install dependencies
- Run automated tests
- Build Docker image

This ensures consistent builds, early error detection, and reliable automation.

---

## Running the Project Locally

Start all services using Docker Compose:

```bash
docker compose up --build

## Services

### Backend API
http://localhost:3000

### n8n UI
http://localhost:5678


## API Endpoints

### Health Check
GET /health

Response:
{
  "status": "ok"
}

### Create Task
POST /tasks

Body:
{
  "name": "Example task"
}
 ```
---
## Automation Workflow (n8n)

- Webhook receives task creation request
- Input validation is performed
- Backend API is called to create and run the task
- A structured JSON response is returned

This mirrors real-world automation and integration workflows.

---
## Testing

Run backend tests locally:

cd backend  
npm test

Tests cover:
- Task creation
- Task execution lifecycle

---
## Why This Project?

This project was built to demonstrate hands-on DevOps skills, including:
- CI/CD pipeline implementation
- Docker and container orchestration
- Automation workflows
- Linux-based service management and troubleshooting
- Practical debugging of real infrastructure issues
---

## Alignment with Job Requirements

- CI/CD Pipelines: Implemented using GitHub Actions
- Docker & Linux: Services run in Docker containers in a Linux environment
- Automation: n8n workflows simulate production automation scenarios
- IT Support & Troubleshooting: Includes debugging of APIs, containers, networking, and CI pipelines
- Monitoring & Stability: Health check endpoint and structured logging

---
## Status

This project is complete and suitable for use as a professional portfolio
demonstrating DevOps and automation skills.

