import "./styles.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { BiSend } from "react-icons/bi";
import { PiImageSquareBold } from "react-icons/pi";

const ChatInput = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    const handleMessageChange = ({ target }) => {
        setMessage(target.value);
    };

    const handleMessageSend = (e) => {
        e.preventDefault();

        dispatch({
            type: "socket/sendMessage",
            payload: {
                content: message,
                to: "64bd8356faaf55c5137988fd",
            },
        });

        setMessage("");
        // console.log("Send message");
    };

    return (
        <div className="chat-input">
            <section className="chat-input_buttons">
                <button className="chat-input_btn blue_round-btn">
                    <div className="icon-container">
                        <PiImageSquareBold className="icon" />
                    </div>
                </button>
            </section>

            <form
                className="chat-input_form"
                onSubmit={handleMessageSend}
            >
                <input
                    type="text"
                    name="inputbox"
                    id="inputbox"
                    autoComplete="off"
                    placeholder="Start a new message"
                    value={message}
                    onChange={handleMessageChange}
                />
                <button
                    type="submit"
                    className="send-btn blue_round-btn"
                    disabled={message.length <= 0}
                >
                    <div className="icon-container">
                        <BiSend className="icon" />
                    </div>
                </button>
            </form>
        </div>
    );
};

export default ChatInput;
