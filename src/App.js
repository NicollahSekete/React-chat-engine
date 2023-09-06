import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="db2cbcbf-c56f-4655-85ca-d748f47d2f23
            "
            userName="FirstUser"
            userSecret="password"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;