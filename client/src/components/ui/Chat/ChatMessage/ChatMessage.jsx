import "./styles.css";

import classNames from "classnames";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { TbHeartPlus } from "react-icons/tb";

const ChatMessage = ({ message, isOwnMessage }) => {
    const classes = {
        sent: isOwnMessage,
        received: !isOwnMessage,
    };

    const rowClasses = classNames("chat-message", classes);
    const bubbleClasses = classNames("chat-message__bubble", classes);

    return (
        <div className={rowClasses}>
            <div
                data-time="16:35"
                className={bubbleClasses}
            >
                <p className="chat-message__text">{message.content.text}</p>
            </div>

            <div className="chat-message__buttons">
                <button className="message-more blue_round-btn">
                    <div className="icon-container">
                        <TbHeartPlus className="icon" />
                    </div>
                </button>
                <button className="message-more blue_round-btn">
                    <div className="icon-container">
                        <IoEllipsisHorizontal className="icon" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ChatMessage;
