import * as S from './TrackListStyles';
// import { tracks } from "../../data";

function TrackListPlug() {
  return (
    <S.ContentPlaylist className="content__playlist playlist">
      <S.PlaylistItem className="playlist__item">
        <S.PlaylistTrack className="playlist__track track">
          <img src="img/plug/trackListPlug.svg" alt="plug"></img>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    </S.ContentPlaylist>
  );
}

export { TrackListPlug };
