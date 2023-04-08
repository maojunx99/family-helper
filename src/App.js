import './App.css';
import { useEffect, useState } from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { listLists } from './graphql/queries';
import 'semantic-ui-css/semantic.min.css';
import MainHeader from './components/MainHeader';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  const [list, setList] = useState([]);
  async function fetchList() {
    const { data } = await API.graphql(graphqlOperation(listLists));
    setList(data.listLists.items);
    console.log(data);
  }
  useEffect(() => {
    fetchList()
  }, []);
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <MainHeader/>
          <ul>
            {list.map(item => 
            <li key={item.id}>{item.title}</li>)}
          </ul>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
