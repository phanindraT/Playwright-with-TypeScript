# Playwright + TypeScript Automation Framework

## Overview
This project is a scalable UI automation framework built using **Playwright + TypeScript** following modern automation design principles such as:

- Page Object Model (POM)
- Reusable Flows Layer
- Custom Fixtures
- Test Data Separation
- Environment-Based Configuration
- Strong TypeScript Typing

The framework automates the OrangeHRM application and is designed to be maintainable, scalable, and CI/CD friendly.

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- AJV (JSON Schema Validation)
- dotenv
- GitHub

---

# Framework Architecture

```text
playwright/
│
├── config/                 # Environment configuration
├── fixtures/               # Custom Playwright fixtures
├── flows/                  # Business flow layer
├── pages/                  # Page Object classes
├── pages/components/       # Reusable page components
├── test-data/              # Test data and schemas
├── tests/                  # Test scripts
├── types/                  # TypeScript interfaces/types
├── utils/                  # Utility/helper classes
├── playwright.config.ts    # Playwright configuration
└── package.json
```

---

# Design Patterns Used

## 1. Page Object Model (POM)
Each page contains:
- Locators
- Actions
- Reusable methods

Example:
- LoginPage
- PimPage
- AdminPage

---

## 2. Flows Layer
Complex business workflows are abstracted into flows.

Example:
```ts
PimFlows.ts
```

Benefits:
- Better reusability
- Cleaner test scripts
- Centralized business logic

---

## 3. Custom Fixtures
Custom fixtures are used to initialize:
- Page objects
- Flows
- Shared utilities

Example:
```ts
baseTest.ts
```

Benefits:
- Cleaner imports
- Reduced boilerplate
- Better scalability

---

# Key Features

- Multi-environment support
- Storage state authentication
- Typed test data using interfaces
- Parallel execution
- HTML reporting
- Reusable business flows
- Environment-based execution
- Utility/helper support

---

# Environment Configuration

Supported environments:
- QA
- DEV

Example:
```env
BASE_URL=https://opensource-demo.orangehrmlive.com
USERNAME=Admin
PASSWORD=admin123
```

Run tests using:
```bash
ENV=qa npx playwright test
```

---

# Installation

## Clone Repository

```bash
git clone <your-repository-url>
cd playwright
```

## Install Dependencies

```bash
npm install
```

## Install Playwright Browsers

```bash
npx playwright install
```

---

# Execute Tests

## Run All Tests

```bash
npx playwright test
```

## Run Specific Test

```bash
npx playwright test tests/example.spec.ts
```

## Run in Headed Mode

```bash
npx playwright test --headed
```

## Run on Chromium

```bash
npx playwright test --project=chromium
```

---

# Reporting

Generate and open HTML report:

```bash
npx playwright show-report
```

---

# Authentication Handling

The framework uses Playwright storage state for session reuse.

Authentication setup:
```ts
auth.setup.ts
```

Stored session:
```text
playwright/.auth/user.json
```

Benefits:
- Faster execution
- Avoid repeated login
- Better test performance

---

# TypeScript Usage

The framework uses TypeScript features such as:
- Interfaces
- Strong typing
- Async/Await
- Access modifiers
- Generics
- Promise handling

Example:
```ts
async addEmployee(employee: Employee): Promise<Employee>
```

---

# Sample Flow

```ts
await pimflows.addEmployee(employeeData);
```

Flow internally performs:
- Navigation
- PIM access
- Employee creation
- Save operation

---

# Future Enhancements

- API automation integration
- CI/CD pipeline integration
- Cross-browser execution
- Docker support
- Allure reporting
- Database validation
- Retry strategy improvements

---

# Best Practices Followed

- Separation of concerns
- Reusable components
- Minimal hardcoded values
- Environment isolation
- Typed models/interfaces
- Maintainable framework structure

---

# Interview Explanation (Short Version)

“This framework is developed using Playwright with TypeScript following Page Object Model and Flow-based architecture. I used custom fixtures for dependency injection of page objects and flows. Environment handling is implemented using dotenv. Authentication reuse is achieved using Playwright storage state. The framework is scalable, reusable, and designed for enterprise-level automation.”

---

# Improvements Recommended

## 1. Add npm scripts in package.json
Recommended:
```json
"scripts": {
  "test": "playwright test",
  "test:headed": "playwright test --headed",
  "test:chrome": "playwright test --project=chromium",
  "report": "playwright show-report"
}
```

---

## 2. Remove node_modules before pushing to GitHub
Add:
```bash
node_modules/
playwright-report/
test-results/
```

inside `.gitignore`

---

## 3. Avoid console logs in fixtures
Instead use:
- Playwright hooks
- Reporter logs
- Debug logs only when needed

---

## 4. Add actual test specs
Currently framework structure is strong. Add more:
- UI validations
- CRUD flows
- Negative scenarios
- Data-driven tests

---

# Author

Phani  
Automation QA Engineer  
Playwright | TypeScript | Java | Rest Assured | TestNG
