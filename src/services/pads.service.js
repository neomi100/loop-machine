const sounds = [
    { name: 'future funk', id: '001', isPlay: false, url: 'assets/audio/120_future_funk_beats_25.mp3', audio: new Audio(require('../assets/audio/120_future_funk_beats_25.mp3')) },
    { name: 'stutter breakbeats', id: '002', isPlay: false, url: 'assets/audio/120_stutter_breakbeats_16.mp3', audio: new Audio(require('../assets/audio/120_stutter_breakbeats_16.mp3')) },
    { name: 'bass', id: '003', isPlay: false, url: 'assets/audio/Bass Warwick heavy funk groove on E 120 BPM.mp3', audio: new Audio(require('../assets/audio/Bass Warwick heavy funk groove on E 120 BPM.mp3')) },
    { name: 'electric guitar', id: '004', isPlay: false, url: 'assets/audio/electric guitar coutry slide 120bpm - B.mp3', audio: new Audio(require('../assets/audio/electric guitar coutry slide 120bpm - B.mp3')) },
    { name: 'stompy slosh', id: '005', isPlay: false, url: 'assets/audio/FUD_120_StompySlosh.mp3', audio: new Audio(require('../assets/audio/FUD_120_StompySlosh.mp3')) },
    { name: 'groove tanggu', id: '006', isPlay: false, url: 'assets/audio/GrooveB_120bpm_Tanggu.mp3', audio: new Audio(require('../assets/audio/GrooveB_120bpm_Tanggu.mp3')) },
    { name: 'maze politics', id: '007', isPlay: false, url: 'assets/audio/MazePolitics_120_Perc.mp3', audio: new Audio(require('../assets/audio/MazePolitics_120_Perc.mp3')) },
    { name: 'pas groove', id: '008', isPlay: false, url: 'assets/audio/PAS3GROOVE1.03B.mp3', audio: new Audio(require('../assets/audio/PAS3GROOVE1.03B.mp3')) },
    { name: 'silent star', id: '009', isPlay: false, url: 'assets/audio/SilentStar_120_Em_OrganSynth.mp3', audio: new Audio(require('../assets/audio/SilentStar_120_Em_OrganSynth.mp3')) },

]


export const padsService = {
    query,
    playSound,
    stopSound
}

async function query() {
    return sounds
}

function playSound(pads) {
    pads.forEach((pad) => {
        pad.audio.pause();
        pad.audio.currentTime = 0;
        pad.audio.play();
    });
}

function stopSound(pads) {
    pads.forEach((pad) => {
        pad.audio.pause();
        pad.audio.currentTime = 0;
    });
}