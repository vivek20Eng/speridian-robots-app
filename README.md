# Speridian Robots App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Craco](https://img.shields.io/badge/Craco-0077B6?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDBDNS4zNzcgMCAwIDUuMzc3IDAgMTJzNS4zNzcgMTIgMTIgMTIgMTItNS4zNzcgMTItMTJTMTguNjIzIDAgMTIgMHptMi44MDIgMTkuMTU0Yy0xLjc5My44OTYtMy43OTcgMS4zMzYtNS44MDIgMS4zMzZDNi4yMjQgMjAuNDkgMiAxNi4yNjYgMiAxMlM2LjIyNCAzLjUxIDguNSAzLjUxYzEuMDQ5IDAgMi4zOC40MjQgMy4xMDEgMS4wOTQgMS4yNzIgMS4wNjEgMS4yMDIgMi45NjQuNzgyIDYuMDUxbC0xLjk5Ni40OTlhNS43MDYgNS43MDYgMCAwIDAtLjUwNS0xLjgzNWMtLjQ3My0uOTQ2LTEuMDM4LTEuNjk0LTEuMzc4LTEuNjk0LS40MTIgMC0uNzQ2LjY3MS0uNzQ2IDEuNSAwIC44MjkuMzM0IDEuNS43NDYgMS41LjM0IDAgLjkwNS0uNzQ4IDEuMzc4LTEuNjk0LjIxOC0uNDgxLjQzMS0uOTk2LjUyMS0xLjM2OGwyLjEzOS41M2MtLjQ3OCAyLjc2MS0uNTg2IDUuMjgyLjQ1OSA1Ljg4Mi4xODcuMTE0LjMxLjM1OC4zMS41Ni4wMDEuMzUxLS4yODIuNjM5LS42MyAweiIvPjwvc3ZnPg==)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-0077B6?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDBDNS4zNzcgMCAwIDUuMzc3IDAgMTJzNS4zNzcgMTIgMTIgMTIgMTItNS4zNzcgMTItMTJTMTguNjIzIDAgMTIgMHptMi44MDIgMTkuMTU0Yy0xLjc5My44OTYtMy43OTcgMS4zMzYtNS44MDIgMS4zMzZDNi4yMjQgMjAuNDkgMiAxNi4yNjYgMiAxMlM2LjIyNCAzLjUxIDguNSAzLjUxYzEuMDQ5IDAgMi4zOC40MjQgMy4xMDEgMS4wOTQgMS4yNzIgMS4wNjEgMS4yMDIgMi45NjQuNzgyIDYuMDUxbC0xLjk5Ni40OTlhNS43MDYgNS43MDYgMCAwIDAtLjUwNS0xLjgzNWMtLjQ3My0uOTQ2LTEuMDM4LTEuNjk0LTEuMzc4LTEuNjk0LS40MTIgMC0uNzQ2LjY3MS0uNzQ2IDEuNSAwIC44MjkuMzM0IDEuNS43NDYgMS41LjM0IDAgLjkwNS0uNzQ4IDEuMzc4LTEuNjk0LjIxOC0uNDgxLjQzMS0uOTk2LjUyMS0xLjM2OGwyLjEzOS41M2MtLjQ3OCAyLjc2MS0uNTg2IDUuMjgyLjQ1OSA1Ljg4Mi4xODcuMTE0LjMxLjM1OC4zMS41Ni4wMDEuMzUxLS4yODIuNjM5LS42MyAweiIvPjwvc3ZnPg==)
![Recharts](https://img.shields.io/badge/Recharts-0077B6?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDBDNS4zNzcgMCAwIDUuMzc3IDAgMTJzNS4zNzcgMTIgMTIgMTIgMTItNS4zNzcgMTItMTJTMTguNjIzIDAgMTIgMHptMi44MDIgMTkuMTU0Yy0xLjc5My44OTYtMy43OTcgMS4zMzYtNS44MDIgMS4zMzZDNi4yMjQgMjAuNDkgMiAxNi4yNjYgMiAxMlM2LjIyNCAzLjUxIDguNSAzLjUxYzEuMDQ5IDAgMi4zOC40MjQgMy4xMDEgMS4wOTQgMS4yNzIgMS4wNjEgMS4yMDIgMi45NjQuNzgyIDYuMDUxbC0xLjk5Ni40OTlhNS43MDYgNS43MDYgMCAwIDAtLjUwNS0xLjgzNWMtLjQ3My0uOTQ2LTEuMDM4LTEuNjk0LTEuMzc4LTEuNjk0LS40MTIgMC0uNzQ2LjY3MS0uNzQ2IDEuNSAwIC44MjkuMzM0IDEuNS43NDYgMS41LjM0IDAgLjkwNS0uNzQ4IDEuMzc4LTEuNjk0LjIxOC0uNDgxLjQzMS0uOTk2LjUyMS0xLjM2OGwyLjEzOS41M2MtLjQ3OCAyLjc2MS0uNTg2IDUuMjgyLjQ1OSA1Ljg4Mi4xODcuMTE0LjMxLjM1OC4zMS41Ni4wMDEuMzUxLS4yODIuNjM5LS42MyAweiIvPjwvc3ZnPg==)

This is a React-based web application for showcasing a collection of unique robot art pieces. It uses modern web technologies and libraries to create an engaging and visually appealing user experience.

## Key Features

- Responsive and mobile-friendly design
- Smooth transitions and animations
- Interactive heatmap visualization for user retention data
- Customizable robot collections
- Newsletter subscription functionality

## Technologies Used

- **React**: A popular JavaScript library for building user interfaces.
- **SCSS**: A CSS preprocessor that adds features like variables, nesting, and mixins.
- **Craco (Create React App Configuration Override)**: A tool for customizing the Webpack configuration of a Create React App project.
- **React Router**: A library for handling client-side routing in React applications.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Lucide**: A collection of open-source SVG icons.
- **Recharts**: A composable charting library built on React components.

## Getting Started

1. Clone the repository:
2. Navigate to the project directory:
- cd speridian-robots-app
3. Install the dependencies:
- npm install
4. Start the development server:
- npm start
5. Open the application in your browser:
- http://localhost:3000


src/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── RobotCard.js
├── pages/
│   ├── Home.js
│   └── Collections.js
├── styles/
│   ├── _variables.scss
│   └── main.scss
├── App.js
└── index.js