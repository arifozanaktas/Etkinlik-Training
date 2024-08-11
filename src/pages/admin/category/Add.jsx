import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { axiosInstance } from '../../../api/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

function Add() {

  const [name, setname] = useState("")
  const [description, setdescription] = useState("")


  const navigate = useNavigate()

  const { enqueueSnackbar } = useSnackbar()

  const add = () => {
    axiosInstance.post('/categories', {
      name: name,
      description: description,
    }).then((res) => {
      navigate('/admin/category')
      enqueueSnackbar("Category added successfully", { variant: "success" })
    }).catch((err) => {
      console.log(err)
    })
  }

  return <>
    <Stack spacing={2}>
      <Stack spacing={2} direction={"row"}>
        <TextField fullWidth label="Name" variant="outlined" value={name} onChange={(e) => setname(e.target.value)} />
        <TextField fullWidth label="Description" variant="outlined" value={description} onChange={(e) => setdescription(e.target.value)} />
      </Stack>
      <Stack spacing={2} direction={"row"}>
      </Stack>

      <Stack>
        <Button
          variant="contained"
          color="primary"
          onClick={add}
        >
          Add
        </Button>
      </Stack>

    </Stack>
  </>
}

export default Add