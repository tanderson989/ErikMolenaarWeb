import * as React from 'react';
import * as style from './style.css';

export namespace Header {
  export interface HeaderProps {
    
  }

  export interface HeaderState {
    displayVideoMenu: boolean;
  }
}

export class Header extends React.Component<Header.HeaderProps, Header.HeaderState> {
  constructor(props: Header.HeaderProps, context?: any) {
    super(props, context);

    this.state = { displayVideoMenu: false }

    this.showVideoMenu = this.showVideoMenu.bind(this);
    this.hideVideoMenu = this.hideVideoMenu.bind(this);
  }

  showVideoMenu() {
    this.setState({displayVideoMenu: true});
  }

  hideVideoMenu() {
    this.setState({displayVideoMenu: false});
  }

  render() {
    const { displayVideoMenu} = this.state;

    return (
      <header>
        <div className={style.name}>Erik Molenaar</div>
        <div className={style.tabList}>
          {!displayVideoMenu && <div className={style.tab} onMouseEnter={this.showVideoMenu}>VIDEOS</div>}
          {displayVideoMenu && <div className={style.hoveredTab} onMouseEnter={this.showVideoMenu} onMouseLeave={this.hideVideoMenu}>VIDEOS</div>}
          {displayVideoMenu && <div className={style.videoMenuList} onMouseEnter={this.showVideoMenu} onMouseLeave={this.hideVideoMenu}>
              <div className={style.menuItem}>Corporate</div>
              <div className={style.menuItem}>Music</div>
            </div>
          }
          <div className={style.tab}>STILLS</div>
          <div className={style.tab}>REEL</div>
          <div className={style.tab}>LIVE</div>
          <div className={style.tab}>ABOUT</div>
          <div className={style.tab}>CONTACT</div>
        </div>
      </header>
    );
  }
}
