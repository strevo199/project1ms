export type AppfeatureType = {
    id: string;
    title: string;
    togo: string;
    type: string;
    isvisible: boolean;
    issubscribed: boolean;
}

export const appfeature: AppfeatureType[] = [

];
export const freeappfeature: AppfeatureType[] = [
    {
        id: '1',
        title: 'English Hymms',
        type:'english_hymm',
        isvisible: true,
        togo:'HymmsLanding',
        issubscribed: true,
    },
    {
        id: '1',
        title: 'Events',
        type:'events',
        isvisible: true,
        togo:'EventsLanding',
        issubscribed: true,
    },
];
