import * as S from './SideBarStyles';
import { useUserContext } from '../../context/user';
import { NavLink } from 'react-router-dom';

function SideBarUser() {
  const {currentUser} = useUserContext();
  console.log(currentUser);
  const logOut = () => {
    localStorage.clear();
  };
  return (
    <S.SidebarPersonal className="sidebar__personal">
      <S.SidebarPersonalName className="sidebar__personal-name">
        {currentUser.username}
      </S.SidebarPersonalName>
      <NavLink to="/login">
        <S.SidebarAvatar
          className="sidebar__avatar"
          onClick={logOut}
        ></S.SidebarAvatar>
      </NavLink>
    </S.SidebarPersonal>
  );
}

export { SideBarUser };
