# Portfolio

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

- Node.js (v12.22.12)
- npm (6.14.16)

## Run this application on localhost:5575

### Pull and run the application image from my Hub.

Download Docker [here](https://www.docker.com/) and start it up to ensure the Docker daemon is running.\

```
docker pull abozynski/portfolio_bozynski_alina
```

```
docker run --name <desired_container_name> -it -p 5575:80 --rm abozynski/portfolio_bozynski_alina
```

Now open localhost:5575 in a browser!

### Run with npm

Clone this repository and change into it's root directory.\
If you are running this on Windows, there may be workarounds needed to clone (below). To avoid this, run in WSL (Ubuntu).\
If not all files cloned (caused by files containing the ':' character), execute the following:

1. Set git flag with `git config core.protectNTFS false`.
   Git is susceptible to NTFS-related attacks when:

- Running Git in the WSL
- Working directly on Windows drives
- Running Git on macOS and working on smb://-mounted network shares

3. Run `git reset`
4. Run `git checkout`
5. Run `git restore ./`

Ensure all project dependencies are installed with `npm install`.\

If you are running on Windows, you will need to update the start script in the package.json file to `set PORT=5575 && craco start`.

Run the app on Localhost with: `npm run start`.\
If you receive the error, 'Error: error:0308010C:digital envelope routines::unsupported' after the above command:

- Unix: run `export NODE_OPTIONS=--openssl-legacy-provider`
- Windows command prompt: `set NODE_OPTIONS=--openssl-legacy-provider`
- Powershell: `$env:NODE_OPTIONS = "--openssl-legacy-provider"`
  If the above doesn't work, try to use the current LTS version from [Node.js](https://nodejs.org/en/download/releases).

### Run from your own Docker container

Clone repository with directions above and navigate to the root directory.\
Download Docker [here](https://www.docker.com/) and start it up to ensure the Docker daemon is running.\
To create a Docker image, run: `docker build -t <desired_image_name> .`\
Then run the image as a container: `docker run --name <desired_container_name> -it -p 5575:80 --rm <image_name>`\
Now open localhost:5575 in a browser!

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:5575](http://localhost:5575) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Runs Prettier check and ESLint.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# portfolio_bozynski_alina
