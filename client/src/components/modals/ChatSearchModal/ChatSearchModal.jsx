import "./styles.css";

import { BaseModal, ColumnHeader } from "../../index";

const ChatSearchModal = ({ isOpen, closeModal }) => {
    return (
        <BaseModal
            isOpen={isOpen}
            onClose={closeModal}
        >
            <ColumnHeader
                className="chatsearch-modal_header"
                closeModal={true}
            >
                <div className="header-container">
                    <h1 className="chatsearch-modal_heading">New message</h1>
                    <button className="white-btn create-chat_btn">Next</button>
                </div>
            </ColumnHeader>

            <form className="chatsearch-form"></form>
        </BaseModal>
    );
};

export default ChatSearchModal;
