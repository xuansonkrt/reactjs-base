
import { connect } from 'react-redux';
import { IRootState } from 'src/app/shared/reducers';

export interface ITestIndexProps extends StateProps, DispatchProps {
  componentDisplay: string;
}

const TestIndex = (props: ITestIndexProps) => {
  return (
    <>
      sonnx
    </>
  );
};
const mapStateToProps = ({ }: IRootState) => ({

});

const mapDispatchToProps = {
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestIndex);
