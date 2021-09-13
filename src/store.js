import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  sidebarShow: "responsive",
  asideShow: false,
  // formId: null,
  // showViewForm: false,
  // darkMode: false

  //Registrations => Pending/ Wait
  showRegistrationsAside: false,
  registrationsId: null,

  //setSignUpDetails
  id: "",
  companyName: "",
  companyType: "",
  email: "",
  password: "",

  //Channel Partner
  showChannelPartnerModal: false,
  channelPartnerType: null,
  channelPartnerCompanyId: null,
  // channelPartnerEmployeeId: null,
};

const changeState = (state = initialState, { type, payload, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    // case "view":
    //   return { ...state, ...rest };
    case "action":
      return { ...state, ...rest };
    case "setSignUpDetails":
      return {
        ...state,
        ...rest,
        id: payload.id,
        companyName: payload.companyName,
        companyType: payload.companyType,
        email: payload.email,
        password: payload.password,
      };
    case "setCompanyName":
      return {
        ...state,
        ...rest,
        // id: payload.id,
        // email: payload.email,
        companyName: payload.companyName,
      };
    case "destroySignUpDetails":
      return {
        ...state,
        ...rest,
        // id: "",
        email: "",
        // password: "",
      };
    case "addChannelPartnerCompany":
      return {
        ...state,
        ...rest,
        channelPartnerType: payload.channelPartnerType,
      };
    case "addChannelPartnerEmployee":
      return {
        ...state,
        ...rest,
        channelPartnerType: payload.channelPartnerType,
        channelPartnerCompanyId: payload.channelPartnerCompanyId,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, changeState);
const store = createStore(persistedReducer);
let persistor = persistStore(store);
export { store, persistor };
