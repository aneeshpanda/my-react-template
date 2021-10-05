## Template repo for React

Made for ease of access in starting a React app, the config takes around 15-20 mins everytime! This will help avoid that.

## Packages Installed

It has the following packages pre-installed

- All packages with Create-React-App initialised as a PWA
- Axios
- React-Cookie
- React-Router-dom
- Prettier
- Husky
- Lint-Staged
- All plugins for React, Lint, Prettier and Husky.

All Dependencies-

<pre>
"dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.22.0",
    "react": "^17.0.2",
    "react-cookie": "^4.1.1",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0"
}
</pre>
<pre>
"devDependencies": {
    "eslint": "^7.32.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-import": "^2.24.2",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.26.1",
    "eslint-plugin-react-hooks": "^4.2.0",
    "husky": "^7.0.2",
    "lint-staged": "^11.2.0",
    "prettier": "^2.4.1"
}
</pre>

## GitHub Templates

It also includes PR and Issue templates for GitHub.
Refer to the article for guidelines about the GitHub templates I have used.

[Github workflow blog from dev.to](https://dev.to/jorenrui/a-look-into-how-i-manage-my-personal-projects-my-git-github-workflow-1e7h)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
