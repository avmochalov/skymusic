import React from 'react'

const getTrackList = async () => {
    const tracksResponse = await fetch(`https://painassasin.online/catalog/track/all/`);
    const tracks = await tracksResponse.json()
    
    if (!tracksResponse) {
        throw new Error('Ошибка сервера')
    }

    return tracks;
}

export default getTrackList