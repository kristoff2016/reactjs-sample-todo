import React from 'react'
import {
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CButton,
  CRow,
  CCol,
  CSelect,
  CLabel,
  CFormGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle
} from '@coreui/react'
import TodoListComponent from 'src/components/TodoListComponent'
import TodoListEmptyComponent from 'src/components/TodoListEmptyComponent'
import { TO_DO_STATUS } from 'src/utils/constant'

const DashboardView = ({
  items,
  loading,
  Cloading,
  modal,
  onChangeCheckBox,
  handleFilter,
  state,
  onTextChange,
  onHandleSearchChange,
  handleToggleModal,
  handleCreateToDo
}) => {
  return (
  <div>
    <CInputGroup style={{
      marginBottom: 15
    }}>
      <CInput size="16" type="text" onChange={(e) => onHandleSearchChange(e.target.value)}  />
      <CInputGroupAppend>
        <CButton 
          color="secondary" 
          placeholder="Search"   
         >Search</CButton>
      </CInputGroupAppend>
    </CInputGroup>
    <CRow>
    <CCol md="6">
      <h2> To do </h2>
    </CCol>
     <CCol md="6">
        <CButton 
          type="reset" 
          block 
          color="success"
          onClick={() => handleToggleModal()}
        > Create New Todo
      </CButton>
      </CCol>
    </CRow>

    <CFormGroup>
      <CLabel>Filter</CLabel>
      <CSelect custom name="filter" onChange={(e) => handleFilter(e.target.value)}>
        <option value=''>Filter</option>
        <option value={TO_DO_STATUS.COMPLETE}>COMPLETE</option>
        <option value={TO_DO_STATUS.INCOMPLETE}>INCOMPLETE</option>
      </CSelect>
    </CFormGroup>

    <div style={{
      marginTop: 15
    }}>
      
    {items.length > 0 ? (
      items.map((object, index) => {
        return (
          <TodoListComponent 
            key={index} 
            item={object}
            onChange={onChangeCheckBox}
        />)
      }) 
    ): (<TodoListEmptyComponent  />)}

    {loading && (
      <h3 className="text-center">Loading...</h3>
    )}
    </div>

    <CModal show={modal}>
    <CModalHeader closeButton>
      <CModalTitle>Create to do</CModalTitle>
    </CModalHeader>
    <CModalBody>
    <CInput 
      type="text" 
      name="title"
      placeholder="Create new todo" 
      value={state.title}
      onChange={(e) => onTextChange(e)}
    />
    </CModalBody>
    <CModalFooter>
      <CButton color="primary"
      onClick={() => handleCreateToDo()}
      >
        { Cloading ? 'Creating...': 'Create' }
      </CButton>{' '}
      <CButton color="secondary"
       onClick={() => handleToggleModal()}>
        Cancel
      </CButton>
    </CModalFooter>
  </CModal>
  </div>
  )
}

export default DashboardView
