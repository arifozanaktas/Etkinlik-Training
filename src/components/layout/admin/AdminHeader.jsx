import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'


function AdminHeader() {

  const navigate = useNavigate()

  return <>
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate("/admin/activity")} color="inherit">Activity</Button>
          <Button onClick={() => navigate("/admin/category")} color="inherit">Category</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </>
}

export default AdminHeader