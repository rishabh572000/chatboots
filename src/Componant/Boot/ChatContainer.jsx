import React, { useState } from 'react';
import ChatClient from './ChatClient';
import chatList from './ChatList';
import {useSelector, useDispatch} from 'react-redux';
import { publicMessage } from '../../Store/Action';


export default function ChatContainer() {
  const [input, setInput] = useState();
  const [inputWord, setInputWord] = useState();

  // const [bootMess, setBootMess] = useState('');

// let similarity = require('sentence-similarity')
// let similarityScore = require('similarity-score')

  
  const dispatch = useDispatch()
  const inputDataChange = (event) =>{
    const name= event.target.name;
    let value= event.target.value;
    setInput(value)
    
  }

    // input && chatList.map((val, ind)=>{
    //     if(val.publicChat==input){
    //     }
    //   })

    var bootMess='Sorry, I have no ans, wait CC contact you soon'
    var stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now'];
    function remove_stopwords(str) {
      let res = []
      let words = str.split(' ')
      for(var i=0;i<words.length;i++) {
        const word_clean = words[i].split(".").join("")
         if(!stopwords.includes(word_clean)) {
             res.push(word_clean)
         }
      }
      let one=[];
      let two = [];
      let reslength = res.length
      for(var i=0; i<reslength; i++){
        const word = res[i];
        if(i==0){
          chatList.map((val, ind)=>{
            const chatword=val.publicChat;
            console.log('second', val)
           if(chatword.includes(word)){
            one.push(val);
           }
           
           
          })
          if(one.length==0){
            one.push(...chatList)
          }
        }
        else if(i%2 !=0){
          one.map((val, ind)=>{
            const chatword=val.publicChat
           if(chatword.includes(word)){
            two.push(val)
           }
          })
          one=[]
        }
        else if(i%2 == 0){
          two.map((val, ind)=>{
            const chatword=val.publicChat
           if(chatword.includes(word)){
            one.push(val)
           }
          })
          two=[]
        }

      }
      bootMess=reslength%2==0 ? two[0]?.botChat : one[0]?.botChat
      
  }

  const handleKeyPress = (event) =>{
   
    
    if(event.key=='Enter' && input.length>0){

    remove_stopwords(input)

    
    


      dispatch({type:'PUBLICM', payload:{id:111, type:'PUBLIC', message:input}})
      setInput('')
      dispatch({type:'BOOT', payload:{id:112, type:'BOOT', message:bootMess}})
      
    }
  }

return (
  <>
    <div className='ChatContainer'>
      <div className='chatContainerHead'>
          <div>Hoicko Assistant</div>
          <span></span>
      </div>
      <div className='chatSection'>
          <ChatClient />
      </div>
      <div className='chatBottom'>
        <div className='chatBottomContent'>
          <div className='chatInput'>
            <input type='text' placeholder='Enter message...' name='inputText' onChange={inputDataChange} value={input} onKeyDown={handleKeyPress}/>
          </div> 
        </div>
      </div>
      
    </div>
  </>
)
}
