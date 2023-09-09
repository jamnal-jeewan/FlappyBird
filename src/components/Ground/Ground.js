import React from 'react'
import { Image, Dimensions } from "react-native";
import { images } from '@app/utils/constants';

const {width, height} = Dimensions.get('screen');
export default function Ground({groundLeft, groundHeight}) {
  return (
    <>
        <Image
        source={images.path}
        resizeMode='stretch'
            style={{
                width:width, 
                height:groundHeight,
                position:'absolute',
                right: groundLeft,
                bottom: 0
            }}
        />
        <Image
        source={images.path}
        resizeMode='stretch'
            style={{
                width:width, 
                height:groundHeight,
                position:'absolute',
                left: width-groundLeft,
                bottom: 0
            }}
        />
    </>
  )
}
