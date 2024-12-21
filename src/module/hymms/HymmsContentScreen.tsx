import React, {useEffect} from 'react';
import {RootNavigationProps} from '@shared/navigation/types';
import MainLayout from '@shared/components/layout/main/MainLayout';
import {setReferer} from '@shared/store/appFunction.slice';
import {RootState, useAppDispatch, useAppSelector} from '@shared/store';
import {FlatList} from 'react-native';

import ItemPlace from '@shared/components/layout/ItemPlace';

const HymmsContentScreen: React.FC<RootNavigationProps<'HymmsContentScreen'>> = ({
  navigation,
}) => {
      const {contents} = useAppSelector(
        (state: RootState) => state.hymms);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setReferer({
        screen: 'HymmsLanding',
        stack: '',
      }),
    );
  }, [dispatch]);


  console.log(contents);
  

  return (
    <MainLayout title='CONTENTS' screenType="main-landing" hasBackBtn>
            
      <FlatList
        data={contents}
        keyExtractor={item => item.title}
        renderItem={({item, index}) => <ItemPlace item={item} isnumbered={true} index={index} />}

      />
    </MainLayout>
  );
};

export default HymmsContentScreen;
