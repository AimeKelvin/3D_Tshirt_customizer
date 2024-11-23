import {proxy} from 'valtio';

const state = proxy({
    intro: true,
    color: '#FFFFFF',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './thunder_hashira.png',
    fullDecal: './thunder_hashira.png',
});

export default state;