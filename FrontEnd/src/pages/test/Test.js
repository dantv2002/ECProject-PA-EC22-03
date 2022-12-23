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
                console.log(JSON.parse(greeting.body).content)
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
            "price": 10000000,
            "timeAuction": "2022-12-12 09:30:00.000",
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
