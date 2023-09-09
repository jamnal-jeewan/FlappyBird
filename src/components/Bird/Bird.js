import React from 'react'
import { Image } from "react-native";
import { images } from '@app/utils/constants';

export default function Bird({birdWidth, birdLeft,birdBottom, isGameOver}) {
  return (
    <Image
      source={images.bird.blue}
      resizeMode='contain'
        style={{
            width:birdWidth, 
            height:60,
            position:'absolute',
            left: birdLeft,
            bottom: birdBottom,
            transform: [{ rotate: isGameOver? '270deg' : '0deg'}]

        }}
    />
  )
}
