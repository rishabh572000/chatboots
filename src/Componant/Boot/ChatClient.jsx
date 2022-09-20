import React from 'react'
import ChatBoot from './ChatBoot'
import ChatPerson from './ChatPerson';
import chatList from './ChatList';
import {useSelector, useDispatch} from 'react-redux';
import { publicMessage } from '../../Store/Action';

export default function ChatClient() {
  const myMessage = useSelector((state)=> state.MessageData)

return (
  <>
    <div className='chatClient'>
      {
        myMessage.map((val, ind)=>{
          if(val.type=='PUBLIC'){
            return <div className='chatClientPerson'>
            <ChatPerson text={val.message}/>
          </div>
          }
          else{
            console.log('logo', val)
            return <div className='chatClientBoot'>
            <ChatBoot text={val.message}/>
          </div>
          }

          
        })
      }
      
    </div>
  </>
)
}
