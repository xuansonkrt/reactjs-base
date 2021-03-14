/**
 * initial state
 */
const initialState = {
    isLoading: false,
    isAuthenticated: false,
    isLoginSuccess: false,
    isLoginError: false, // Errors returned from server side
    account: {} as any,
    signInUrl: null,
    errorMessage: null, // Errors returned from server side
    redirectMessage: null,
    isSessionHasBeenFetched: false,
    idToken: null,
    isLogoutSuccess: false,
    isPasswordExpired: false,
    online: -1,
    newPasswordRequired: false,
    isAccept: null,
    isAccessContract: null,
    isModifyEmployee: null,
    statusContract: null,
    dayRemainTrial: null,
    msgContract: null,
    siteContract: null,
    isEmployeeExisted: false,
    isMissingLicense: false,
    checkLicenses: null,
    infoEmpChatplus: null,
    advertisementHtml: null
  };

  export type AuthenticationState = Readonly<typeof initialState>;

  

  export default (state: AuthenticationState = initialState, action): AuthenticationState => {
    switch (action.type) {
      case 1:
      case 1:
      default:
        return {
          ...state,
        };
    }
  };
