import React from 'react'
import {
  CSidebar,
  CSidebarNav,
  CSidebarNavItem,
  CButton
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'

const EmailNav = () => {
  return (
    <CSidebar fixed={false} colorScheme="light">
      <CButton className="d-flex m-3" to="./compose" color="success">
        <CIcon name="cil-inbox" customClasses="c-sidebar-nav-icon"/>New Email
      </CButton>
      <CSidebarNav>
        <CSidebarNavItem 
          to="./inbox"
          icon="cil-inbox"
          name="Inbox"
          badge={{ text: 4, color: 'danger' }}
        />      
        <CSidebarNavItem 
          icon="cil-star"
          name="Stared"
        />
        <CSidebarNavItem 
          icon="cil-paper-plane"
          name="Sent"
        />
        <CSidebarNavItem 
          icon="cil-trash"
          name="Trash"
        />
        <CSidebarNavItem 
          icon="cil-bookmark"
          name="Important"
          badge={{ text: 5, color: 'info' }}
        />
        <CSidebarNavItem 
          icon="cil-inbox"
          name="Spam"
          badge={{ text: 42, color: 'warning' }}
        />
      </CSidebarNav>
    </CSidebar>
  )
}

export default EmailNav
