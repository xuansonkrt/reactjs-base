
import { connect } from 'react-redux';
import { IRootState } from 'src/app/shared/reducers';
import {
  handleSearchSchedule
  , handleUpdateMsg
} from 'src/app/modules/test/test-list/test-list-reducer';
import { toast } from 'react-toastify';
import { toastMsg } from 'src/app/shared/components/toast/toast-msg.reducer';
import { Button } from 'primereact/button';
import { translate } from 'react-jhipster';
import { useState } from 'react';
import {setLocale} from 'src/app/shared/reducers/locale';
type ITestIndexProps = StateProps& DispatchProps & {
}

const TestIndex = (props: ITestIndexProps) => {

  const [count, setCount] = useState(1);

  const onclickToast = () => {

    toast.success("ahihi");
    // toast.info("action.meta.successMessage");
    // toast.error("action.meta.successMessage");
    // toast.warn("action.meta.successMessage");
    // props.toastMsg('success', "sonnx ahihi");
  }

  const onclickUpdateMsg = () => {
    props.handleUpdateMsg();
  }

  const onclickButtonSearch = () => {
    props.handleSearchSchedule();
  }

  const onclickI18n = ()  => {
    const a = ['vn_vi', 'en_us'];
    console.log('onclickI18n', a[count % 2])
    // props.setLocale(a[count % 2]);
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <Button  icon="pi pi-check" label="Click i18n!" onClick={onclickI18n} />
        test translate: {translate('test.name')}
      </div>
      <br />
      <div>
        <Button label="Click toast!" onClick={onclickToast} />
      </div>
      <br />
      <div>
        <Button label="Click me!" onClick={onclickUpdateMsg} />
        {props.message}
      </div>
      <br />
      <Button label="Click search!" onClick={onclickButtonSearch} />


    </>
  );
};
const mapStateToProps = ({ testListReducerState }: IRootState) => ({
  listSchedule: testListReducerState.listSchedule,
  message: testListReducerState.message
});

const mapDispatchToProps = {
  handleSearchSchedule,
  handleUpdateMsg,
  toastMsg,
  setLocale
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestIndex);
