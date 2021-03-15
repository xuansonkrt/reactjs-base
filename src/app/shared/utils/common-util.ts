
export const JSON_STRINGIFY = (s: any) => {
  return JSON.stringify(typeof s === 'undefined' ? null : s).replace(/"(\w+)"\s*:/g, '$1:');
};


export class CommonUtil {
  static NVL = (value: any, valueDefault?: any) => {
    return value === undefined
      ? valueDefault === undefined
        ? null
        : JSON_STRINGIFY(valueDefault)
      : JSON_STRINGIFY(value);
  };
}