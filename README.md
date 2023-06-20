# Lyrical-GraphQL
Starter project from a GraphQL course on Udemy.com


# MongoDB Atlas Setup and Configuration
Last year, mLab, which is the service we use for our remote Mongo database, was acquired by MongoDB. Since around the beginning of February, they have closed off all new mLab registrations. Instead, our students will be redirected to MongoDB's Atlas product, which has a free tier similar to mLab, albeit more powerful.

All current mLab users, as of this writing, can still use and create servers with their account. The old mLab instructions in the next lecture will be left up to support these users.

Here are the steps to setup a MongoDB account and Atlas cluster to use with this project:



New MongoDB Atlas Users
1.  Go to:  https://www.mongodb.com/cloud/atlas and click the "Start Free" button (or Sign In if you already have account)

2.  Create your MongoDB user account.

3.  After creating your account, you will be prompted to create your first cluster. Leave all free tier options selected - AWS, North America: N. Virginia etc.

4. Scroll down on the page to name your app.

5. Click the "Create Cluster" button.

6. Continue to the All Users instructions below.



Existing MongoDB Atlas Users:
1. Log in to your MongoDB Atlas account

2. In your Cluster Dashboard click the "Context" filter and then click "New Project"


Important - Many students are trying to create a new cluster from inside their current project instead of an entirely new project, and are getting prompted to add a credit card to pay. Make sure you are creating a new project.

3. Name your project and click Next.

4. Your admin user should be automatically added to the project. Click Create Project.

5.  You will now be prompted to create your first cluster. Leave all free tier options selected - AWS, North America: N. Virginia etc.

4. Scroll down on the page to name your app.

5. Click the "Create Cluster" button.

6. Continue to the All Users instructions below.



All Users
1.  The cluster will take a few minutes or more to generate, eventually you will see a page like this:




2. Click the "CONNECT" button in your cluster's sandbox.  You will get the following screen asking you to whitelist your address.

Click the "Add your Current IP Address" button.





3. You will then need to create a database user and password - I would highly suggest using the "Autogenerate" button to avoid escaping issues. After doing so, click the "Create MongoDB User" button.





4.  After creating the user, you should get this success dialog box. Click the "Choose a connection method" button.





5. Select "Connect Your Application"





6. Copy the address under "Connection String Only"

You will need to replace <PASSWORD> with the database user's actual password created earlier when you paste into your application.


Click the "Close" button and head back over to your application.



7. In the server.js file replace Stephen's connection string with your new connection string like in the example below:

Remember to replace <PASSWORD> with the user's actual password.

const MONGO_URI = 'mongodb+srv://yourusername:yourpassword@cluster0-88ro9.mongodb.net/test?retryWrites=true&w=majority';
 
 


8. Next, we need to deal with a version conflict MongoDB Atlas will have with Mongoose by installing a new version. In your terminal run npm uninstall mongoose and then npm install mongoose. This will install the newest available version (currently v5.6.4).

9. Restart your server by running 'npm run dev' and you should see "Connected to MongoLab instance" along with a potential deprecation warning (which shouldn't effect the functionality of your app).

You should now be able to successfully load your app at localhost:4000 and localhost:4000/graphql


## About libraries:
<b>ApolloClient:</b> This module is responsible for interacting with GraphQL APIs. It provides the functionality to make requests to a GraphQL server and handles the responses. It acts as a client-side library that enables you to perform GraphQL operations like queries, mutations, and subscriptions.

<b>ApolloProvider:</b> This module is provided by the react-apollo library. It is a higher-order component (HOC) that integrates Apollo Client with React applications. It wraps your React component tree and makes the Apollo Client instance available to all components in the tree. This allows you to access and use the Apollo Client functionality, such as executing GraphQL queries, mutations, and managing local state, within your React components.

By importing and using ApolloClient and ApolloProvider together, you can leverage the capabilities of Apollo Client to interact with a GraphQL API and utilize the Apollo Provider to provide the client instance to your React components.
Here's an example of how you might use these imports in a React application:

<pre>
import React from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  // Configure the Apollo Client with necessary options
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Your React component tree */}
    </ApolloProvider>
  );
}

export default App;
</pre>

## GraphQL + React Strategy

<ul>
<li>Identify data required</li>
<li>Write query in GraphQL (for practice) and in component file</li>
<li>Bond query + component</li>
<li>Access data!</li>
</ul>
<br>


## Lyrical GraphQL Setup
<img src="client/images/flowdiagram.png" height="500px;" width="500px;" style="margin-left:20%;margin-top:5%"/>