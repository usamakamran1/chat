import React from 'react'
import { StreamChat } from "stream-chat"
import { 
  Chat, Channel, ChannelList, Window, ChannelHeader, ChannelListMessenger, MessageList, 
  ChannelPreviewMessenger ,TypingIndicator, MessageInput, MessageInputFlat, Thread, MessageSimple
} from "stream-chat-react" 

import 'stream-chat-react/dist/css/index.css';
import "./custom.css"

const chatClient = new StreamChat('qk4nn7rpcn75');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYnJva2VuLXdhdGVyZmFsbC01In0.d1xKTlD_D0G-VsBoDBNbaLjO-2XWNA8rlTm4ru4sMHg';

chatClient.setUser(
  {
       id: 'broken-waterfall-5',
       name: 'Broken waterfall',
       image: 'https://getstream.io/random_svg/?id=broken-waterfall-5&amp;name=Broken+waterfall'
  },
  userToken,
);

class CustomMessageComponent extends React.Component {
  render() {
    const { message } = this.props

    const messageTime = (message.updated_at instanceof Date) && message.updated_at.toLocaleString('en-US', { hour: 'numeric', minute: "2-digit", hour12: true })

    //Info: Using clip path on img to achieve 
    return (
      <div className="message-box d-flex flex-row">
        <img className="message-avatar" src={message.user.image}/>
        <div className="d-flex flex-column">
          <div>
            {/* Arrange Helvetica Neue for exact font */}
            <b className="message-box-username">{message.user.name}</b> 
            <span className="message-time">{messageTime}</span>
          </div>
          
          <div className="message-text">{message.text}</div>
        </div>
      </div>
    )
  }
}

const filters = { type: 'messaging', example: 1 };
const sort = { last_message_at: -1 };

const App = () => (
  <Chat client={chatClient} theme={'messaging light'}>
    <ChannelList
      filters={filters}
      sort={sort}
      List={ChannelListMessenger}
      Preview={ChannelPreviewMessenger}
      />
    <Channel Message={CustomMessageComponent}>
      <Window>
        <ChannelHeader />
        <MessageList TypingIndicator={TypingIndicator} />
        <MessageInput Input={MessageInputFlat} focus />
      </Window>
      <Thread Message={MessageSimple} />
    </Channel>
  </Chat>
)

export default App;