import React from 'react'

import { Button, ButtonToolbar, Modal } from 'rsuite'
import './Modal.scss'
import '../../container/Slider/swiper.css'

export const ModalWindow = () => {
    const [open, setOpen] = React.useState(false)
    const [backdrop, setBackdrop] = React.useState('static')
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div className="modal-container">
            <Modal
                className="modal"
                keyboard={false}
                open={open}
                onClose={handleClose}
            >
                <form className="af-form" id="af-form" novalidate="">
                    <div className="af-outer">
                        <div className="af-inner">
                            <label for="input-title">Title</label>
                            <input type="text" name="title" id="input-title" />
                        </div>
                    </div>

                    <div className="af-outer af-required">
                        <div className="af-inner">
                            <label for="input-name">Name</label>
                            <input
                                type="text"
                                name="fullname"
                                id="input-name"
                                required=""
                            />
                        </div>
                    </div>

                    <div className="af-outer af-required">
                        <div className="af-inner">
                            <label for="input-email">Email address</label>
                            <input
                                type="email"
                                name="email_address"
                                id="input-email"
                                required=""
                            />
                        </div>
                    </div>

                    <div className="af-outer af-required">
                        <div className="af-inner">
                            <label for="text">Your text</label>
                            <input id="text" />
                        </div>
                    </div>
                    <Button onClick={handleClose} appearance="subtle">
                        Ok
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </form>
                <Modal.Footer></Modal.Footer>
            </Modal>
            <ButtonToolbar>
                <Button
                    className="modal-button swiper-button"
                    onClick={handleOpen}
                >
                    Wright us
                </Button>
            </ButtonToolbar>
        </div>
    )
}
