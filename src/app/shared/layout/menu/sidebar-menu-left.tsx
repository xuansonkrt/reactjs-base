
import { connect } from 'react-redux';
import { IRootState } from '../../reducers';

export interface ISidebarMenuLeftProps extends StateProps, DispatchProps {
  componentDisplay: string;
}

const SidebarMenuLeft = (props: ISidebarMenuLeftProps) => {
  return (
    <>
      
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
)(SidebarMenuLeft);
