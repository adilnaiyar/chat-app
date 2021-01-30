import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed/chatFeed.components';
import './App.css';

const App = () => {
  return ( 
    <ChatEngine height="100vh" 
      projectID="5dbdc2f9-e25d-45fd-946b-7de95aebd465"
      userName="Adil Naiyar"
      userSecret="adil123"
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
   );
}
 
export default App;