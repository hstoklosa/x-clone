import { useState } from "react";

import { BiCog } from "react-icons/bi";
import { LuMailCheck } from "react-icons/lu";
import { BiArrowBack } from "react-icons/bi";

import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import { useAppSelector } from "../../../app/store";
import { useGetRoomsQuery } from "../../../features/api/roomApi";

import ChatPreview from "./ChatPreview";
import { ColumnHeader, SearchBar, PaginatedList } from "../../index";

const ChatSidebar = ({ search, setSearch, setSearchModal, handleSubmit }) => {
    const [searchMode, setSearchMode] = useState(false);

    const { user: currentUser } = useAppSelector((state) => state.auth);
    // const queryResult = useInfiniteScroll(useGetRoomsQuery, { id: currentUser.id });

    const disableSearchMode = () => {
        setSearch("");
        setSearchMode(false);
    };

    return (
        <div className="messages-grid__right">
            <ColumnHeader className="messages-header">
                <h3 className="messages-header_text">Messages</h3>

                <div className="messages-header__buttons">
                    <button
                        className="dark_round-btn"
                        disabled
                    >
                        <div className="icon-container">
                            <BiCog
                                size="20"
                                className="icon"
                            />
                        </div>
                    </button>

                    <button
                        className="dark_round-btn"
                        onClick={() => setSearchModal(true)}
                    >
                        <div className="icon-container">
                            <LuMailCheck
                                size="20"
                                className="icon"
                                style={{ strokeWidth: "2" }}
                            />
                        </div>
                    </button>
                </div>
            </ColumnHeader>

            <div className="search-wrapper">
                {searchMode && (
                    <button
                        className="dark_round-btn"
                        onClick={disableSearchMode}
                    >
                        <div className="icon-container">
                            <BiArrowBack
                                size="20"
                                color="white"
                                className="icon"
                            />
                        </div>
                    </button>
                )}

                <SearchBar
                    placeholder="Search Direct Messages"
                    onFocus={() => setSearchMode(true)}
                    onSubmit={handleSubmit}
                />
            </div>

            {/* <PaginatedList
                queryResult={queryResult}
                component={ChatPreview}
            // renderPlaceholder={() => (
            //     <Placeholder
            //         title="Save Tweets for later"
            //         subtitle="Don't let the good ones fly away! Bookmark Tweets to easily find them again in the future."
            //     />
            // )}
            /> */}

            {!searchMode && <ChatPreview />}

            {searchMode && (
                <div className="search-tabs">
                    {search.length > 0 ? (
                        <p className="search-mode_text">Send a message, get a message</p>
                    ) : (
                        <p className="search-mode_text">
                            Try searching for people, groups, or messages
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatSidebar;
