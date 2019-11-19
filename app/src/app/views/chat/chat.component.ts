import { Component } from "@angular/core";
import { WebsocketService } from "../../core/service/api.websocket.service";
import { ChatService } from "../../core/service/api.chat.service";

@Component({
  selector: "chat-root",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent {
  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });
  }

  private message = {
    author: "tutorialedge",
    message: "this is a test message"
  };

  sendMsg() {
    console.log("new message from client to websocket: ", this.message);
    this.chatService.messages.next(this.message);
    this.message.message = "";
  }
}