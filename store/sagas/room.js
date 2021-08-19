import { all, put, takeLatest} from "redux-saga/effects"
import * as t from "../types"

function* fetchRooms(){
    try {
        const response = yield fetch("/api/rooms")
		console.log('test',response)
        const roomList = yield response.json()

        yield put({
            type : t.ROOM_FETCH_SUCCEEDED,
            payload : roomList.data,
        })
    } catch (error) {
        yield put({
            type : t.ROOM_FETCH_FAILED,
            payload : error.message,
        })
    }
}

function* watchFetchRooms() {
    yield takeLatest(t.ROOM_FETCH_REQUESTED, fetchRooms)
}

function* addRoom(action){
    try {
        const response = yield fetch("/api/rooms", {
            method : "POST",
            headers: {
                "Content-type" : "application/json",
            },
            body: JSON.stringify(action.payload),
        })

        const newRoom = yield response.json()
		console.log('newRoom',newRooms,response)
        yield put({
            type : t.ROOM_ADD_SUCCEEDED,
            payload : newRoom.data,
        })
    } catch (error) {
        yield put({
            type : t.ROOM_ADD_FAILED,
            payload : error.message
        })
    }
}

function* watchAddRoom(){
    yield takeLatest(t.ROOM_ADD_REQUESTED, addRoom)
}

function* deleteRoom(action) {
	try {
		const response = yield fetch("/api/room/" + action.payload, {
			method: "DELETE",
		})

		const deletedRoom = yield response.json()

		yield put({
			type: t.ROOM_DELETE_SUCCEEDED,
			payload: deletedRoom.data.id,
		})
	} catch (error) {
		yield put({
			type: t.ROOM_DELETE_FAILED,
			payload: error.message,
		})
	}
}

function* watchRemoveRoom() {
	yield takeLatest(t.ROOM_DELETE_REQUESTED, deleteRoom)
}

function* updateRoom(action) {
	try {
		const response = yield fetch("/api/room/" + action.payload._id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(action.payload),
		})

		const updatedRoom = yield response.json()

		yield put({
			type: t.ROOM_UPDATE_SUCCEEDED,
			payload: updatedRoom.data,
		})
	} catch (error) {
		yield put({
			type: t.ROOM_UPDATE_FAILED,
			payload: error.message,
		})
	}
}

function* watchUpdateRoom() {
	yield takeLatest(t.ROOM_UPDATE_REQUESTED, updateRoom)
}

export default function* rootSaga() {
	yield all([
		watchFetchRooms(),
		watchAddRoom(),
		watchRemoveRoom(),
		watchUpdateRoom(),
	])
}