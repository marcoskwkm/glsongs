import { Stats } from '../utils/stats'

interface Song {
  title: string
  effect: string
  songEffect: string
  cost: Stats
  imgUrl: string
  unlockLive: number
}

export const songs: Song[] = [
  {
    title: '奇跡を信じて！',
    effect: 'Bonus wisdom +1',
    songEffect: 'Specialty rate +5',
    cost: new Stats([0, 21, 0, 0, 21]),
    unlockLive: 1,
    imgUrl: '/songs/kiseki.webp',
  },
  {
    title: '青春が待ってる',
    effect: 'Power +22',
    songEffect: 'Friendship bonus +5%',
    cost: new Stats([0, 0, 32, 0, 12]),
    unlockLive: 1,
    imgUrl: '/songs/seishun.webp',
  },
  {
    title: 'RUN✕RUN！',
    effect: 'Skill pt +22',
    songEffect: 'Friendship bonus +5%',
    cost: new Stats([14, 0, 0, 16, 14]),
    unlockLive: 1,
    imgUrl: '/songs/run.webp',
  },
  {
    title: '全速！前進！ウマドルパワー☆',
    effect: 'Speed +22',
    songEffect: 'Friendship bonus +5%',
    cost: new Stats([32, 0, 0, 12, 0]),
    unlockLive: 1,
    imgUrl: '/songs/zensoku.webp',
  },
  {
    title: '立ち位置ゼロ番！順位は一番！',
    effect: 'Bonus speed +1',
    songEffect: 'Chain event rate lv +1',
    cost: new Stats([21, 0, 0, 21, 0]),
    unlockLive: 1,
    imgUrl: '/songs/tachi.webp',
  },
  {
    title: 'Go This Way',
    effect: 'Bonus power +1',
    songEffect: 'Chain event rate lv +1',
    cost: new Stats([0, 0, 21, 0, 21]),
    unlockLive: 1,
    imgUrl: '/songs/gothisway.webp',
  },
  {
    title: "逃げ切りっ！Fallin' Love",
    effect: 'Bonus guts +1',
    songEffect: 'Chain event rate lv +1',
    cost: new Stats([21, 0, 0, 21, 0]),
    unlockLive: 1,
    imgUrl: '/songs/nigekkiri.webp',
  },
  {
    title: 'Ring Ring ダイアリー',
    effect: 'Bonus stamina +1',
    songEffect: 'Chain event rate lv +1',
    cost: new Stats([0, 21, 0, 21, 0]),
    unlockLive: 1,
    imgUrl: '/songs/ring.webp',
  },
]
