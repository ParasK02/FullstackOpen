import { useState,useEffect } from "react"

const ConfirmMessage = (props) => {
    const { message } = props
    const [messageType, setType] = useState('confirm')
    
    useEffect(() => {
        if (message.includes("information")) {
          setType('error');
        } else {
          setType('confirm');
        }
      }, [message]); 
    
      if (message === '') {
        return null;
      }
    
        
    
    
    
      return (
        <div className={messageType}>
          {message}
        </div>
      )
    }
    

   


 

export default ConfirmMessage;



