import React from 'react'

const getTrackList = async () => {
    const tracksResponse = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/all/`);
    const tracks = await tracksResponse.json()
    
    if (!tracksResponse) {
        throw new Error('Ошибка сервера')
    }

    return tracks;
}

export default getTrackList