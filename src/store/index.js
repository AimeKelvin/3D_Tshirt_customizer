import {proxy} from 'valtio';

const state = proxy({
    intro: true,
    color: '#000000',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './thegoat.png',
    fullDecal: './naruto.png',
    colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
    decals: [
        ['./naruto.png','#FFFFFF'],
        ['./sukuna.png', '#000000'],
        ['./kb8.png', '#480F79'],
        ['./itachi.png','#FFFFFF'], 
        ['./chillguy.png','#FFFFFF'],
        ['./justdoit.png','#FFFFFF'],
        ['./daamn.png','#97303E'],
        ['./travisscott.png', '#FFFFFF'],
        ['./kb24.png','#480F79'], 
        ['./jp3.png','#FFFFFF'],
        ['./ja12.png','#FFFFFF'],
        ['./daddychill.png','#97303E'],
        ['./scavengers.png','#FFFFFF']
    ],
});

export default state;