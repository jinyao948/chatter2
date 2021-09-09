Chatter App


## What is the application about?
For this project, I used the Chat Engine API (https://chatengine.io/) to create a simple chat app with basic functionalities. 

<img width="1440" alt="Screenshot 2021-09-09 at 2 18 22 PM" src="https://user-images.githubusercontent.com/87969338/132633256-e4e62b04-32c3-4c63-b66b-58909016a85e.png">



https://chatter-smoky.vercel.app/ 
You can find the website here! 

## What are the user stories for your application?
The features include being able to send messages, send images, add people to chat, as well as the "is typing..." function. 

## Walk through a piece of code/most difficult part

To be honest, I spent alot of time trying to create a backend on Firebase for my project. However, as there were 2 backend servers for this proj, I had trouble connecting the two together. 

Eventually, I settled on Local Storage. 

<!-- const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Wrong credentials. Pls contact admin to create an account');
    }
  }; -->


## What was your favourite part of your project?

Seeing it work! 

## What would you like to add next?

I would like to add more features. Or potentially, migrate it to a plaform such as GetStream etc. which allows for more features.



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

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

