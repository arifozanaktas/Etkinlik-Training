import { Button, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../api/axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

function Update() {

  const [name, setname] = useState("")
  const [description, setdescription] = useState("")


  const navigate = useNavigate()

  const { enqueueSnackbar } = useSnackbar()
  const {id}=useParams()
  useEffect(() => {

    axiosInstance
      .get(`/categories/${id}`)
      .then((res) => {
        setname(res.data.name)
        setdescription(res.data.description)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  const update = () => {
    axiosInstance.put(`/categories/${id}`, {
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
          onClick={update}
        >
          Update
        </Button>
      </Stack>

    </Stack>
  </>
}

export default Update