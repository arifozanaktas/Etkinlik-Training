import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../api/axiosInstance'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'

function List() {

  const [categories, setcategories] = useState([])

  const { enqueueSnackbar } = useSnackbar()


  useEffect(() => {

    axiosInstance
      .get('/categories')
      .then((res) => {
        setcategories(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  const deleteCategory = (id) => {

    var confirm = window.confirm("Are you sure you want to delete this category?")

    if (confirm) {
      axiosInstance
        .delete(`/categories/${id}`)
        .then((res) => {
          setcategories(categories.filter((category) => category.id !== id))
          enqueueSnackbar("Category deleted successfully", { variant: 'success' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const navigate = useNavigate()

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    //startDate, endDate, location
    { field: 'description', headerName: 'Description', flex: 1 },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: (params) => {
        return <Button onClick={() => deleteCategory(params.row.id)} variant="contained" color="error">Delete</Button>
      }
    },
    {
      field: "update",
      headerName: "Update",
      flex: 1,
      renderCell: (params) => {
        return <Button onClick={() => navigate(`/admin/category/update/${params.row.id}`)} variant="contained" color="primary">Update</Button>
      }
    }

  ]

  return <>
    <Button onClick={() => navigate("/admin/category/add")} variant="contained" color="primary">Add</Button>
    <hr />
    <DataGrid
      rows={categories}
      columns={columns}
    />
  </>
}

export default List