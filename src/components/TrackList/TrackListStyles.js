import { styled } from 'styled-components';
export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`;
export const PlaylistTitleCol1 = styled(PlaylistTitleCol)`
  width: 447px;
`;
export const PlaylistTitleCol2 = styled(PlaylistTitleCol)`
  width: 321px;
`;
export const PlaylistTitleCol3 = styled(PlaylistTitleCol)`
  width: 245px;
`;
export const PlaylistTitleCol4 = styled(PlaylistTitleCol)`
  width: 60px;
  text-align: end;
`;

export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
