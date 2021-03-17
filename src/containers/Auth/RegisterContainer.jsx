import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

import RegisterView from 'src/views/pages/register/RegisterView'
import { getCurrentUser, setCurrentUser } from 'src/utils/helper';
import { serviceRegister } from 'src/service/auth';


export default function RegisterContainer() {
  let history = useHistory();

  const [loading, setLoading] = useState(false)
  const [state, setState] = useState({ 
    confirmPassword: "",
    displayName: "", 
    email: "", 
    password: "", 
  })

  const onTextChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const handleRegister = async () => {
    try {
      const { email, password, confirmPassword } = state
      if(!email) {
        return swal("Oops!", "Please enter email", "warning")
      }
      if(!password) {
        return swal("Oops!", "Please enter password", "warning")
      }
      if(password !== confirmPassword ) {
        return swal("Oops!", "Password not match!", "warning")
      }
      setLoading(true)
      const response = await serviceRegister(state)
      response.data.accessToken = response.accessToken
      setCurrentUser(response.data)
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

  return (<RegisterView 
    state={state} 
    loading={loading} 
    handleRegister={handleRegister}
    onTextChange={onTextChange}
  />)
}