import React, { Component } from "react"
import { IconButton, Button, Modal, Icon } from "rsuite"
import AccommodationAndGuestsNumber from "./AccommodationAndGuestsNumber"

export default class RoomOccupancy extends Component {
	constructor(props) {
		super(props)

		this.state = {
			backdrop: true,
			show: false,
		}
		
		this.close = this.close.bind(this)
		this.open = this.open.bind(this)
	}

	close() { this.setState({ show: false }) }

	open() { this.setState({ show: true }) }

	render() {
		const { backdrop, show } = this.state

		return (

			<div className="modal-container" dir="rtl">
				<IconButton appearance="ghost" onClick={this.open} icon={<Icon icon="star" />} size="lg"><p>{"2 מבוגרים"}</p></IconButton>
				<Modal backdrop={backdrop} show={show} onHide={this.close} style={{height: '150%'}}>
					<div dir="rtl" style={{height: '150%'}}>
						<Modal.Header>
							<p className='font-bold'>{'נא לבחור את כמות החדרים הנצרכת ומספר האורחים בכל חדר'}</p>
							<p>*{'ניתן לבחור עד 5 חדרים בהזמנה אחד'}</p>
						</Modal.Header>
						<Modal.Body>
							<AccommodationAndGuestsNumber />
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={this.close} appearance="primary">{"אישור"}</Button>
							<Button onClick={this.close} appearance="subtle">{"ביטול"}</Button>
						</Modal.Footer>
					</div>
				</Modal>
			</div>

		)
	}
}
