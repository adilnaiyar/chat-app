import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed/chatFeed.components';
import LoginForm from './components/LoginForm/loginForm.components';
import './App.css';

const projectID = '5dbdc2f9-e25d-45fd-946b-7de95aebd465';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

 
export default App;