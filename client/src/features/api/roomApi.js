import { baseApi } from "./baseApi";
import providesList from "../../helpers/providesList";

export const roomApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getRoom: builder.query({
            query: (roomId) => ({
                url: `/rooms/${roomId}`,
            }),
            providesTags: (result) => providesList(result?.data, "Room"),
        }),
        getRooms: builder.query({
            query: (userId) => ({
                url: `/rooms/${userId}`,
            }),
            providesTags: (result) => providesList(result?.data, "Room"),
        }),
        createRoom: builder.mutation({
            query: ({ participants }) => ({
                url: "/rooms",
                method: "POST",
                body: {
                    participants,
                },
            }),
            invalidatesTags: (result, error, { participants }) => [
                { type: "Room" },
                { type: "User", id: participants[0] },
                { type: "User", id: participants[1] },
            ],
        }),
        deleteRoom: builder.mutation({
            query: (id) => ({
                url: `/rooms/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useGetRoomsQuery } = roomApi;
