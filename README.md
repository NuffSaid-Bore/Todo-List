# Todo List Application - Full Stack

This project is a Todo List application built with React for the frontend and Node.js for the backend. It uses various libraries and frameworks including Vite for the frontend build tool, Express for the backend server, and MongoDB for data storage. This app allows users to manage their tasks by marking them as complete or incomplete.

## Tech Stack:
- Frontend: React, Vite, React Router, React Icons, Tailwind CSS, Axios
- Backend: Node.js, Express, Mongoose, CORS
- Database: MongoDB (using Mongoose for ODM)
- Development Tools: Nodemon, VS Code

## Preview Site
[Click to Preview](http://localhost:5173/)

## Getting Started
### Prerequisites
Before running this project, ensure that you have the following installed:
- Node.js: If you don't have Node.js installed on your machine, you can download and install it from the official site: https://nodejs.org/en
- Git: You will need Git to clone the repository. You can download it from: https://git-scm.com/downloads

### Clone the Project
To get started, clone this repository to your local machine:
1. Open a terminal/command prompt.
2. Navigate to the directory where you want to store the project.
3. Run the following command to clone the repository:

```bash
git clone https://github.com/NuffSaid-Bore/Todo-List.git
```
4. Change into the project directory:

```bash
cd Todo-List
```
### Install Dependencies

## DataBase
Create a MongoDB Atlas database. Create the following in the root folder server
Register your mngodb atlas account on: [MongoDB Atlas](https://account.mongodb.com/account/register)
If you have an account on mongodb atlas login and copy your connection string and provide the following details
[Login here](https://account.mongodb.com/account/login)
````bash
.env
````
inside the folder provide the following details: 
````bash
MONGO_USER=
MONGO_PASS=
MONGO_DB_NAME=
````
MONGO_USER= is the username
MONGO_PASS=auto generated password or the password you created when adding your databas after you login
MONGO_DB_NAME=schema name/  tablet name where your data will be saved


## Backend (Node.js & Express)
1. Navigate to the backend directory:
```bash
cd server
```

2. Install the backend dependencies:
```bash
npm install
```
3. If you don't have Node.js installed, you can install it from the official [Node.js website](https://nodejs.org/en). If you're using nvm (Node Version Manager), you can use the following command:
```bash
nvm install node
```
4. Start the backend server using Nodemon (for auto-reloading during development):
```bash
npm start
```
The backend server will start on http://localhost:5000. If you want to change the port, you can update the server.js file

## Frontend (React with Vite)
1. Navigate to the frontend directory:

```bash
cd Frontend
```
2. Install the frontend dependencies:

```bash
npm install
```
3. To start the React development server (with Vite):
```bash
npm run dev
```
The frontend will be available at [http://localhost:5173](http://localhost:5173/)

## Running the Application Locally
Once you have both the frontend and backend running locally, you can open the React app in your browser at http://localhost:5173, and it should automatically interact with the Node.js backend running at http://localhost:5000.

### Folder Structure
The project is structured as follows:

```bash
.
├── server/                   # Node.js backend
│   ├── models/                # Mongoose models
│   ├── routes/                # API routes
│   ├── index.js              # Main backend server file
├── Frontend/                  # React frontend
│   ├── src/
│   │   ├── components/        # React components (e.g., NoteCard, NoteModal)
│   │   ├── App.jsx            # Main App component
│   │   ├── main.jsx           # Main entry point
│   │   └── index.css          # Global styles (TailwindCSS)
├── .gitignore
├── package.json               # Backend dependencies and scripts
└── README.md                  # Project documentation

```

## Future Improvements

Here are some improvements you can consider for future versions of the application:
- User based task/notes. Add notes after you have Registered and authenticated to login
- User Authentication: Add user authentication (e.g., JWT) to allow users to have their own task lists
- Task Priority: Implement a priority system where tasks can be marked as high, medium, or low priority.
- Due Dates: Add due dates for tasks and sort them by deadline.
- Task Categories: Allow users to categorize their tasks into different lists or projects.
- Notifications: Implement notifications (email or browser push) to remind users of pending tasks.
- Styling Improvements: Enhance UI/UX, including animations, better responsiveness, and improved visual design.

## Fork the Project
Feel free to fork this repository, submit issues, or create pull requests. I welcome contributions, and your feedback will be valuable for improving this project.

To fork this project
1. Go to the GitHub repository.
2. Click the Fork button on the top-right of the page.
3. Clone your forked repository to your local machine:
```bash
git clone https://github.com/NuffSaid-Bore/Todo-List.git
```

## License
This project is licensed under the MIT License - see the <a href="https://opensource.org/licenses/MIT">LICENSE</a> file for details.

## Contact
If you have any questions or suggestions, feel free to open an issue or contact me directly on [WhatsApp](https://wa.link/asimu8), [Email Me](mailto:borekamohelo@gmail.com)
 or call 0748632478 

Thank you for using this Todo List application! 🎉
