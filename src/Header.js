import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className={'main-header'}>
      <Link to={'/create'} className={'default-button'}>Добавить</Link>
    </header>
  );
};

export default Header;