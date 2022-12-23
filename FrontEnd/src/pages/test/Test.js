import React, { useEffect, useState } from 'react'
import SockJS from 'sockjs-client'
import {over} from 'stompjs'
var stompClient=null
export const Test = () => {
   
    const registeruser = () => {
        let sock = new SockJS('http://localhost:8080/ws')
        stompClient = over(sock)
        stompClient.connect({},() => {
            
            stompClient.subscribe('/topic/greetings',function (greeting) {
                const a = greeting.body
               
            })
        })
       
    }
    function disconnect() {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        console.log("Disconnected");
    }
    
    function sendName() {
        stompClient.send("/app/hello", {}, JSON.stringify({
            "auctionId": 5,
            "seller": "vanhoa",
            "price": 8000000,
            "timeAuction": "2022-12-23 14:13:59.00",
            "comment": "Tới luôn"
        }));
    }

    useEffect(() => {
        registeruser()
    },[])
  return (
    <div>Test <button onClick={sendName}>Send</button></div>
  )
}
