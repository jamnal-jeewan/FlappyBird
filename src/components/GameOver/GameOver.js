import React, {useEffect, useState} from 'react';
import {Image, Dimensions, View} from 'react-native';
import {images, getScoreImages} from '@app/utils/constants';

const {width, height} = Dimensions.get('screen');

export default function GameOver({score}) {
  const [totalScores, setTotalScores] = useState([]);

  useEffect(() => {
    if (score) {
      let _score = JSON.stringify(score);
      let scoreArray = _score.split('');
      if (scoreArray?.length > 0) {
        let images = [];
        scoreArray.map(data => {
          let res = getScoreImages(data);
          images.push(res);
        });
        setTotalScores(images);
      }
    }
  }, []);

  return (
    <View style={{position: 'absolute', alignItems: 'center'}}>
      <Image
        source={images.gameOver}
        resizeMode="contain"
        style={{
          width: width * 0.6,
          height: height * 0.15,
        }}
      />
      <View style={{flexDirection:'row'}}>
      {totalScores.length > 0
        ? totalScores.map((_item,index) => {
            return (
              <Image
                key={_item+index}
                source={_item}
                resizeMode="stretch"
                style={{
                  width: width * 0.1,
                  height: height * 0.07,
                }}
              />
            );
          }) :  
        <Image
          source={getScoreImages(0)}
          resizeMode="contain"
          style={{
            width: width * 0.1,
            height: height * 0.07,
          }}
        />}
        </View>
    </View>
  );
}
