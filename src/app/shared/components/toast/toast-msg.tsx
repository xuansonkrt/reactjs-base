import { Toast } from 'primereact/toast';
import { IRootState } from '../../reducers';
import { connect } from 'react-redux';
import { useEffect, useRef } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export interface IToastMsgProps extends StateProps, DispatchProps {

}

const ToastMsg = (props: IToastMsgProps) => {
  const toast = useRef(null);

  useEffect(() => {
    if(props.type && props.message)
      toast.current.show({severity: props.type, summary: 'Success Message', detail: 'Order submitted'});
  }, [props.type, props.message])

  return (
    <>
       <Toast ref={toast}
         position="top-right" />
    </>
  );
};
const mapStateToProps = ({ toastMsgState }: IRootState) => ({
  type: toastMsgState.type,
  message: toastMsgState.message
});

const mapDispatchToProps = {
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastMsg);
