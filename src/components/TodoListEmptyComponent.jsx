import React from 'react'
import { CCard, CCardBody } from '@coreui/react'

const TodoListEmptyComponent = ({
  items = [{}, {}]
}) => {
  return (
    <div>
      {items.map((object, index) => {
      return(
        <CCard
         key={index}
         style={{
          marginBottom: 10,
          background: '#768192'
        }}>
        <CCardBody className="d-flex flex-row align-items-center">
          <div style={{
            background: '#ebedef',
            height: 20,
            width: '5%',
            borderRadius: 3,
            marginRight: 10
          }}/>
          <div style={{
            background: '#ebedef',
            height: 20,
            width: '50%',
            borderRadius: 3
          }}/>
        </CCardBody>
      </CCard>
    )})}
    </div>
  )
}

export default TodoListEmptyComponent