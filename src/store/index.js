import {proxy} from 'valtio';

const state = proxy({
    intro: true,
    color: '#000000',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './christa.png',
    fullDecal: './spiderman.jpg',
});

export default state;