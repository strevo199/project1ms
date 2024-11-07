import React from 'react';
import { Dimensions } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { palette } from '@shared/theme/palette';
import { Text } from '@shared/Typography';
import { Box } from '@shared/components/layout/Box';
import HymmsLanding from '@module/hymms/HymmsLanding';
import WishlistLanding from '@module/wishlist/WishlistLanding';
import MoreLanding from '@module/more/MoreLanding';
import SearchLanding from '@module/search/SearchLanding';
import HomeLanding from '@module/home/HomeLanding';
import { ImageIconPackType } from '../../assets/icons';
import { ImageIcon } from 'assets/icons/ImageIcon';

export type TabType = {
  tabText: string;
  name: string;
  iconName: ImageIconPackType;
  component: unknown;
  special?: boolean;
  onPress?: () => void;
};
const Tab = createBottomTabNavigator();

const MainButtonTab: React.FC = () => {

  const tabList: TabType[] = [
    {
      tabText: 'Listings',
      name: 'Listing',
      iconName: 'list_add',
      component: HymmsLanding,
    },
    {
      tabText: 'Wishlist',
      name: 'Wishlist',
      iconName: 'like',
      component: WishlistLanding,
    },
    {
      tabText: 'Home',
      name: 'Home',
      iconName: 'home',
      component: HomeLanding,
    },
    {
      tabText: 'Search',
      name: 'Search',
      iconName: 'search',
      component: SearchLanding,
    },
    {
      tabText: 'More',
      name: 'More',
      iconName: 'services',
      component: MoreLanding,
    },
  ];

  return (
    <Tab.Navigator
      // SceneAnimationEnabled={false}
      screenOptions={{
        header: () => null,
        tabBarStyle: {
          height: 85,
          paddingTop: 5,
          // Elevation: 0,
          // BorderTopWidth: 0,
        },
        tabBarItemStyle: { height: 75 },
      }}
      // Shifting={false}
    >
      {tabList.map(tab => (
        <Tab.Screen
          component={tab.component}
          key={tab.name.toString()}
          name={tab.name}
          options={{
            headerShown: false,
            tabBarIconStyle: {
              flex: 1,
            },
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <Box alignItems={'center'}>
                <ImageIcon
                  name={tab.iconName}
                  style={{
                    height: 18,
                    width: 18,
                    tintColor: focused ? palette.primary950 : palette.secondary700,
                  }}
                />
                <Text color={focused ? palette.primary950: palette.secondary700 }>
                  {tab.tabText}
                </Text>
              </Box>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainButtonTab;
