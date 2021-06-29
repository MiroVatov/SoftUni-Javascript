function songs(params) {
    class Song {
    constructor(typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
        }
    }

    let numberOfSongs = params.shift();
    let typeList = params.pop();

    for (let i = 0; i < params.length; i++){
        let songData = params[i].split('_');
        let songType, songName, songTime;
        [songType, songName, songTime] = [songData[0], songData[1], songData[2]];
        let song = new Song(songType, songName, songTime);
        if (song.typeList === typeList || typeList === 'all'){
            console.log(songName);
        }
    }
}

// songs([3,
// 'favourite_DownTown_3:14',
// 'favourite_Kiss_4:16',
// 'favourite_Smooth Criminal_4:01',
// 'favourite']
// );

songs([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']
);


songs([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']
);

songs([2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all']
);