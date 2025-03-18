import { baseApi } from "./baseApi";
import providesList from "../../helpers/providesList";

export const messageApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMessages: builder.query({
            query: (roomId) => ({
                url: `/chat/${roomId}`,
            }),
            providesTags: (result) => providesList(result?.data, "Message"),
        }),
        sendMessage: builder.mutation({
            query: ({ roomId, content }) => ({
                url: `/chat/${roomId}`,
                method: "POST",
                body: {
                    content,
                },
            }),
            invalidatesTags: (result, error, { conversationId }) => [
                { type: "Conversation", id: conversationId },
            ],
        }),

    }),
});

export const { useSendMessageMutation } = messageApi;
