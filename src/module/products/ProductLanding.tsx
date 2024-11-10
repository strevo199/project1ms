import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { RootNavigationProps } from '@shared/navigation/types';
import MainLayout from '@shared/components/layout/main/MainLayout';

const ProductLanding: FC<RootNavigationProps<'ProductLanding'>> = ({navigation}) => {
  return (
   <MainLayout screenType="main-landing" />
  );
};

export default ProductLanding;
