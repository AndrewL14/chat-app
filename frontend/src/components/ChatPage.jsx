import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
         <PrettyChatWindow
            projectId='c03eaf8b-55a7-4a05-b21d-71465fed31f2'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
        </div>
    )
}

export default ChatPage;