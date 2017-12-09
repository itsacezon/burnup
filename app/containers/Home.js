import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { isEmpty } from 'lodash';

import { getEntity } from 'actions/Entity';
import Home from 'components/Home';

export const mapStateToProps = state => {
  const {
    isFetching,
    data,
  } = isEmpty(state.entity)
    ? { isFetching: undefined, data: undefined }
    : state.entity;

  return {
    isFetching,
    data,
  };
};

export const mapDispatchToProps = dispatch => ({
  getEntity: bindActionCreators(getEntity, dispatch),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),

  withProps({
    sample: 'Hi there!',
  })
)(Home);
