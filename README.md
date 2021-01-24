# Frontend for the Tiresias App

This repository will serve as the [frontend for the main app](https://github.com/jtreeves/predictions-frontend). Unlike the API, when it displays the information it receives from the usser, it will be in a visually appealing way, as opposed to in a raw format.

**Contents**

1. [File Structure](https://github.com/jtreeves/predictions-frontend#file-structure)
2. [Use Stories](https://github.com/jtreeves/predictions-frontend#user-stories)
3. [Designs](https://github.com/jtreeves/predictions-frontend#designs)

## File Structure

```
predictions-frontend
|-- public
|   |-- index.html
|   |-- manifest.json
|   |-- robots.txt
|   |-- favicon.ico
|-- src
|   |-- components
|   |   |-- pages
|   |   |   |-- welcome
|   |   |   |   |-- Home.js
|   |   |   |   |-- About.js
|   |   |   |-- profile
|   |   |   |   |-- Home.js
|   |   |   |   |-- Analyze.js
|   |   |-- elements
|   |   |   |-- main
|   |   |   |   |-- Navigation.js
|   |   |   |   |-- Form.js
|   |   |   |   |-- Header.js
|   |   |   |   |-- Footer.js
|   |   |   |-- welcome
|   |   |   |   |-- Introduction.js
|   |   |   |   |-- Signup.js
|   |   |   |   |-- Login.js
|   |   |   |-- profile
|   |   |   |   |-- List.js
|   |   |   |   |-- View.js
|   |   |   |   |-- Add.js
|   |   |   |   |-- Update.js
|   |   |   |   |-- Delete.js
|   |   |-- middleware
|   |   |   |   |-- Authentication.js
|   |   |   |   |-- Private.js
|   |   |   |   |-- Regression.js
|   |   |   |   |-- SpreadsheetInput.js
|   |   |   |   |-- GraphOutput.js
|   |-- App.js
|   |-- App.css
|   |-- App.test.js
|   |-- setupTests.js
|   |-- reportWebVitals.js
|   |-- index.js
|-- package.json
|-- package-lock.json
|-- README.md
|-- .gitignore
```

## User Stories

- As a potential user, I want to know about its appeal, so I have a reason to sign up.
- As a potential user, I want to see specific examples of how it can be used by customers, so I know how I can implement it.
- As a potential user, I want to be able to sign up with an email and password, so I can create an account
- As a user, I want to be able to log in to my account with my email and password, so I can use the site.
- As a user, I want to be able to submit data sets, so I can get them analyzed.
- As a user, I want to be able to submit my data sets in a CSV format, so the process only involves one step and uses a format in which I probably already have the data.
- As a user, I want to be able to see regression models that fit the data I submitted, so I can better understand my original data.
- As a user, I want to get the analysis in an easily digestible format, so I can understand it without needing a background in math.
- As a user, I want to be able to access previously uploaded data sets and their analyses, so I do not need to repeatedly re-upload the same data every time I want to analyze it.
- As a user, I want to be able to favorite specific models of my data, so I do not need to look at unideal formats.
- As a user, I want to be able to add notes to my models and view them at a future date, so I can use the site to keep track of my thoughts on my initial data and the site's analysis.
- As a user, I want to know that no one else can access my data, so I know it is secure.

## Designs

**Home Page**
![Home Page](/public/images/design1.png)

**About**
![About](/public/images/design2.png)

**Sign Up**
![Sign Up](/public/images/design3.png)

**Log In**
![Log In](/public/images/design4.png)

**Blank Profile**
![Blank Profile](/public/images/design5.png)

**Filled Profile**
![Filled Profile](/public/images/design6.png)

**Add New Data Set**
![Add New Data Set](/public/images/design7.png)

**View Data Set**
![View Data Set](/public/images/design8.png)