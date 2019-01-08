import React, {PureComponent} from 'react';
import classes from './Header.less';
import Logo from '../../components/Logo/Logo';
import Search from './components/Search/Search';
import FilmInfo from './components/FilmInfo/FilmInfo';

export class Header extends PureComponent {
  
  render(){
    const page = 'info';
    return (
      <div className={classes.Header}>
        <Logo page={page} />
        <FilmInfo />
      </div>
    );
  }
}
//<Search />

export default Header;