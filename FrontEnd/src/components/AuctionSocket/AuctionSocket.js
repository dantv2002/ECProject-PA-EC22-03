import React, { useEffect, useState } from 'react'
import SockJS from 'sockjs-client'
import {over} from 'stompjs'
import { mainDomain } from '../../util/constants/mainUrl'
var stompClient=null

   
    export const registeruser = (action) => {
        let sock = new SockJS(`${mainDomain}/ws`)
        stompClient = over(sock)
        stompClient.connect({},() => {
            
            stompClient.subscribe('/topic/greetings',function (greeting) {
                const a = greeting.body
                action()
            })
        })
       
    }
    function disconnect() {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        console.log("Disconnected");
    }
    
    export const  sendName = (obj) => {
        stompClient.send("/app/hello", {}, JSON.stringify(obj));
    }

    

    // {
    //     "auctionId": 5,
    //     "seller": "vanhoa",
    //     "price": 10000000,
    //     "timeAuction": "2022-12-12 09:30:00.000",
    //     "comment": "Tới luôn"
    // }