import React, { useState } from 'react';

import Routes from '../constants/routes';
import { useAuth } from '../providers/Auth';
import { Menu,Button } from 'antd';
import { LogoutOutlined, LoginOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigation.css';
const { SubMenu } = Menu;
const linkStyle = {
    color: 'white',
};

const Navigation = ( props ) => {
  let location = useLocation();

  const [ menuState, setMenuState ] = useState( {
    current: location.pathname, // set the current selected item in menu, by default the current page
    collapsed: false,
    openKeys: []
  } );
  const { isAuthenticated, isCheckingAuth, currentUser } = useAuth();

  React.useEffect( () => {
    setMenuState( {
      ...menuState,
      current: location.pathname
    } );
  }, [ location, isAuthenticated ] );

  const handleClick = ( e ) => {
    console.log( 'click ', e );
    setMenuState( {
      ...menuState,
      current: e.key
    } );
  };

  return (
      <>
        <Menu
            mode={ props.mode }
            onClick={ handleClick }
            className='menu'
            theme='light'
            selectedKeys={ [ menuState.current ] }
            style={ {
              lineHeight: '64px',
              width: 'fit-content'
            } }
        >


            <SubMenu  key={ Routes.ABOUT } className='scale-up-bottom' style={ linkStyle } title="Categorías">
                <Menu.ItemGroup className='sub-menu' >
                    <Menu.Item key="1">Artes Musicales</Menu.Item>
                    <Menu.Item key="2">Artes Literarias</Menu.Item>
                    <Menu.Item key="3">Artes Escénicas</Menu.Item>
                    <Menu.Item key="4">Artes Plásticas</Menu.Item>
                    <Menu.Item key="5">Artes Visuales</Menu.Item>
                    <Menu.Item key="6">Artesanías</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>


          <Menu.Item key={ Routes.ARTICLES } className='scale-up-bottom'>
              <Link to={ Routes.ARTICLES } style={ linkStyle }>Artistas</Link>
          </Menu.Item>
        </Menu >

      </>
  );
};

export default Navigation;
