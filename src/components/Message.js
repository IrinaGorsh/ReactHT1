function Message({content}) {
    return ( 
        <div className= "message_container">
<p className="message_content">Содержание: {content}</p>
        </div>
     );
}

export default Message;