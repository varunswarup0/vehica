import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CSwitch
} from '@coreui/react'

const Switches = () => {
  return (
    <CRow>
      <CCol xs="12" md="12">
        <CCard>
          <CCardHeader>
            3d Switch
            {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} checked onCheckedChange={(c)=>console.log(c)}/>
            <CSwitch className={'mx-1'} variant={'3d'} color={'secondary'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'success'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'warning'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'info'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'danger'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'light'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'dark'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'primary'}  />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch default
          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} color={'primary'} checked />
            <CSwitch className={'mx-1'} color={'secondary'} checked />
            <CSwitch className={'mx-1'} color={'success'} checked />
            <CSwitch className={'mx-1'} color={'warning'} checked />
            <CSwitch className={'mx-1'} color={'info'} checked />
            <CSwitch className={'mx-1'} color={'danger'} checked />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch default - pills
          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'success'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'info'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} checked />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol md="12">
        <h4>Outline</h4>
      </CCol>

      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch outline

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} color={'primary'} variant="outline" checked />
            <CSwitch className={'mx-1'} color={'secondary'} variant="outline" checked />
            <CSwitch className={'mx-1'} color={'success'} variant="outline" checked />
            <CSwitch className={'mx-1'} color={'warning'} variant="outline" checked />
            <CSwitch className={'mx-1'} color={'info'} variant="outline" checked />
            <CSwitch className={'mx-1'} color={'danger'} variant="outline" checked />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch outline pills

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} variant="outline" checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} variant="outline" checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'success'} variant="outline" checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} variant="outline" checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'info'} variant="outline" checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} variant="outline" checked />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol md="12">
        <h4>Opposite</h4>
      </CCol>

      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch outline alternative

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} color={'primary'} variant="opposite" checked />
            <CSwitch className={'mx-1'} color={'secondary'} variant="opposite" checked />
            <CSwitch className={'mx-1'} color={'success'} variant="opposite" checked />
            <CSwitch className={'mx-1'} color={'warning'} variant="opposite" checked />
            <CSwitch className={'mx-1'} color={'info'} variant="opposite" checked />
            <CSwitch className={'mx-1'} color={'danger'} variant="opposite" checked />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch outline alternative - pills

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} variant={'opposite'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} variant={'opposite'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'success'} variant={'opposite'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} variant={'opposite'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'info'} variant={'opposite'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} variant={'opposite'} checked />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol md="12">
        <h4>With text</h4>
      </CCol>

      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch with text

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'secondary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'success'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'warning'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'info'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'danger'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch with text pills

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'success'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'info'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch with text outline

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} color={'primary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'secondary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'success'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'warning'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'info'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'danger'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch with text outline pills

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'success'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'info'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch with text outline alternative

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} color={'primary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'secondary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'success'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'warning'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'info'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'danger'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch with text outline alternative pills

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'success'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'info'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol md="12">
        <h4>With icon</h4>
      </CCol>

      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch with text

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'secondary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'success'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'warning'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'info'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'danger'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch with text pills

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'success'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'info'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch with text outline

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} color={'primary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'secondary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'success'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'warning'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'info'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'danger'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch with text outline pills

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'success'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'info'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} variant="outline" labelOn={'\u2713'} labelOff={'\u2715'} checked />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch with text outline alternative

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} color={'primary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'secondary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'success'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'warning'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'info'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} color={'danger'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch with text outline alternative pills

          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'secondary'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'success'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'warning'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'info'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
            <CSwitch className={'mx-1'} shape={'pill'} color={'danger'} variant={'opposite'} labelOn={'\u2713'} labelOff={'\u2715'} checked />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol md="12">
        <h4>Disabled</h4>
      </CCol>

      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch
          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} checked disabled />
            <CSwitch className={'mx-1'} variant={'3d'} color={'secondary'} checked disabled />
            <CSwitch className={'mx-1'} variant={'3d'} color={'success'} checked disabled />
            <CSwitch className={'mx-1'} variant={'3d'} color={'warning'} checked disabled />
            <CSwitch className={'mx-1'} variant={'3d'} color={'info'} checked disabled />
            <CSwitch className={'mx-1'} variant={'3d'} color={'danger'} checked disabled />
            <CSwitch className={'mx-1'} variant={'3d'} color={'light'} checked disabled />
            <CSwitch className={'mx-1'} variant={'3d'} color={'dark'} checked disabled />
            <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} disabled />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch
          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} color={'primary'} checked variant="opposite" />
            <CSwitch className={'mx-1'} color={'secondary'} checked variant="opposite" />
            <CSwitch className={'mx-1'} color={'success'} checked variant="opposite" />
            <CSwitch className={'mx-1'} color={'warning'} checked variant="opposite" />
            <CSwitch className={'mx-1'} color={'info'} checked variant="opposite" />
            <CSwitch className={'mx-1'} color={'danger'} checked variant="opposite" />
            <CSwitch className={'mx-1'} color={'light'} checked variant="opposite" />
            <CSwitch className={'mx-1'} color={'dark'} checked variant="opposite" />
            <CSwitch className={'mx-1'} color={'primary'} variant="opposite" disabled />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol md="12">
        <h4>3D</h4>
      </CCol>

      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch
          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'secondary'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'success'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'warning'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'info'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'danger'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'light'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'dark'} checked />
            <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch
          </CCardHeader>
          <CCardBody>
            <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} checked labelOn={'\u2713'} labelOff={'\u2715'} />
            <CSwitch className={'mx-1'} variant={'3d'} color={'secondary'} checked labelOn={'\u2713'} labelOff={'\u2715'}/>
            <CSwitch className={'mx-1'} variant={'3d'} color={'success'} checked labelOn={'\u2713'} labelOff={'\u2715'}/>
            <CSwitch className={'mx-1'} variant={'3d'} color={'warning'} checked labelOn={'\u2713'} labelOff={'\u2715'}/>
            <CSwitch className={'mx-1'} variant={'3d'} color={'info'} checked labelOn={'\u2713'} labelOff={'\u2715'}/>
            <CSwitch className={'mx-1'} variant={'3d'} color={'danger'} checked labelOn={'\u2713'} labelOff={'\u2715'}/>
            <CSwitch className={'mx-1'} variant={'3d'} color={'light'} checked labelOn={'\u2713'} labelOff={'\u2715'}/>
            <CSwitch className={'mx-1'} variant={'3d'} color={'dark'} checked labelOn={'\u2713'} labelOff={'\u2715'}/>
            <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'}/>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol md="12">
        <h4>Sizes</h4>
      </CCol>

      <CCol xs="12">
        <CCard>
          <CCardHeader>
            Sizes
          </CCardHeader>
          <CCardBody className="p-0">
            <table className="table table-hover table-striped table-align-middle mb-0">
              <thead>
              <tr>
                <th>Size</th>
                <th>Example</th>
                <th>Props</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  Large
                </td>
                <td>
                  <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} checked size={'lg'} />
                </td>
                <td>
                  Add <code>size={'lg'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  Normal
                </td>
                <td>
                  <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} checked  />
                </td>
                <td>
                  -
                </td>
              </tr>
              <tr>
                <td>
                  Small
                </td>
                <td>
                  <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} checked size={'sm'} />
                </td>
                <td>
                  Add <code>size={'sm'}</code>
                </td>
              </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Switches
