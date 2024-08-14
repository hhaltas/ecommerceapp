# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


{\
  "scripts": {\
    "json-server": "npx json-server --watch db.json --port 3001", \
    "start": "concurrently \"yarn json-server\" \"react-scripts start\"" \
  },\
  "dependencies": {\
    "concurrently": "^7.0.0" \
  }\
}\

-- json-server:\

This script starts a local JSON server using npx.\
The server watches the db.json file located in the ./src/constant/ directory, meaning any changes to this file will automatically update the server.\
The server will run on port 3001.\

-- start:\

This script uses concurrently to run multiple commands at the same time.\
It first starts the json-server you defined above and then starts your React development server using react-scripts start.\
This allows you to run both the mock backend (JSON server) and your React app simultaneously with a single command.\
This setup is useful for development environments where you need a mock API server and a frontend server running together.\

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# ecommerceapp

TEst
# ecommercapp
