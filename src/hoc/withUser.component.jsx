import React from 'react';
import { useSelector } from 'react-redux';

const withUser = WrappedComponent => {
  const ChildComponent = props => {
    const { currentUser } = useSelector(state => state.user);
    return <WrappedComponent currentUser={currentUser} {...props} />;
  };

  return ChildComponent;
};

export default withUser;
