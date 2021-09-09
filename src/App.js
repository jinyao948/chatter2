import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import NoBackendLogin from './components/NoBackendLogin';
import './App.css';


const projectID = '5c7f61bd-2624-4201-8639-76eb080a5051';

const App = () => {
  if (!localStorage.getItem('username')) return <NoBackendLogin />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      
      onNewMessage={() => new Audio('./Assets/juntos-607.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;