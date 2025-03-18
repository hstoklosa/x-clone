import "./styles.css";

import { Link, useParams } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

import { ColumnHeader, PaginatedList } from "../../index";
import { formatDate } from "../../../helpers/date";

const Chat = ({ className }) => {
    // const { participantIds } = useParams();
    // const participants = participantIds.split("-");

    // const participant = 

    // const userCreatedAt = formatDate(profileUser?.createdAt, { year: "numeric", month: "long" });

    return (
        <div className={`chat ${className}`}>
            <ColumnHeader className="chat-header">
                <div className="chat-header__info">
                    <div className="pfp-container">
                        <div className="icon-container">
                            <img
                                src="http://localhost:8080/api/uploads/default_pfp.png"
                                alt="User Pfp"
                                className="pfp"
                            />
                        </div>
                    </div>
                    <h2 className="displayName">exoticc</h2>
                </div>

                <div className="chat-header__buttons">
                    <button className="dark_round-btn">
                        <div className="icon-container">
                            <IoIosInformationCircleOutline className="icon" />
                        </div>
                    </button>
                </div>
            </ColumnHeader>

            <div className="chat-io">
                <Link
                    to={`/exoticc`}
                    className="chat__participant"
                >
                    <div className="pfp-container">
                        <img
                            src="http://localhost:8080/api/uploads/default_pfp.png"
                            alt="User Pfp"
                            className="pfp"
                        />
                    </div>
                    <p className="displayName">exoticc</p>
                    <p className="username">@exotic</p>
                    <p className="other">Joined July 2023 · 1 Follower</p>
                </Link>

                <div className="chat__messages">
                    {/* <PaginatedList
                        queryResult={queryResult}
                        component={TweetPreview}
                        renderPlaceholder={() => (
                            <Placeholder
                                title="Save Tweets for later"
                                subtitle="Don't let the good ones fly away! Bookmark Tweets to easily find them again in the future."
                            />
                        )}
                    /> */}


                    {/* <ChatMessage
                        message={{ content: { text: "hey" } }}
                        isOwnMessage={true}
                    />
                    <ChatMessage
                        message={{ content: { text: "hi" } }}
                        isOwnMessage={false}
                    />
                    <ChatMessage
                        message={{ content: { text: "hey" } }}
                        isOwnMessage={true}
                    />
                    <ChatMessage
                        message={{ content: { text: "hey" } }}
                        isOwnMessage={true}
                    />
                    <ChatMessage
                        message={{ content: { text: "hey" } }}
                        isOwnMessage={true}
                    />
                    <ChatMessage
                        message={{ content: { text: "hi" } }}
                        isOwnMessage={false}
                    />
                    <ChatMessage
                        message={{ content: { text: "hi" } }}
                        isOwnMessage={false}
                    /> */}
                </div>
                <ChatInput />
            </div>
        </div>
    );
};

export default Chat;
