import React, {useEffect} from 'react';
import {RootNavigationProps, RootStackParameterList} from '@shared/navigation/types';
import MainLayout from '@shared/components/layout/main/MainLayout';
import {setReferer} from '@shared/store/appFunction.slice';
import {useAppDispatch} from '@shared/store';
import {FlatList, TouchableOpacity} from 'react-native';
import {ImageIconPackType} from '@assets/icons/imageIconPack';
import {Box} from '@shared/components/layout/Box';
import {ImageIcon} from '@assets/icons/ImageIcon';
import {Text} from '@shared/Typography';
import ItemPlace from '@shared/components/layout/ItemPlace';
import { NavListType } from '@shared/navigation/AltNavigation';

const HymmsLanding: React.FC<RootNavigationProps<'HymmsLanding'>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setReferer({
        screen: 'ProductLanding',
        stack: '',
      }),
    );
  }, [dispatch]);

  const data: {
    id: number;
    title: string;
    togo: NavListType
    icon: ImageIconPackType;
  }[] = [
    {
      id: 1,
      title: 'Contents',
      icon: 'family_signboard',
      togo:'HymmsContentScreen'
    },
    {
      id: 2,
      title: 'Hymms List',
      icon: 'list_add',
        togo:'HymmsList'
    },
  ];

  return (
    <MainLayout screenType="main-landing" hasBackBtn>
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({item, index}) => <ItemPlace item={item} index={index} />}
      />
    </MainLayout>
  );
};

export default HymmsLanding;
