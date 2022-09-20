![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
[![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)](http://forthebadge.com)
[![SASS](https://img.shields.io/badge/Sass-hotpink.svg?style=for-the-badge&logo=sass&logoColor=white)](http://forthebadge.com)


# Sportsee - Sports coaching app
![SportSeeLogo](./src/assets/logo.svg)

SportSee is an application designed to manage and coach physical activity.

## 1. Technologies
- Javascript
- SASS
- React
- Recharts
- AXIOS
- PropTypes

## 2. Author
- [Jean-Charles Maurice](https://github.com/Cadegan/)
- Version : 1.0

## 3. Project

### 3.1 Prerequisites

- [NodeJS (**version 16.17.0**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 3.2 Installing and launching Back-End
- Fork the repository of SportSee back-end:
[` git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git `](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git)
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` or `yarn start` command will allow you to run the micro API.

### 3.3 Installing and launching Front-End
- Fork the repository of SportSee Front-end:
[`git clone  https://github.com/Cadegan/sportsee.git`](https://github.com/Cadegan/sportsee.git)
- Clone it on your computer.
- The `npm install` command will allow you to install the dependencies.
- The `npm start` or `yarn start` commands will allow you to run the app.
- During the launch, the console will indicate that port 3000 is already in use. Confirm by `pressing "y"` that you want to launch the application on another port instead.
```bash
Front-end is now rendered at URL http://localhost:3001
SportSee API only contains data for users with id 12 and 18
```

## 4. Endpoints

### 4.1 Possible endpoints

- `http://localhost:3001/` - Displays the choice between user 12 or 18
- `http://localhost:3001/user/${userId}` - Displays information from a user. This endpoint includes the user information (first name, last name and age), the current day's score chart, key data (calorie, macronutrient, etc.), activity's chart, average sessions's chart and performance's chart.

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### 4.2 Examples of queries

- `http://localhost:3001/user/12` - Retrieves user 12's main information.