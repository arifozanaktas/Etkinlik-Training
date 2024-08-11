import { Button, Stack, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import React, { useState } from 'react'
import { axiosInstance } from '../../../api/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

function Add() {

  const [name, setname] = useState("")
  const [startDate, setstartDate] = useState("")
  const [endDate, setendDate] = useState("")
  const [location, setlocation] = useState("")


  const navigate = useNavigate()

  const { enqueueSnackbar } = useSnackbar()

  const add = () => {
    axiosInstance.post('/activities', {
      name: name,
      startDate: startDate,
      endDate: endDate,
      location: location
    }).then((res) => {
      navigate('/admin/activity')
      enqueueSnackbar("Activity added successfully", { variant: "success" })
    }).catch((err) => {
      console.log(err)
    })
  }

  return <>
    <Stack spacing={2}>
      <Stack spacing={2} direction={"row"}>
        <TextField fullWidth label="Name" variant="outlined" value={name} onChange={(e) => setname(e.target.value)} />
        <TextField fullWidth label="Location" variant="outlined" value={location} onChange={(e) => setlocation(e.target.value)} />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <DatePicker
          label="Start Date"
          sx={{ width: "100%" }}
          onChange={(newValue) => {
            setstartDate(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="End Date"
          sx={{ width: "100%" }}
          onChange={(newValue) => {
            setendDate(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
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