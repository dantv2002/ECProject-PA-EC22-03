package com.Ecomerce.API.websocket.controller;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.Ecomerce.API.websocket.model.Greeting;
import com.Ecomerce.API.websocket.model.HelloMessage;

@Controller
public class GreetingController {

	@MessageMapping("/hello")
	@SendTo("/topic/greetings")
	public Greeting greeting(HelloMessage message) throws Exception {
		return new Greeting("Hello, " + (message.getName() + "!"));
	}

	@MessageMapping("/room/greeting/{room}")
	public Greeting greet(@DestinationVariable String room, HelloMessage message) throws Exception {
		return new Greeting("Hello, " + message.getName() + "!");
	}

}