# COLORS LAMP Web Application

## Description

COLORS is a simple web application built using the LAMP stack. Users can log in, add colors associated with their account, and search for previously stored colors.

The application was originally developed as part of the COP4331 COLORS Lab and is organized here using Git version control practices.

## Technologies Used

- Linux
- Apache
- MySQL
- PHP
- HTML
- CSS
- JavaScript
- Git / GitHub
- Postman for API testing

## Project Structure

```text
colors-lamp/
├── LAMPAPI/
|   ├── AddColor.php
|   ├── Login.php
|   ├── SearchColors.php
|   └── config.example.php
├── css/
|   └── styles.css
├── images/
|   └── background.png
├── js/
|   ├── code.js
|   └── md5.js
├── index.html
├── color.html
├── .gitignore
├── README.md
└── LICENSE.md
```

## Setup
1. Set up a Linux server with Apache, MySQL, and PHP.

2. Create the required MySQL database and tables for users and colors.

3. Copy the example configuration file:

    ```text
    LAMPAPI/config.example.php
    ```

    and rename the copy to:

    ```text
    LAMPAPI/config.php
    ```

4. Enter the appropriate database credentials in `config.php`.

5. Place the application files in the Apache web root.

6. Ensure Apache and MySQL are running.

The local `config.php` file is excluded from version control so database credentials are not committed to the repository.

## Running the Application

Open the application through the address or domain name of the web server in a browser.

From the login page, a valid user can:

- Log in
- Add new colors
- Search for stored colors
- Log out

## API Endpoints

The backend provides the following PHP endpoints:

### Login.php

Authenticates a user using their login credentials.

### AddColor.php

Adds a new color associated with a specific user.

### SearchColors.php

Searches for colors associated with a specific user.

## Configuration

Database credentials are stored locally in:

```text
LAMPAPI/config.php
```

This file is ignored by Git and should not be committed.

An example configuration file is provided at:

```text
LAMPAPI/config.example.php
```

Users should copy the example file and replace the placeholder values with their own database configuration.

## Assumptions and Limitations

- A properly configured LAMP environment is required.
- The MySQL database and required tables must already exist.
- Database configurations must be configured locally before the API can connect to MySQL.
- The application requires JavaScript to be enabled in the browser.
- This application was developed as an instructional project and is not intended for production use.

## Security

Sensitive database credentials are not stored in the repository. The `config.php` file containing local database credentials is excluded through `.gitignore`.