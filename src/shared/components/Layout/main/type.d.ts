interface MainLayoutProp  {
    screenType?: 'landing'| 'inner-landing' | 'main-landing';
    children?: React.ReactNode;
    useheaderone?:boolean;title?:string;
    hasBackBtn:boolean;

    hasCancelBtn?:boolean;

}
