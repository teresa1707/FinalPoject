import React from 'react'

import { Form, Button, Input, Modal, SelectPicker } from 'rsuite'

const selectData = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice'].map(
    (item) => ({
        label: item,
        value: item,
    })
)

const Textarea = React.forwardRef((props, ref) => (
    <Input {...props} as="textarea" ref={ref} />
))

export const ModalWindow = () => {
    const [open, setOpen] = React.useState(false)
    const [formValue, setFormValue] = React.useState({
        name: '',
        email: '',
        password: '',
        textarea: '',
    })

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <>
            <Modal open={open} onClose={handleClose} size="xs">
                <Modal.Header>
                    <Modal.Title>Write for us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form fluid onChange={setFormValue} formValue={formValue}>
                        <Form.Group controlId="name-9">
                            <Form.HelpText>Create your account</Form.HelpText>

                            <Form.Control name="name" placeholder="name" />
                        </Form.Group>
                        <Form.Group controlId="email-9">
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="email"
                            />
                        </Form.Group>
                        <Form.Group controlId="password-9">
                            <Form.ControlLabel>Password</Form.ControlLabel>
                            <Form.Control
                                name="password"
                                type="password"
                                autoComplete="off"
                            />
                        </Form.Group>
                        <Form.Group controlId="textarea-9">
                            <Form.ControlLabel>Textarea</Form.ControlLabel>
                            <Form.Control
                                rows={5}
                                name="textarea"
                                accepter={Textarea}
                            />
                        </Form.Group>
                        <Form.Group controlId="select-10">
                            <Form.ControlLabel>SelectPicker</Form.ControlLabel>
                            <Form.Control
                                name="select"
                                data={selectData}
                                accepter={SelectPicker}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="primary">
                        Confirm
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            <Button onClick={handleOpen}>Write us</Button>
        </>
    )
}

// import { Button, ButtonToolbar, Form, Modal } from 'rsuite'
// import './Modal.scss'
// import '../../container/Slider/swiper.css'
// import { Card } from '@mui/material'

// export const ModalWindow = () => {
//     const [open, setOpen] = React.useState(false)

//     const handleOpen = () => setOpen(true)
//     const handleClose = () => setOpen(false)

//     return (
//         <>
//             <Card className="modal-container">
//                 <Modal
//                     className="modal"
//                     keyboard={false}
//                     open={open}
//                     onClose={handleClose}
//                 >
//                     <Form className="form" id="form" novalidate="">
//                         <div className="outer">
//                             <div className="inner">
//                                 <label for="input-title">Title</label>
//                                 <input
//                                     type="text"
//                                     name="title"
//                                     id="input-title"
//                                 />
//                             </div>
//                         </div>

//                         <div className="outer">
//                             <div className="inner">
//                                 <label for="input-name">Name</label>
//                                 <input
//                                     type="text"
//                                     name="fullname"
//                                     id="input-name"
//                                     required=""
//                                 />
//                             </div>
//                         </div>

//                         <div className="outer">
//                             <div className="inner">
//                                 <label for="input-email">Email address</label>
//                                 <input
//                                     type="email"
//                                     name="email_address"
//                                     id="input-email"
//                                     required=""
//                                 />
//                             </div>
//                         </div>

//                         <div className="outer">
//                             <div className="inner">
//                                 <label for="text">Your text</label>
//                                 <input id="text" />
//                             </div>
//                         </div>
//                         <Button onClick={handleClose} appearance="subtle">
//                             Ok
//                         </Button>
//                         <Button onClick={handleClose} appearance="subtle">
//                             Cancel
//                         </Button>
//                     </Form>
//                 </Modal>
//             </Card>
//             <ButtonToolbar>
//                 <Button
//                     className="modal-button swiper-button"
//                     style={{ color: 'brown' }}
//                     onClick={handleOpen}
//                 >
//                     Wright us
//                 </Button>
//             </ButtonToolbar>
//         </>
//     )
// }
