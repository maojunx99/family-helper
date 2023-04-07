import './App.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsConfig);

function App() {
  return (
    <Authenticator>
      {({ signout, user }) => (
        <div className="App">
          <h1>Welcome to Maojun's Website</h1>
          <button onClick={signout}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
