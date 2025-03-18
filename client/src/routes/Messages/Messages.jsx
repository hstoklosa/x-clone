import "./styles.css";

import { useState } from "react";
import { useOutlet } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useAppDispatch } from "../../app/store";
import { modalActions } from "../../features/slices/modalSlice";
import { ChatSidebar, ChatSearchModal } from "../../components";

const Messages = () => {
    const [search, setSearch] = useState("");
    const isSmallDevice = useMediaQuery("only screen and (max-width : 1020px)");
    const dispatch = useAppDispatch();
    const Outlet = useOutlet();

    const handleMessageSearch = (e, search) => {
        console.log("Search messages");
    };

    console.log(Outlet)

    return (
        <main className="messages messages-grid">
            {(isSmallDevice && !Outlet) && (
                <ChatSidebar
                    search={search}
                    setSearch={setSearch}
                    handleMessageSearch={handleMessageSearch}
                />
            )}

            {(isSmallDevice && Outlet) && (
                <div className="messages-grid__right">
                    {Outlet}
                </div>
            )}

            {(isSmallDevice && !Outlet) && (
                <div className="messages-grid__right">
                    <h1>Select a message</h1>
                    <p>Choose from your existing conversations or start a new one!</p>
                    <button
                        className="accent-btn"
                        onClick={() => dispatch(modalActions.openModal({
                            name: "ChatSearchModal",
                        }))}
                    >
                        New message
                    </button>
                </div>
            )}

            {(!isSmallDevice) && (
                <>
                    <ChatSidebar
                        search={search}
                        setSearch={setSearch}
                        handleMessageSearch={handleMessageSearch}
                    />

                    {Outlet ? (
                        <div className="messages-grid__left">
                            {Outlet}
                        </div>
                    ) : (
                        <div className="messages-grid__left">
                            <h1>Select a message</h1>
                            <p>Choose from your existing conversations or start a new one!</p>
                            <button
                                className="accent-btn"
                                onClick={() => dispatch(
                                    modalActions.openModal({
                                        name: "ChatSearchModal",
                                    }))
                                }
                            >
                                New message
                            </button>
                        </div>
                    )}
                </>
            )}

        </main>
    );
};

export default Messages;
