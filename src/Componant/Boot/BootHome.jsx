import React from 'react';
import { RiWechatFill } from 'react-icons/ri';
import ChatContainer from './ChatContainer';
import { chatTF } from '../../Store/Action';
import {useSelector, useDispatch} from 'react-redux';

export default function BootHome() {
  const TFstate = useSelector((state)=> state.ChatTrueFalse)
  const dispatch = useDispatch();

  return (
  <>
    <div className='bootHome'>
      <div className='bootPlace' onClick = {()=>dispatch(chatTF())}>
        <div className='bootIcon'>
           <RiWechatFill />
        </div>
      </div>
      
     {TFstate?<div className='chatContainerPlace'>
        <ChatContainer />
      </div> : ''} 


    </div>
  </>
)
}
