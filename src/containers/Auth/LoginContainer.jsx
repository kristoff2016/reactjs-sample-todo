import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import LoginView from 'src/views/pages/login/LoginView'
import { getCurrentUser } from 'src/utils/helper';


export default function LoginContainer() {
  let history = useHistory();

  const [loading, setLoading] = useState(false)
  const [state, setState] = useState({ email: "", password: "" })

  const onTextChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const handleLogin = async () => {
    try {
      setLoading(true)
      // const response = await serviceLogin(state)
      // response.data.accessToken = response.accessToken
      // setCurrentUser(response.data)
      setLoading(false)
      history.push("/");
    } catch (e) {
      setLoading(false)
      console.log(e)
    }
  }

  useEffect(() => {
    if (getCurrentUser()) {
      history.push("/");
    }
  })

  return (<LoginView 
    state={state} 
    loading={loading} 
    handleLogin={handleLogin}
    onTextChange={onTextChange}
  />)
}