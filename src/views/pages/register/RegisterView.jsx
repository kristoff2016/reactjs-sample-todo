import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const RegisterView = ({
  loading,
  state,
  handleRegister,
  onTextChange
}) => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                      type="text" 
                      name="displayName"
                      placeholder="DisplayName" 
                      value={state.displayName}
                      onChange={(e) => onTextChange(e)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                      type="email" 
                      name="email"
                      placeholder="Email"
                      value={state.email}
                      onChange={(e) => onTextChange(e)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                      type="password" 
                      name="password"
                      placeholder="Password" 
                      value={state.password}
                      onChange={(e) => onTextChange(e)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                      type="password"
                      name="confirmPassword" 
                      placeholder="Repeat password" 
                      value={state.confirmPassword}
                      onChange={(e) => onTextChange(e)}
                    />
                  </CInputGroup>
                  <CButton 
                    color="success" 
                    block 
                    onClick={() => handleRegister()}
                  >
                    { loading? 'Creating...': 'Create Account' }
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default RegisterView
