import { FAILURE, REQUEST, SUCCESS } from "../../../shared/reducers/action-type.util";
import { ACTION_TYPES } from "../constants";
import axios from 'axios';
import { CONFIG, SERVICE_CONFIG } from "../../../config/app-config";

interface ITestListReducerState {

}

// API base URL
const apiUrlScheduleService = `${SERVICE_CONFIG.BA_SERVICE_URL}${CONFIG.API_PATH['schedule']}`;

export enum TestAction {
  None,
  Request,
  Error,
  Success
}

const initialState = {
  data: new Map<string, ITestListReducerState>(),
  message: 'sonnx ahihi',
  listSchedule: [],
  action: TestAction.None
};

export type TestListReducerState = Readonly<typeof initialState>;


const getDataSuccess = (state, action) => {
  switch (action.type) {
    case SUCCESS(ACTION_TYPES.SCHEDULE_SEARCH): {
      return {
        ...state,
        listSchedule: action.payload.data
      };
    }
    default:
      return state;
  }
};

// Reducer
export default (state: TestListReducerState = initialState, action): TestListReducerState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.SCHEDULE_SEARCH):
      return {
        ...state,
        action: TestAction.Request
      };
    case FAILURE(ACTION_TYPES.SCHEDULE_SEARCH):
      return {
        ...state,
        action: TestAction.Error
      };

    case ACTION_TYPES.SCHEDULE_SEARCH:
      return {
        ...state
      };
    case ACTION_TYPES.UPDATE_MSG:
      return {
        ...state,
        message: action.payload
      };
    default:
      return getDataSuccess(state, action);
  }
};


export const handleSearchSchedule = () => ({
  type: ACTION_TYPES.SCHEDULE_SEARCH,
  payload: axios.get(`${apiUrlScheduleService}/search`, {
    headers: { ['Content-Type']: 'application/json' }
  })
});


export const handleUpdateMsg = () => ({
  type: ACTION_TYPES.UPDATE_MSG,
  payload: 'update msg success'
});