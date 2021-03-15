
export enum ActionSession {
  None,
  Request,
  Done
}

/**
 * initial state
 */
const initialState = {
  isLoading: false,
  isAuthenticated: false,
  isLoginSuccess: false,
  isLoginError: false, // Errors returned from server side
  account: {} as any,
  signInUrl: null as string,
  errorMessage: null as string, // Errors returned from server side
  redirectMessage: null as string,
  isSessionHasBeenFetched: false,
  idToken: null as string,
  isLogoutSuccess: false,
  isPasswordExpired: false,
  online: -1,
  newPasswordRequired: false,
  isAccept: null as boolean,
  isAccessContract: null as boolean,
  isModifyEmployee: null as boolean,
  statusContract: null as number,
  dayRemainTrial: null as number,
  msgContract: null as string,
  siteContract: null as string,
  isEmployeeExisted: false,
  isMissingLicense: false,
  checkLicenses: null,
  infoEmpChatplus: null,
  advertisementHtml: null as string
};

export const ACTION_TYPES = {
  CLEAR_AUTH: 'authentication/CLEAR_AUTH',
  ERROR_MESSAGE: 'authentication/ERROR_MESSAGE'
};

export type AuthenticationState = Readonly<typeof initialState>;



export default (state: AuthenticationState = initialState, action): AuthenticationState => {
  switch (action.type) {
    case ACTION_TYPES.ERROR_MESSAGE:
      return {
        ...initialState,
        redirectMessage: action.message
      };
    case ACTION_TYPES.CLEAR_AUTH:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false
      };
    default:
      return {
        ...state,
      };
  }
};


export const displayAuthError = message => ({ type: ACTION_TYPES.ERROR_MESSAGE, message });

export const clearAuthentication = messageKey => (dispatch, getState) => {
  dispatch(displayAuthError(messageKey));
  dispatch({
    type: ACTION_TYPES.CLEAR_AUTH
  });
};
