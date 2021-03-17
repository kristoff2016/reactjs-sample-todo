import React from 'react'
import { CCard, CCardBody, CFormGroup, CInputCheckbox, CLabel } from '@coreui/react'
import { TO_DO_STATUS } from 'src/utils/constant'

const TodoListComponent = ({ 
  item,
  onChange
 }) => {
  const checkStatus = (status) => {
    return status === TO_DO_STATUS.COMPLETE ? true : false
  }
  return (
    <CCard style={{
      marginBottom: 10
    }}>
      <CCardBody>
        <CFormGroup variant="custom-checkbox" inline>
          <CInputCheckbox 
            data-testid={item.id}
            onChange={() => onChange(item)}
            custom 
            id={item.id} 
            name='checkbox' 
            value={item.id} 
            checked={checkStatus(item.status)}
          />
          <CLabel variant="custom-checkbox" 
            style={{
             textDecoration: item.status === TO_DO_STATUS.COMPLETE ? 'line-through' : 'none'
            }} 
            htmlFor={item.id}>{item.title}</CLabel>
        </CFormGroup>
      </CCardBody>
    </CCard>
  )
}

export default TodoListComponent