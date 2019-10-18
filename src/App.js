import React from 'react'
import { StreamChat } from "stream-chat"
import { 
  Chat, Channel, ChannelList, Window, ChannelHeader, ChannelListMessenger, 
  ChannelPreviewMessenger ,TypingIndicator, MessageInput, MessageInputFlat, Thread, MessageSimple, MessageList
} from "stream-chat-react"
import CustomMessageComponent from "./CustomMessageComponent.js"

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
        <MessageList noGroupByUser TypingIndicator={TypingIndicator} />
        <MessageInput Input={MessageInputFlat} focus />
      </Window>
      <Thread Message={MessageSimple} />
    </Channel>
  </Chat>
)

export default App;