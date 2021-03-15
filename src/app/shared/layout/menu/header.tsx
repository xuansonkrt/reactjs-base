import React from 'react';

export interface IHeaderProps {
  isAuthenticated?: boolean;
}

const Header = (props: IHeaderProps) => {
  return <>
    <div style={{textAlign: 'center'}}>
    Header
    </div>
  </>;
};

export default Header;
