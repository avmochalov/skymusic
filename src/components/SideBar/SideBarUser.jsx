import * as S from'./SideBarStyles'
import { useUserContext } from '../../context/user';

function SideBarUser() {
  const authUser = useUserContext();
  console.log(authUser)
  return (
    <S.SidebarPersonal className="sidebar__personal">
      <S.SidebarPersonalName className="sidebar__personal-name">{authUser.username}</S.SidebarPersonalName>
      <S.SidebarAvatar className="sidebar__avatar"></S.SidebarAvatar>
    </S.SidebarPersonal>
  );
}

export { SideBarUser };
