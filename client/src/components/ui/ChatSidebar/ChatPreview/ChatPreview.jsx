import "./styles.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { getTimeDifference } from "../../../../helpers/date";

const ChatPreview = ({ chat }) => {
    // const timeDifference = getTimeDifference(chat.createdAt);
    const [moreFloat, setMoreFloat] = useState(false);

    return (
        <Link
            to={`/messages/64bd8356faaf55c5137988fd-64b2c9b8acd7c63679fe9c76`}
            className="chat-preview active"
        >
            <div className="pfp-container">
                <img
                    src="http://localhost:8080/api/uploads/default_pfp.png"
                    className="pfp"
                    alt="User Pfp"
                />
            </div>
            <div className="chat-preview__info">
                <div className="chat-preview__info__top">
                    <div className="chat-preview_user">
                        <p className="displayName">exoticc</p>
                        <p className="username">@exoticc · Oct 18</p>
                    </div>

                    <div className="chat-preview_buttons">
                        <button className="blue_round-btn">
                            <div className="icon-container">
                                <IoEllipsisHorizontal className="icon" />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="chat-preview__info__bottom">
                    <p className="lastMessage">Hello asdsadasdasdasdasdsadasdasdasdasdasdasWorld</p>
                </div>
            </div>
        </Link>
    );
};

export default ChatPreview;
