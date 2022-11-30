import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import facee6 from '../../../assets/faces/Faces (6).jpg'
import facee7 from '../../../assets/faces/Faces (7).jpg'
import facee8 from '../../../assets/faces/Faces (8).jpg'
import facee9 from '../../../assets/faces/Faces (9).jpg'
import facee10 from '../../../assets/faces/Faces (10).jpg'
import facee11 from '../../../assets/faces/Faces (11).jpg'
import facee12 from '../../../assets/faces/Faces (12).jpg'
import facee13 from '../../../assets/faces/Faces (13).jpg'
import facee14 from '../../../assets/faces/Faces (14).jpg'
import facee15 from '../../../assets/faces/Faces (15).jpg'
import facee19 from '../../../assets/faces/Faces (19).jpg'
import facee17 from '../../../assets/faces/Faces (17).jpg'
import mon_img  from '../../../assets/all_pic/mon_img.jpg'
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
      mon_img ,
      type: "",
      msg: "Hi ons, How are you?",
    },
    {
      key: 2,
      image:
       facee11,
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
      facee11 ,
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
      mon_img,
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
      facee11 ,
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
      mon_img,
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
      facee11 ,
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:mon_img ,
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image={facee11}
              />
              <p>Tim Hover</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
