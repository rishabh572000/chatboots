import React from 'react'

export default function ChatBoot(props) {
    console.log(props)
return (
    <>
        <div className='chatBoot'>
            {props.text}
        </div>
        {props.image?<div className='chatPersonImage'>
            <img src={props.image} />
        </div>:null}
        
    </>
    )
}

