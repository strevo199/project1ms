import { FlatList, Dimensions, TouchableOpacity} from 'react-native';
import React, {FC, useEffect} from 'react';
import {RootNavigationProps} from '@shared/navigation/types';
import MainLayout from '@shared/components/layout/main/MainLayout';
import {appfeature, AppfeatureType, freeappfeature} from './data';
import {Box} from '@shared/components/layout/Box';
import {RootState, useAppDispatch, useAppSelector} from '@shared/store';
import { Text } from '@shared/Typography';
import ItemPlace from '@shared/components/layout/ItemPlace';
import { setReferer } from '@shared/store/appFunction.slice';

type RenderFeatureGateProps = {
  item: AppfeatureType;
  index: number;
  navigation:any;
};

const RenderFeatureGate = ({item, index,navigation}: RenderFeatureGateProps) => {
  return (
    <Box
      borderRadius={'sm'}
      marginHorizontal={'sm'}
      opacity={index < 1 ? 1 : 0}
      elevation={2}
      backgroundColor={'primary400'}
      flex={1}
      height={100}>
      <TouchableOpacity onPress={() => navigation.replace('HymmsLanding')} style={{width: '100%',flexWrap:'wrap', height: '100%',padding:4}}>
        <Text variant={'bold16'} color={'default100'} >{item.label}</Text>
      </TouchableOpacity>
    </Box>
  );
};

const ProductLanding: FC<RootNavigationProps<'ProductLanding'>> = ({
  navigation,
}) => {
  const {user_mode} = useAppSelector((state: RootState) => state.appsettings);


    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(
        setReferer({
          screen: 'LandingScreen',
          stack: '',
          param:{mode:'login'}
        }),
      );
    }, [dispatch]);



  return (
    <MainLayout hasBackBtn screenType="main-landing">
      <FlatList
        data={user_mode === 'free' ? freeappfeature : appfeature}
        bounces={false}
        keyExtractor={item => item.id}
          renderItem={({item, index}) => <ItemPlace item={item} index={index} />}
      />
    </MainLayout>
  );
};

export default ProductLanding;
