import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'Jingle Bells', duration: '4:05'},
        {title: 'Drummer Boy', duration: '2:05'},
        {title: 'White Christas', duration: '3:35'},
        {title: 'Holly Jolly Christmas', duration: '3:05'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};


const reducers = combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

export default reducers;