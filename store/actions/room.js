import * as t from "../types"

export const setModalOpen = (isModalOpen) => {
    return {
        type : t.MODAL_OPEN,
        payload: isModalOpen
    }
}

export const fetchRooms = () => {
    return {
        type: t.ROOM_FETCH_REQUESTED,
    }
}

export const addRoom = (room) => {
    return {
        type : t.ROOM_ADD_REQUESTED,
        payload: room
    }
}

export const updateRoom = (room) => {
    return {
        type: t.ROOM_UPDATE_REQUESTED,
        payload: room,
    }
}

export const deleteRoom = (id) => {
    return {
        type : t.ROOM_DELETE_REQUESTED,
        payload : id
    }
}

export const setSelectedRoom = (id) => {
    return {
        type : t.ROOM_SELECTED,
        payload : id
    }
}