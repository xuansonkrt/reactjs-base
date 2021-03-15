import { combineReducers } from "redux";
import testListReducerState, { TestListReducerState } from "src/app/modules/test/test-list/test-list-reducer";
import menuLeft, { MenuLeftState } from "../layout/menu/sidebar-menu-left.reducer";
import authentication, { AuthenticationState } from "./authentication";
import applicationProfileState, { ApplicationProfileState } from "./application-profile";
import toastMsgState, { ToastMsgState } from "../components/toast/toast-msg.reducer";
import locale, { LocaleState } from "./locale";

export const lastAction = (state = null, action) => action;

export interface IRootState {
    readonly authentication: AuthenticationState;
    readonly menuLeft: MenuLeftState;
    readonly testListReducerState: TestListReducerState;
    readonly applicationProfileState: ApplicationProfileState;
    readonly toastMsgState: ToastMsgState;
    readonly locale: LocaleState;
}


const rootReducer = combineReducers<IRootState>({
    authentication,
    menuLeft,
    testListReducerState,
    applicationProfileState,
    toastMsgState,
    locale
});

export default rootReducer;