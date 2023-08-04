import * as S from'./SideBarStyles'
function SideBar() {
  return (
    <S.SidebarBlock className="sidebar__block">
      <S.SidebarList className="sidebar__list">
        <S.SidebarItem className="sidebar__item">
          <S.SidebarLink className="sidebar__link" href="#">
            <S.SidebarImg
              className="sidebar__img"
              src="img/playlist01.png"
              alt="day's playlist"
            ></S.SidebarImg>
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem className="sidebar__item">
          <S.SidebarLink className="sidebar__link" href="#">
            <S.SidebarImg
              className="sidebar__img"
              src="img/playlist02.png"
              alt="day's playlist"
            ></S.SidebarImg>
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem className="sidebar__item">
          <S.SidebarLink className="sidebar__link" href="#">
            <S.SidebarImg
              className="sidebar__img"
              src="img/playlist03.png"
              alt="day's playlist"
            ></S.SidebarImg>
          </S.SidebarLink>
        </S.SidebarItem>
      </S.SidebarList>
    </S.SidebarBlock>
  );
}

export { SideBar };
