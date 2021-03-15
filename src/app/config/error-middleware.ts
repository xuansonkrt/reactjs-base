import { isPromise } from 'react-jhipster';
import { toast } from 'react-toastify';

const getErrorMessage = errorData => {
  let message = errorData.message;
  if (errorData.fieldErrors) {
    errorData.fieldErrors.forEach(fErr => {
      message += `\nfield: ${fErr.field},  Object: ${fErr.objectName}, message: ${fErr.message}\n`;
    });
  }
  return message;
};

export default () => next => action => {
  // If not a promise, continue on
  if (action && !isPromise(action.payload)) {
    return next(action);
  }

  /**
   *
   * The error middleware serves to dispatch the initial pending promise to
   * the promise middleware, but adds a `catch`.
   * It need not run in production
   */
  if (process.env.NODE_ENV === 'development') {
    // Dispatch initial pending promise, but catch any errors
    if (!action) {
      return null;
    }
    return next(action).catch(error => {
      console.error(`${action.type} caught at middleware with reason: ${JSON.stringify(error.message)}.`);

      toast.error("Bạn không có lỗi, lỗi ở chúng tôi 11111!");
      if (error && error.response && error.response.data) {
        const message = getErrorMessage(error.response.data);
        console.error(`Actual cause: ${message}`);
      }

      return Promise.reject(error);
    });
  } else {
    toast.error("Bạn không có lỗi, lỗi ở chúng tôi!");
  }
  return next(action);
};
