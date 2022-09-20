import React from 'react'

export default function ChatPerson(props) {
return (
  <>
   <div className='chatPerson'>
     <div className='chatBody'>
         {props.text}
     </div>
   </div>
   
  </>
)
}
