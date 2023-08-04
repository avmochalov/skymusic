import * as S from'./SideBarStyles'
function SideBarUser() {
  return (
    <S.SidebarPersonal className="sidebar__personal">
      <S.SidebarPersonalName className="sidebar__personal-name">Sergey.Ivanov</S.SidebarPersonalName>
      <S.SidebarAvatar className="sidebar__avatar"></S.SidebarAvatar>
    </S.SidebarPersonal>
  );
}

export { SideBarUser };
