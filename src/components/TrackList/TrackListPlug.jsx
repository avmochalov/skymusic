import * as S from "./TrackListStyles"
import { tracks } from "../../data";

function TrackListPlug() {
  return (
    <div className="content__playlist playlist">
      {tracks.map((track) => (
        <div key={track.id} className="playlist__item">
          <div className="playlist__track track">
          <img
                src="img/plug/trackListPlug.svg"
                alt="plug"
              ></img>
          </div>
        </div>
      ))}
    </div>
  );
}

export { TrackListPlug };
