import { Image } from "react-native"
import { images } from '@app/utils/constants';

export default function Obstacle({type, obstacleWidth,  obstacleHeight, obstacleNegativeHeight, obstacleLeftDistance}){
  
    return(
      <>
        <Image
          source={type === 1 ? images.greenPipes.top : images.redPipes.top}
          resizeMode='stretch'
          style={{
            width:obstacleWidth,
            height: obstacleHeight-obstacleNegativeHeight,
            position: 'absolute', 
            top:0,
            left: obstacleLeftDistance,
            justifyContent:'flex-end',
            alignItems:'center'
          }}
       />
  
        <Image
          source={type === 1 ? images.greenPipes.bottom : images.redPipes.bottom}
          resizeMode='stretch'
          style={{
            width:obstacleWidth,
            height: obstacleHeight-obstacleNegativeHeight,
            position: 'absolute', 
            bottom: 0 ,
            left: obstacleLeftDistance,
            alignItems:'center'
          }}
        />
      </>
    )
  }