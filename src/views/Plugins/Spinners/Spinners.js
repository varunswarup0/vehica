import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CSpinner
} from '@coreui/react'

import './Spinners.scss'

const Spinners = () => {

  return (
    <>
      <CRow>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Border (default)
            </CCardHeader>
            <CCardBody>
              <CSpinner/>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Border (size small)
            </CCardHeader>
            <CCardBody>
              <CSpinner size="sm"/>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Grow
            </CCardHeader>
            <CCardBody>
              <CSpinner grow color="primary"/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <hr/>

      <CCard>
        <CCardHeader>
          Spinners - SpinKit{' '}
          <a href="https://coreui.io/pro/react/" rel="noopener noreferrer" target="_blank">CoreUI Pro Component</a>
          <div className="card-header-actions">
            <a href="https://github.com/tobiasahlin/SpinKit" rel="noopener noreferrer" target="_blank" className="card-header-action">
            <small className="text-muted">docs</small></a>
          </div>
        </CCardHeader>
        <CCardBody>
          <p>
            Simple loading spinners animated with CSS. SpinKit uses hardware accelerated (translate and opacity) CSS animations to create smooth and easily customizable animations.
          </p>
        </CCardBody>
      </CCard>
      <CRow>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Rotating plane
            </CCardHeader>
            <CCardBody>
              <div className="sk-rotating-plane"></div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Double bounce
            </CCardHeader>
            <CCardBody>
              <div className="sk-double-bounce">
                <div className="sk-child sk-double-bounce1"></div>
                <div className="sk-child sk-double-bounce2"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Wave
            </CCardHeader>
            <CCardBody>
              <div className="sk-wave">
                <div className="sk-rect sk-rect1"></div>&nbsp;
                <div className="sk-rect sk-rect2"></div>&nbsp;
                <div className="sk-rect sk-rect3"></div>&nbsp;
                <div className="sk-rect sk-rect4"></div>&nbsp;
                <div className="sk-rect sk-rect5"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Wandering cubes
            </CCardHeader>
            <CCardBody>
              <div className="sk-wandering-cubes">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Pulse
            </CCardHeader>
            <CCardBody>
              <div className="sk-spinner sk-spinner-pulse"></div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Chasing dots
            </CCardHeader>
            <CCardBody>
              <div className="sk-chasing-dots">
                <div className="sk-child sk-dot1"></div>
                <div className="sk-child sk-dot2"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Three bounce
            </CCardHeader>
            <CCardBody>
              <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Circle
            </CCardHeader>
            <CCardBody>
              <div className="sk-circle">
                <div className="sk-circle1 sk-child"></div>
                <div className="sk-circle2 sk-child"></div>
                <div className="sk-circle3 sk-child"></div>
                <div className="sk-circle4 sk-child"></div>
                <div className="sk-circle5 sk-child"></div>
                <div className="sk-circle6 sk-child"></div>
                <div className="sk-circle7 sk-child"></div>
                <div className="sk-circle8 sk-child"></div>
                <div className="sk-circle9 sk-child"></div>
                <div className="sk-circle10 sk-child"></div>
                <div className="sk-circle11 sk-child"></div>
                <div className="sk-circle12 sk-child"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Cube grid
            </CCardHeader>
            <CCardBody>
              <div className="sk-cube-grid">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Fading circle
            </CCardHeader>
            <CCardBody>
              <div className="sk-fading-circle">
                <div className="sk-circle1 sk-circle"></div>
                <div className="sk-circle2 sk-circle"></div>
                <div className="sk-circle3 sk-circle"></div>
                <div className="sk-circle4 sk-circle"></div>
                <div className="sk-circle5 sk-circle"></div>
                <div className="sk-circle6 sk-circle"></div>
                <div className="sk-circle7 sk-circle"></div>
                <div className="sk-circle8 sk-circle"></div>
                <div className="sk-circle9 sk-circle"></div>
                <div className="sk-circle10 sk-circle"></div>
                <div className="sk-circle11 sk-circle"></div>
                <div className="sk-circle12 sk-circle"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Folding Cube
            </CCardHeader>
            <CCardBody>
              <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Spinners
