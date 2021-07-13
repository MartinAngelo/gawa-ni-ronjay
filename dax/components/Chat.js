// import React, { useState, useEffect } from 'react'
// import { db } from "../utils/firebase";

// function Chat() {
//     const [messages, setMessages] = useState([])
//     useEffect(() => {
//         db.collection('messages')
//         .orderBy('createdAt')
//         .limit(50)
//         .onSnapshot(snopshot => {
//             setMessages(snopshot.docs.map(doc => doc.data()))
//         })
//     }, [])
//     return (
//         <div>
//             {messages.map(({id, text, photoURL}) => (
//                 <div key={id}>
//                     <img src={photoURL} alt="" />
//                     <p>{text}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Chat
