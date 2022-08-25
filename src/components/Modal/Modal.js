import React, { useState } from 'react'
import './Modal.scss'
import '../../container/Slider/swiper.css'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import {
    Modal,
    Card,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextareaAutosize,
    TextField,
    Button,
    Stack,
} from '@mui/material'
import { SlidingButton } from 'components/MyButton/SlidingButton'
import { MyButton } from 'components/MyButton/MyButton'

export const ModalWindow = () => {
    const [open, setOpen] = useState(false)
    const [category, setCategory] = useState('')

    const handleChange = (event) => {
        setCategory(event.target.value)
    }

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    let text = 'OK'
    let text1 = 'Cancel'
    let text2 = 'Write us'
    return (
        <>
            <Modal
                className="modal"
                open={open}
                onClose={handleClose}
                style={{
                    padding: 10,
                    borderRadius: 8,
                    border: '1px solid white',
                }}
            >
                <Card className="modal-container">
                    <FormControl sx={{ m: 3, minWidth: 120, width: '90%' }}>
                        <InputLabel
                            color="warning"
                            style={{
                                fontSize: 14,
                                color: 'brown',
                                fontWeight: 'bold',
                            }}
                        >
                            CATEGORY
                        </InputLabel>
                        <Select
                            variant="standard"
                            color="warning"
                            className="input-style"
                            value={category}
                            onChange={handleChange}
                        >
                            <MenuItem value="science">Science</MenuItem>
                            <MenuItem value="art">Art</MenuItem>
                            <MenuItem value="history">History</MenuItem>
                            <MenuItem value="other">
                                <em>Other</em>
                            </MenuItem>
                        </Select>{' '}
                        <TextField
                            className="input-style"
                            label="Title"
                            type="text"
                            name="title"
                            id="input-title"
                            variant="standard"
                            color="warning"
                            size="small"
                            margin="dense"
                        />
                        <TextField
                            className="input-style"
                            label="Author's Name"
                            type="text"
                            name="name"
                            id="input-name"
                            variant="standard"
                            color="warning"
                            size="small"
                            margin="dense"
                        />{' '}
                        <TextField
                            className="input-style"
                            color="warning"
                            label="E-mail"
                            type="email"
                            name="email"
                            id="input-email"
                            variant="standard"
                            size="small"
                            margin="dense"
                        />
                        <TextField
                            className="input-style"
                            label="Password"
                            type="password"
                            name="password"
                            id="input-password"
                            variant="standard"
                            color="warning"
                            size="small"
                            margin="dense"
                        />
                        <TextareaAutosize
                            className="input-style"
                            minRows={3}
                            placeholder="Wright here"
                        />
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Button
                                style={{
                                    width: '30%',
                                    color: 'brown',
                                    backgroundColor: '#f5f5f2',
                                    margin: 20,
                                    fontWeight: 'bold',
                                }}
                                component="label"
                            >
                                Upload file
                                <input
                                    hidden
                                    accept="image/*"
                                    multiple
                                    type="file"
                                />
                            </Button>
                            <Button
                                style={{
                                    fontSize: 13,
                                    color: 'brown',
                                    fontWeight: 'bold',
                                    backgroundColor: '#f5f5f2',
                                }}
                                aria-label="upload picture"
                                component="label"
                            >
                                UPLOAD
                                <input hidden accept="image/*" type="file" />
                                <PhotoCamera />
                            </Button>
                        </Stack>
                        <div className="buttons">
                            <MyButton text={text} handleClose={handleClose} />
                            <MyButton text={text1} handleClose={handleClose} />
                        </div>
                    </FormControl>
                </Card>
            </Modal>
            <div className="modal-button">
                <SlidingButton text={text2} handleOpen={handleOpen} />
            </div>
        </>
    )
}
