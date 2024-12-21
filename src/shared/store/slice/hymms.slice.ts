import {createSlice} from '@reduxjs/toolkit';

export type HymmTypes = {
  hymmList: {
    id: string;
    hymmnum: number;
    chorus?: string;
    content: string;
    title: string;
    lyrics: {label: string; value: string}[];
  }[];
  contents: {id: number; title: string}[];
  lastHymmIndex:n2mber;
  firstHymmIndex:n0mber;
  currentHymm: {
    id: string;
    hymmnum: number;
    content: string;
    chorus?: string;
    title: string;
    lyrics: {label: string; value: string}[];
  };
  previousHymm: {
    id: string;
    hymmnum: number;
    content: string;
    title: string;
    lyrics: {label: string; value: string}[];
  };
  nextHymm: {
    id: string;
    hymmnum: number;
    title: string;
    content: string;
    lyrics: {label: string; value: string}[];
  };
};

export const initState: HymmTypes = {
  hymmList: [
    {
      id: '1',
      hymmnum: 1,
      content: 'THANKSGIVING',
      title: 'O Workship thou King',
      lyrics: [
        {
          label: '1',
          value: 'O worship the King all-glorious above, \nO gratefully sing his power and his love:\nour shield and defender, the Ancient of Days,\npavilioned in splendor and girded with praise.',
        },
        {
          label: '2',
          value: 'O tell of his might and sing of his grace, whose robe is the light, whose canopy space. His chariots of wrath the deep thunderclouds form, and dark is his path on the wings of the storm.',
        },
        {
          label: '3',
          value: 'Your bountiful care, what tongue can recite? It breathes in the air, it shines in the light; it streams from the hills, it descends to the plain, and sweetly distills in the dew and the rain.',
        },
        {
          label: '4',
          value: 'Frail children of dust, and feeble as frail, in you do we trust, nor find you to fail. Your mercies, how tender, how firm to the end, our Maker, Defender, Redeemer, and Friend!',
        },
        {
          label: '5',
          value: 'O measureless Might, unchangeable Love, whom angels delight to worship above! Your ransomed creation, with glory ablaze,in true adoration shall sing to your praise!',
        },
      ],
    },
    {
      id: '2',
      hymmnum: 2,
      content: 'THANKSGIVING',
      title: 'Join us sing the song of praise',
      chorus: 'Shout all for joy all our brothers Raise ye praises unto God Shout all for joy all our sisters Halle-Halleluiah Praise Him for this our Home of Peace',
      lyrics: [
        {
          label: '1',
          value: 'Join us sing the song of praise Halleluyah Oh join us praise the Lord of Host Who saved us up to this day-. halleluyah Oh join us praise the Lord of Host',
        },
        {
          label: '2',
          value: 'Join us sing the song of praise Halleluiah For victory he accorded us Never let the world mock us Halleluiah Oh join us praise the Lord of Host',
        },
        {
          label: '3',
          value: 'Your bountiful care, what tongue can recite? It breathes in the air, it shines in the light; it streams from the hills, it descends to the plain, and sweetly distills in the dew and the rain.',
        },
      ],
    },
    {
      id: '3',
      hymmnum: 3,
      content: 'THANKSGIVING',
      title: 'Thanks we give unto our Saviour',
      chorus: 'Sing His glory Halleluiah Songs of glory shall we sing Sing His glory Halleluiah Sing Hossanah to our King',
      lyrics: [
        {
          label: '1',
          value: 'Holy Trinity we beg Thee Father give to us more strength Grant victory unto our Leaders Give them knowledge and wisdom',
        },
        {
          label: '2',
          value: '⁠Holy Trinity we beg Thee Father give to us more strength Grant victory unto our Leaders Give them knowledge and wisdom',
        },
        {
          label: '3',
          value: 'Jah Jehovah King of glory Remember our Praying Band Give them power and Thy true love Heavenly Prayer teach them all.',
        },
      ],
    },
  ],
  contents: [
    {
      id: 1,
      title: 'THANKSGIVING',
    },
    {
      id: 2,
      title: 'REPENTANCE',
    },
    {
      id: 3,
      title: 'FORGIVENESS',
    },
    {
      id: 4,
      title: 'INVOCATION',
    },
    {
      id: 5,
      title: 'PRAYER UPON SEVERAL OCCASION',
    },
    {
      id: 6,
      title: 'EXHORTATION',
    },
    {
      id: 7,
      title: 'PROTECTION',
    },
    {
      id: 8,
      title: 'WARFARE',
    },
    {
      id: 9,
      title: 'VICTORY',
    },
    {
      id: 10,
      title: 'HEALING',
    },
    {
      id: 11,
      title: 'PEACE',
    },
    {
      id: 12,
      title: 'FAITH',
    },
    {
      id: 13,
      title: '⁠THE WORD OF GOD',
    },
    {
      id: 14,
      title: '⁠THE WORD OF GOD',
    },
    {
      id: 15,
      title: 'SERVICE',
    },
    {
      id: 16,
      title: 'MORNING PRAYER',
    },
    {
      id: 17,
      title: '⁠EVENING PRAYER',
    },
    {
      id: 18,
      title: '⁠MERCY & PROVISION OF GOD',
    },
    {
      id: 19,
      title: 'THE SAΒΒΑΤΗ',
    },
    {
      id: 20,
      title: 'HOLY BAPTISM',
    },
    {
      id: 21,
      title: 'HOLY COMMUNION',
    },
    {
      id: 22,
      title: '⁠HOLY MATRIMONY',
    },
    {
      id: 23,
      title: 'PREGNANT SISTER',
    },
    {
      id: 24,
      title: 'CHERUBIM & SERAPHIM',
    },
    {
      id: 25,
      title: ' ⁠MORNING STAR & MICHAEL STAR',
    },
    {
      id: 26,
      title: 'CONFERENCE DAY',
    },
    {
      id: 27,
      title: 'FAREWELL',
    },
    {
      id: 28,
      title: 'ADVENT',
    },
    {
      id: 29,
      title: 'CHRISTMAS',
    },
    {
      id: 30,
      title: '⁠NEW YEAR',
    },
    {
      id: 31,
      title: "CHILDREN'S DAY",
    },
    {
      id: 32,
      title: 'ANNIVERSARY',
    },
    {
      id: 33,
      title: 'LENTEN SEASON',
    },
    {
      id: 34,
      title: '⁠PALM SUNDAY/PASSION WEEK',
    },
    {
      id: 35,
      title: '⁠GOOD FRIDAY',
    },
    {
      id: 36,
      title: '⁠BURIAL OF THE DEAD',
    },
    {
      id: 37,
      title: 'EASTER',
    },
    {
      id: 38,
      title: 'RESURRECTION',
    },
    {
      id: 39,
      title: '⁠ASCENSION DAY',
    },
    {
      id: 40,
      title: '⁠HEAVENLY HOME',
    },
    {
      id: 42,
      title: 'PENTECOST',
    },
    {
      id: 43,
      title: '⁠TRINITY SUNDAY',
    },
    {
      id: 44,
      title: 'REVIVAL',
    },
    {
      id: 45,
      title: 'ADOPTION',
    },
    {
      id: 46,
      title: 'GRACE & BLESSING',
    },
    {
      id: 47,
      title: 'REJOICING',
    },
    {
      id: 48,
      title: 'ADORATION',
    },
    {
      id: 49,
      title: 'ADDITIONAL HYMN',
    },
  ],

  previousHymm: {
    id: '',
    hymmnum: 0,
    content: '',
    title: '',
    lyrics: [],
  },
  nextHymm: {
    id: '',
    hymmnum: 0,
    title: '',
    content: '',
    lyrics: [],
  },
  currentHymm: {
    id: '',
    hymmnum: 0,
    content: '',
    title: '',
    lyrics: [],
  },
  lastHymmIndex: 2,
  firstHymmIndex: 0
};
export const hymmsSlice = createSlice({
  name: 'hymms',
  initialState: initState,
  reducers: {
    setHymmsList: (state, action) => {
      state.hymmList = action.payload;
    },
    setContents: (state, action) => {
      state.contents = action.payload;
    },
    seCurrentHymm: (state, action) => {
      state.currentHymm = action.payload;
    },
    setPreviosHymm: (state, action) => {
      state.previousHymm = action.payload;
    },
    setnextHymm: (state, action) => {
      state.nextHymm = action.payload;
    },
  },
});

export const {setHymmsList, seCurrentHymm} = hymmsSlice.actions;

export default hymmsSlice.reducer;
