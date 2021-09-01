import React, { useState, createContext } from "react"

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {

    const [roomsList, setRoomsList] = useState([])
    const [dateRange, setDateRange] = useState([])
    const [inputTxt, setInputTxt] = useState('')
    const [data, setData] = useState([])

    const modifyLog = (vals) => {
        console.table(vals)
    }
    
    const sendSearchValues = () => {
        let tmpList = [...roomsList]
        tmpList.map(m => {
            console.log(m)
        })
    }

    const initRooms = () => {
        setRoomsList([])
       //modifyLog({faunctionName:'initRooms', callTo:'setRoomsList', withData:'[]', operation: 'succesful'})
    }

    const addRoom = (room) => {
        let tmpList = [...roomsList]
        tmpList.push(room)
        setRoomsList(tmpList)
        //modifyLog({faunctionName:'addRoom', callTo:'setRoomsList', withData: [...tmpList], operation: 'succesful'})
    }

    const updateRoom = (roomId, guestType, amount) => {
       // modifyLog({faunctionName:'updateRoom', callTo:'', withData: { roomId, guestType, amount}, operation: 'START'})
        try {
            let updatedList = [...getRooms()]
            const roomIndex = updatedList.findIndex(
                item => item.props.id === roomId
            )
            if (roomIndex >= 0) {
                const updatedRoom = {
                    ...updatedList[roomIndex]
                }
                guestType === 'adults' ? (updatedRoom.adults = amount) : (updatedRoom.childs = amount)
                updatedList[roomIndex] = updatedRoom
                setRoomsList(updatedList)
                //modifyLog({faunctionName:'updateRoom', callTo:'', withData: { roomId, guestType, amount}, operation: 'SUCCESFUL'})
                return true
            } else {
                console.error(`Error uptaiting: Can't find room with ID ${roomId}`)
                //modifyLog({faunctionName:'updateRoom', callTo:'', withData: { roomId, guestType, amount}, operation: 'FAIL'})
            }
            return false
        } catch (error) {
            console.error(`Error uptaiting: Can't find room with ID ${roomId} with Error: ${error}`)
            //modifyLog({faunctionName:'updateRoom', callTo:'', withData: { roomId, guestType, amount}, operation: 'ERROR'})
        }

    }

    const removeRoom = (roomId) => {
        try {
            let updatedList = [...getRooms()]
            const roomIndex = updatedList.findIndex(
                item => item.props.id === roomId
            )
            if (roomIndex >= 0) {
                updatedList.splice(roomIndex, 1)
                setRoomsList(updatedList)
                //modifyLog({faunctionName:'removeRoom', callTo:'setRoomsList', withData: roomId, operation: 'succesful'})
                return true
            } else {
                console.error(`Error removing: Can't find room with ID ${roomId}`)
                //modifyLog({faunctionName:'removeRoom', callTo:'setRoomsList', withData: roomId, operation: 'Fail'})
            }
            return false
        } catch (error) {
            console.error(`Error removing: Can't find room with ID ${roomId} with Error: ${error}`)
            //modifyLog({faunctionName:'removeRoom', callTo:'setRoomsList', withData: roomId, operation: 'Fail'})
        }
    }

    const roomsAmount = () => {
        return roomsList.length
    }

    const getRooms = () => {
        return roomsList
    }

    const setText = (txt) => {
        setInputTxt(txt)
    }

    const setDates = (ranges) => {
        setDateRange(ranges)
    }

    return (
        <SearchContext.Provider value={{
            sendSearchValues,
            initRooms,
            addRoom,
            updateRoom,
            removeRoom,
            roomsAmount,
            getRooms,
            setText,
            setDates,
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext