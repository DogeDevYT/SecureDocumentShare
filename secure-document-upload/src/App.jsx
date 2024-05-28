import React, {useState} from 'react';

import HomePage from './components/HomePage';
import AuthComponent from './components/AuthComponent';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <AuthComponent setUser={setUser}/>
      {user && <HomePage clientName="Jim" caseNumber={2} user={user}/>}
    </div>
  );
};

export default App;
