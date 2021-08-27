import { model } from "mongoose"
import React, { useState, useContext, createContext } from "react"

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const [roomsList, setRoomsList] = useState([])
    const [date, setdate] = useState('')
    const [inputTxt, setInputTxt] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    //#region  State Handlers

        const handleAddRoomToList = (room) => {
            let tmpList = [...roomList]
            tmpList.push(room)
            setRoomsList(tmpList)
        }

        const handleRemoveRoomFromList = (roomId) => {
            let updatedList = [...roomList]
            const roomIndex = updatedList.findIndex(
                item => item.id === roomId
            )

            if (roomIndex >= 0) {
                updatedList.splice(roomIndex, 1)
                setRoomsList(updatedList)
            } else {
                console.error(`Erro: Can't find room with ID ${roomId}`)
            }
        }

        const handleModal = (key) => {
            setIsModalOpen(key)
        }

        const handleInputText = (txt) => {
            setInputTxt(txt)
        }

        const handDate = (date) => {
            setdate(date)
        }

        const roomsAmount = () => {
            roomsList.length
        }
        
        const modalState = () => {
            isModalOpen
        }

    //#endregion

}

return (
    <SearchContext.Provider value={{

    }}>
        {children}
    </SearchContext.Provider>
)
}

export default SearchProvider