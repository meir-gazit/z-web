import React, { Component, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { useDispatch, useSelector } from 'react-redux'
//import { useForm } from 'react-hook-form'
import { setModalOpen } from '../../../store'

import { IconButton, Button, Modal, Icon } from 'rsuite'
import AccommodationAndGuestsNumber from './Selector'

export default function RoomOccupancy(){
	const state = useSelector((state) => state.room)

	const dispatch = useDispatch()

	const openModal = () => {
		dispatch(setModalOpen(true))
	}

	const closeModal = () => {
		dispatch(setModalOpen(false))
	}

	return (
		<>
		<IconButton appearance="ghost" onClick={openModal} icon={<Icon icon="star" />} size="lg"><p>{"2 מבוגרים"}</p></IconButton>
		{state.isModalOpen
			? ReactDOM.createPortal(
				<div className='modal-container' dir='rtl'>
				<Modal backdrop={true} show={true} onHide={closeModal} style={{ height: '150%' }}>
					<div dir='rtl' style={{ height: '150%' }}>
						<Modal.Header>
							<p className='font-bold'>{'נא לבחור את כמות החדרים הנצרכת ומספר האורחים בכל חדר'}</p>
							<p>*{'ניתן להזמין עד 5 חדרים בהזמנה אחת'}</p>
						</Modal.Header>
						<Modal.Body>
							<AccommodationAndGuestsNumber />
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={closeModal} appearance='primary'>{'אישור'}</Button>
							<Button onClick={closeModal} appearance='subtle'>{'ביטול'}</Button>
						</Modal.Footer>
					</div>
				</Modal>
			</div>,
				document.body
		)
		: null}
		</>
	)
}
