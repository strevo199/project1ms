import {TouchableOpacity} from 'react-native';
import React from 'react';
import {ImageIcon} from '@assets/icons/ImageIcon';
import {Box} from './Box';
import {Text} from '@shared/Typography';
import {ImageIconPackType} from '@assets/icons/imageIconPack';
import {NavReplace} from '@shared/navigation/AltNavigation';
import SrfValue from '@shared/utilities/functions/SrfValue';

type ItemPlaceProps = {
  item: {
    id: number;
    title: string;
    icon: ImageIconPackType;
    togo:string;
  };
  isnumbered: boolean;
  index: number;
};

const ItemPlace = ({item, index, isnumbered}: ItemPlaceProps) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => NavReplace({screen: item.togo})}>
      <Box
        elevation={1}
        flexDirection={'row'}
        marginVertical={'sm'}
        backgroundColor={index % 2 ? 'gray30' : 'gray'}
        paddingVertical={'md'}
        paddingLeft={'md'}
        borderRadius={'xs'}
        alignItems={'center'}
        columnGap={'md'}>
        <Box>
          {isnumbered ? (
            <Text variant={'medium16'}>{index + 1}.</Text>
          ) : (
            <ImageIcon name={item.icon} style={{borderRadius: SrfValue(20)}} size="md" />
          )}
        </Box>
        <Box>
          <Text variant={'medium14'}>{item.title}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default ItemPlace;
