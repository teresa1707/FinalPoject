import {
    Card,
    FormControl,
    Grid,
    TextareaAutosize,
    TextField,
} from '@mui/material'
import { Agenda } from 'components/Agenda/Agenda'
import { MyButton } from 'components/MyButton/MyButton'
import { Title } from 'components/Titles/Title'
import React from 'react'
import './ContactPage.scss'

export const ContactPage = ({ handleOpen, handleClose }) => {
    let text = 'cancel'
    let text1 = 'send'
    let text2 = 'Contact'
    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item xs={12} style={{ margin: '0 10px' }}>
                    <Title titleText={text2} />
                </Grid>

                <Grid item xs={12} md={7} style={{ margin: '0 10px' }}>
                    <Card className="modal-container">
                        <FormControl
                            sx={{
                                m: 3,
                                minWidth: 120,
                                width: '90%',
                                borderRadius: 8,
                            }}
                        >
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
                                label="Name"
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
                                label="First Name"
                                type="text"
                                name="firstName"
                                id="input-password"
                                variant="standard"
                                color="warning"
                                size="small"
                                margin="dense"
                            />
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
                            <TextareaAutosize
                                className="input-style"
                                minRows={3}
                                placeholder="Write here"
                            />
                            <div className="buttons">
                                <MyButton
                                    text={text}
                                    handleClose={handleClose}
                                />
                                <MyButton
                                    text={text1}
                                    handleClose={handleClose}
                                />
                            </div>
                        </FormControl>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card
                        style={{
                            padding: '10px',
                            borderRadius: 4,
                        }}
                    >
                        <div className="app-title">
                            <Agenda />
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
