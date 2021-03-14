import { combineReducers } from "redux";
import menuLeft, { MenuLeftState } from "../layout/menu/sidebar-menu-left.reducer";
import authentication, { AuthenticationState } from "./authentication";
export const lastAction = (state = null, action) => action;

export interface IRootState {
    readonly authentication: AuthenticationState;
    readonly menuLeft: MenuLeftState;
}


const rootReducer = combineReducers<IRootState>({
    authentication,
    menuLeft
});

export default rootReducer;