import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabs,
  CTabContent,
  CTabPane,
  CListGroup,
  // CListGroupItem,
  // CSwitch,
  // CProgress,
  CSidebar,
  // CImg,
  CSidebarClose,
} from "@coreui/react";
import { CIcon } from "@coreui/icons-react";

const DefaultAside = () => {
  const show = useSelector((state) => state.asideShow);
  const dispatch = useDispatch();
  const setState = (state) => dispatch({ type: "set", asideShow: state });

  return (
    <CSidebar
      aside
      colorScheme="light"
      size="lg"
      overlaid
      show={show}
      onShowChange={(state) => setState(state)}
    >
      <CSidebarClose onClick={() => setState(false)} />
      <CTabs>
        <CNav variant="tabs" className="nav-underline nav-underline-primary">
          <CNavItem>
            <CNavLink>
              <CIcon name="cil-list" alt="CoreUI Icons List" />
            </CNavLink>
          </CNavItem>
          {/* <CNavItem>
            <CNavLink>
              <CIcon name="cil-speech" alt="CoreUI Icons Speech" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink>
              <CIcon name="cil-settings" alt="CoreUI Icons Settings" />
            </CNavLink>
          </CNavItem> */}
        </CNav>

        <CTabContent>
          <CTabPane>
            <CListGroup variant="accent">
              {/* <CListGroupItem
                color="secondary"
                className="bg-light text-center font-weight-bold text-muted text-uppercase small"
              >
                Tomorrow
              </CListGroupItem>
              <CListGroupItem
                accent="danger"
                href="#"
                className="list-group-item-divider"
              >
                <div>
                  New UI Project - <strong>deadline</strong>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi atque dolorem incidunt odio mollitia. Labore, minus.
                  Optio iure natus placeat id quod? Eum, magni debitis? Dolores,
                  assumenda. Dolorum, libero ad.
                </p>
              </CListGroupItem>
              {/* <CListGroupItem
                accent="success"
                href="#"
                className="c-list-group-item-divider"
              >
                <div>
                  <strong>#10 Startups.Garden</strong> Meetup
                </div>
                <small className="text-muted mr-3">
                  <CIcon name="cil-calendar" /> 1 - 3pm
                </small>
                <small className="text-muted">
                  <CIcon name="cil-location-pin" /> Palo Alto, CA
                </small>
              </CListGroupItem>
              <CListGroupItem
                accent="primary"
                href="#"
                className="c-list-group-item-divider"
              >
                <div>
                  <strong>Team meeting</strong>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi atque dolorem incidunt odio mollitia. Labore, minus.
                  Optio iure natus placeat id quod? Eum, magni debitis? Dolores,
                  assumenda. Dolorum, libero ad.
                </p>
              </CListGroupItem> */}
            </CListGroup>
          </CTabPane>

          <CTabPane className="p-3"></CTabPane>

          <CTabPane className="p-3"></CTabPane>
        </CTabContent>
      </CTabs>
    </CSidebar>
  );
};

export default React.memo(DefaultAside);
