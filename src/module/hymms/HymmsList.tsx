/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {RootNavigationProps} from '@shared/navigation/types';
import MainLayout from '@shared/components/layout/main/MainLayout';
import {setReferer} from '@shared/store/appFunction.slice';
import {RootState, useAppDispatch, useAppSelector} from '@shared/store';
import {FlatList, TouchableOpacity} from 'react-native';
import {Box} from '@shared/components/layout/Box';
import {ImageIcon} from '@assets/icons/ImageIcon';
import {Text} from '@shared/Typography';
import { seCurrentHymm } from '@shared/store/slice/hymms.slice';
const DashboardRender = ({index, item, navigation}) => {
  const dispatch = useAppDispatch();
  return (
    <Box
        borderRadius={'sm'}
        elevation={2}
        backgroundColor={'gray20'}
        // flex={1}
        width={60}
        height={60}>
    <TouchableOpacity style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}  onPress={() => {
      dispatch(seCurrentHymm(item));
      navigation.replace('Hymm');
      }}>
        <Text variant={'medium16'}>{index + 1}</Text>
    </TouchableOpacity>
      </Box>
  );
};

const HymmsList: React.FC<RootNavigationProps<'HymmsList'>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
        const {hymmList} = useAppSelector(
          (state: RootState) => state.hymms);
  const [layout, setlayout] = useState<boolean>(false);
  useEffect(() => {
    dispatch(
      setReferer({
        screen: 'HymmsLanding',
        stack: '',
      }),
    );
  }, [dispatch]);


  return (
    <MainLayout screenType="main-landing" hasBackBtn>
      <Box alignItems={'center'} paddingBottom={'md'} flexDirection={'row'}>
        <Box flex={1}>
          <Text variant={'bold14'}>HYMM LIST</Text>
        </Box>
        <Box flex={1} alignItems={'center'}>
          <TouchableOpacity onPress={() => setlayout(!layout)}>
            <ImageIcon name="list" size="md" />
          </TouchableOpacity>
        </Box>
      </Box>

      <FlatList
        data={hymmList}
        numColumns={6}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{gap: 5, marginVertical: 8}}
        keyExtractor={item => item.title}
        renderItem={({item, index}) => (
          <DashboardRender item={item} navigation={navigation} index={index} />
        )}
      />
    </MainLayout>
  );
};

export default HymmsList;
