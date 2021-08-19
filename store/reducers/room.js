import {HYDRATE} from "next-redux-wrapper"
import * as t from "../types"

const initialState = {
    roomList : [],
    selectedRoom : null,
    isModalOpen : false,
}

const mainReducer = (state= initialState, action) => {
    switch(action.type){
        case HYDRATE:
            return {...state, ...action.payload}
        case t.MODAL_OPEN:
            return {
                ...state,
                isModalOpen : action.payload
            }
        case t.ROOM_FETCH_SUCCEEDED:
            return{
                ...state,
                roomList : action.payload
            }
        case t.ROOM_ADD_SUCCEEDED:
            return {
                ...state,
                roomList: [action.payload, ...state.roomList],
            }
        case t.ROOM_UPDATE_SUCCEEDED:
            const updatedRoom = state.roomList.map ((room) => {
                if(room._id === action.payload._id){
                    return{
                        ...room,
                        name : action.payload.name,
                        email : action.payload.email,
                        address : action.payload.address,
                        phone : action.payload.phone,
                    }
                }
                return room
            })
            return { ...state, roomList : updatedRoom}
        case t.ROOM_DELETE_SUCCEEDED:
            const newRoomList = state.roomList.filter(
                (room) => room._id !== action.payload
            )
            return{
                ...state,
                newRoomList
            }
        case t.ROOM_SELECTED:
            const selectedRoom = state.roomList.find(
                (room) => room._id === action.payload
            )
            return {
                ...state,
                selectedRoom,
            }
        default:
            return state
    }
}

export default mainReducer