import {
    startExecuting,
    endExecuting,
    startExecutingBottom,
    endExecutingBottom
} from '../shared/reducers/action-executing';
import { preventDoubleClick, preventDoubleClickBottom }from '../modules/modulo-bridge';
import _ from 'lodash';

export default function actionMiddleware(config = {}) {
    return store => next => action => {
        if (_.get(action, "meta.ignoreLoading")) {
            return next(action);
        }
        const isPending = new RegExp(`_PENDING`, 'g');
        if (preventDoubleClick.findIndex(e => action.type.includes(e)) >= 0) {
            let exeAction = "";
            if (_.get(action, "meta.namespace")) {
                exeAction = `${_.get(action, "meta.namespace")}_`;
            }
            if (_.get(action, "meta.fieldBelong")) {
                exeAction = `${_.get(action, "meta.fieldBelong")}_`;
            }
            if (action.type.match(isPending)) {
                exeAction = `${exeAction}${action.type.replace('_PENDING', '')}`;
                store.dispatch(startExecuting(exeAction, true));
            } else {
                exeAction = `${exeAction}${action.type.replace('_FULFILLED', '').replace('_REJECTED', '')}`;
                // setTimeout(() => {
                store.dispatch(endExecuting(exeAction));
                // }, 200)
            }
        } else if (preventDoubleClickBottom.findIndex(e => action.type.includes(e)) >= 0) {
            if (action.type.match(isPending)) {
                store.dispatch(startExecutingBottom(action.type.replace('_PENDING', ''), true));
            } else {
                store.dispatch(
                    endExecutingBottom(action.type.replace('_FULFILLED', '').replace('_REJECTED', ''))
                );
            }
        }
        return next(action);
    };
}
