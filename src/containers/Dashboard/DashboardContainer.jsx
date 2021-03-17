import React, { useLayoutEffect } from 'react'
import { useHistory } from "react-router-dom"

import { isAuthenticated } from 'src/utils/helper'
import DashboardView from 'src/views/dashboard/DashboardView'

export default function DashboardContainer() {
  let history = useHistory()
 
  useLayoutEffect(() => {
    if (!isAuthenticated()) {
      history.push("/login")
    }
    return
  }, [history])

  return (<DashboardView />)
}