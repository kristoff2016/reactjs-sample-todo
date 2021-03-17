import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import debounce from "lodash/debounce";
import swal from 'sweetalert';

import { TO_DO_STATUS } from 'src/utils/constant';
// import { StateContext } from 'src/containers/StateProvider';

import { isAuthenticated } from 'src/utils/helper'
import DashboardView from 'src/views/dashboard/DashboardView'
import { serviceCreateTodo, serviceGetTodo, serviceUpdateTodo } from 'src/service/todo';

const nameSpace = '[containers/Dashboard/DashboardContainer]';
const initState = {
  title: "", 
  status: TO_DO_STATUS.INCOMPLETE
}
export default function DashboardContainer() {
  let history = useHistory()
  const [loading, setLoading] = useState(false)
  const [Cloading, setCloading] = useState(false)
  const [state, setState] = useState(initState)
  const [items, setItems] = useState([])
  const [option] = useState({ search: '', filter: '' })
  const [modal, setModal] = useState(false)

  // how to actions and state here? 
  // const { state, actions } = useContext(StateContext);
  // example: actions.storeAuth(data)
  // and then we can use example: const { auth } = state || {}

  const onTextChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }
  const handleFilter = async(item) => {
    try {
      option.filter = item
      handleGetTodo(option)
    } catch(e) {
      console.log(`${nameSpace} - handleFilter ${e}`)
    }
  }
  const onChangeCheckBox = async(item) => {
    try {
      await serviceUpdateTodo(item.id, {
        status: item.status === TO_DO_STATUS.INCOMPLETE ? TO_DO_STATUS.COMPLETE : TO_DO_STATUS.INCOMPLETE
      })
      handleGetTodo(option)
    } catch(e) {
      console.log(`${nameSpace} - onChangeCheckBox ${e}`)
    }
  }

  const onHandleSearchChange = debounce(textSearch => {
    option.search = textSearch
    handleGetTodo(option)
  }, 500);

  const handleCreateToDo = async() => {
    try {
      const { title } = state 
      if(!title) {
        return swal("Oops!", "Please enter title", "warning")
      }
      setCloading(true)
      await serviceCreateTodo(state)
      swal("Success", "Todo has been created successfully.", "success")
      setCloading(false)
      setModal(false)
      setState(initState)
    }catch(e) {
      setCloading(false)
      console.log(`${nameSpace} - create todo ${e}`)
    }
  }

  const handleGetTodo = async(option) => {
    try {
      setLoading(true)
      const response = await serviceGetTodo(option)
      setItems(response.data)
      setLoading(false)
    } catch(e) {
      setLoading(false)
      console.log(`${nameSpace} - get todo ${e}`)
    }
  }

  const handleToggleModal = () => {
    setModal(!modal)
  }

  useEffect(() => {
    handleGetTodo(option)
  }, [option])

  useLayoutEffect(() => {
    if (!isAuthenticated()) {
      history.push("/login")
    }
    return
  }, [history])


  return (
    <DashboardView 
      state={state}
      loading={loading}
      Cloading={Cloading}
      items={items}
      modal={modal}
      onTextChange={onTextChange}
      handleCreateToDo={handleCreateToDo} 
      onChangeCheckBox={onChangeCheckBox}
      handleFilter={handleFilter}
      handleToggleModal={handleToggleModal}
      onHandleSearchChange={onHandleSearchChange}
  />)
}