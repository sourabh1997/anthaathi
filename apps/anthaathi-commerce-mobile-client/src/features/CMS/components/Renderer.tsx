import * as React from 'react';
import {Button, Text, Appbar, useTheme} from 'react-native-paper';
import {View} from 'react-native';
import {DeliveringSelection} from '../containers/HomePage/components/DeliveringSelection';
import HeroCategories from '../containers/HomePage/components/HeroCategories';
import Spacer from '../containers/HomePage/components/Spacer';

export default function () {
  const {
    colors: {background},
  } = useTheme();

  return (
    <View style={{height: '100%', backgroundColor: background}}>
      <DeliveringSelection location="Dubai" country="United Arab Emirates" />

      <Spacer style={{paddingBottom: 0}} />

      <HeroCategories
        title="Our Products"
        items={[
          {
            title: 'Special Offers',
            image:
              'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
            key: '12',
          },
          {
            title: 'Fruits',
            image:
              'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
            key: '23',
          },
          {
            title: 'Organic',
            image:
              'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
            key: '34',
          },
          {
            title: 'Vegetables',
            image:
              'https://burst.shopifycdn.com/photos/ripe-red-strawberries-in-a-white-bowl.jpg?width=373&format=pjpg&exif=1&iptc=1',
            key: '324',
          },
          {
            title: 'Bulk Buy',
            image:
              'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
            key: '334',
          },
          {
            title: 'Juices',
            image:
              'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=373&format=pjpg&exif=1&iptc=1',
            key: '3341',
          },
          {
            title: 'Precut',
            image:
              'https://burst.shopifycdn.com/photos/three-pumpkins-in-a-beam-of-sunlight.jpg?width=373&format=pjpg&exif=1&iptc=1',
            key: '33141',
          },
          {
            title: 'Gift Corner',
            image:
              'https://burst.shopifycdn.com/photos/spa-candle-towel-and-stones.jpg?width=746&format=pjpg&exif=0&iptc=0',
            key: '331241',
          },
          {
            title: 'Special Offers',
            image:
              'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
            key: '212',
          },
          {
            title: 'Fruits',
            image:
              'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
            key: '223',
          },
          {
            title: 'Organic',
            image:
              'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
            key: '234',
          },
          {
            title: 'Vegetables',
            image:
              'https://burst.shopifycdn.com/photos/ripe-red-strawberries-in-a-white-bowl.jpg?width=373&format=pjpg&exif=1&iptc=1',
            key: '2324',
          },
          {
            title: 'Bulk Buy',
            image:
              'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
            key: '2334',
          },
          {
            title: 'Juices',
            image:
              'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=373&format=pjpg&exif=1&iptc=1',
            key: '23341',
          },
          {
            title: 'Precut',
            image:
              'https://burst.shopifycdn.com/photos/three-pumpkins-in-a-beam-of-sunlight.jpg?width=373&format=pjpg&exif=1&iptc=1',
            key: '233141',
          },
          {
            title: 'Gift Corner',
            image:
              'https://burst.shopifycdn.com/photos/spa-candle-towel-and-stones.jpg?width=746&format=pjpg&exif=0&iptc=0',
            key: '2331241',
          },
        ]}
      />
    </View>
  );
}
