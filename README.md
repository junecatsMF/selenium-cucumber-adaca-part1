# Selenium WebDriver Test Suite with Cucumber

This project is a test automation suite built using **Node.js**, **Selenium WebDriver**, and the **Cucumber** framework. The suite automates the following actions for a sample web application:

- User Login
- Adding a To-Do Item
- Deleting a To-Do Item (not implemented due to time constraints)

Additionally, it implements:
- Page Object Model (POM) design pattern
- Explicit waits for dynamic elements
- Screenshot capture on test failure (not implemented due to time constraints)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (Recommended version: 16.x or higher)
- **Google Chrome** (or any browser supported by Selenium WebDriver)
- **Chromedriver** (automatically installed by `npm`)

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/selenium-cucumber-test.git
cd selenium-cucumber-test

npx cucumber-js
