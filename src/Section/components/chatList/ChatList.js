import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
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
export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        facee11,
      id: 1,
      name: "Tim Hover",
      active: true,
      isOnline: true,
    },
    {
      image:
        facee6,
      id: 2,
      name: "Ayub Rossi",
      active: false,
      isOnline: false,
    },
    {
      image:
        facee7,
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      isOnline: false,
    },
    {
      image:
        facee8,
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
    {
      image:
        facee9,
      id: 5,
      name: "Elsa Black",
      active: false,
      isOnline: false,
    },
    {
      image:
        facee10,
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      image:
        facee12,
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image:
        facee13,
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image:
        facee14,
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: facee15,
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
