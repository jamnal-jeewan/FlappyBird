import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  Pressable,
  InputAccessoryView,
} from 'react-native';
import Bird from '@app/components/Bird/Bird';
import GameOver from '@app/components/GameOver/GameOver';
import Obstacle from '@app/components/Obstacle/Obstacle';
import Ground from '@app/components/Ground/Ground';
import {images} from '@app/utils/constants';

const {width, height} = Dimensions.get('screen');

function App() {
  // constants
  const minSpaceBetweenPipes = 80;
  const birdWidth = 60;
  const obstacleWidth = 80;
  const obstacleHeight = height / 2 - minSpaceBetweenPipes;
  const groundHeight = 60;

  // global interval variables
  let birdBottomInterval;
  let obstacleLeftInterval;
  let obstacleTwoLeftInterval;
  let groundLeftInterval;

  // ground state
  const [groundLeft, setGroundLeft] = useState(0);

  // bird state
  const [birdLeft, setBirdLeft] = useState(width / 2);
  const [birdBottom, setBirdBottom] = useState(height / 2);

  // obstacles state
  const [obstacleLeftDistance, setObstacleLeftDistance] = useState(width);
  const [obstacleTwoLeftDistance, setObstacleTwoLeftDistance] = useState(width + (width / 2));
  const [obstacleOneNegativeHeight, setObstacleOneNegativeHeight] = useState(0);
  const [obstacleTwoNegativeHeight, setObstacleTwoNegativeHeight] = useState(0);

  // game states
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const restartGame=()=>{
    clearInterval(obstacleLeftInterval);
    clearInterval(obstacleTwoLeftInterval);
    clearInterval(birdBottomInterval);
    setIsGameOver(false);
    setGroundLeft(0);
    setObstacleOneNegativeHeight(0);
    setObstacleTwoNegativeHeight(0);
    setObstacleTwoLeftDistance(width + width / 2);
    setObstacleLeftDistance(width);
    setBirdBottom(height/2);
    setBirdLeft(width / 2);
    setScore(0);
  }

  // move bird to down
  useEffect(() => {
    if(!isGameOver){
      if (birdBottom >= 60) {
        birdBottomInterval = setInterval(() => {
          setBirdBottom(birdBottom => birdBottom - 20);
        }, 100);
      } else {
        gameOver();
      }
    }
    return () => clearInterval(birdBottomInterval);
  }, [birdBottom, isGameOver]);

  useEffect(() => {
    if(!isGameOver){
      if(groundLeft<width){
        groundLeftInterval = setInterval(()=>{
          setGroundLeft(groundLeft=>groundLeft+10)
        },100)
      }else{
        setGroundLeft(0)
      }
    }
    
    return()=>clearInterval(groundLeftInterval)
  }, [groundLeft]);

  // initially change obstacles height
  useEffect(()=>{
    setObstacleOneNegativeHeight(obstacleOneNegativeHeight=>Math.floor(Math.random() * 130))
    setObstacleTwoNegativeHeight(obstacleTwoNegativeHeight=>Math.floor(Math.random()  * 120))
  },[])

  // move obstacle1
  useEffect(()=>{
    if(!isGameOver){
      if(obstacleLeftDistance > 0 || obstacleLeftDistance > -(obstacleWidth)){
        obstacleLeftInterval = setInterval(()=>{
          setObstacleLeftDistance(obstacleLeftDistance=>obstacleLeftDistance-20)
        },100)
        return()=>clearInterval(obstacleLeftInterval)
      }else{
        setScore(score=>score+1)
        setObstacleLeftDistance(width)
        setObstacleOneNegativeHeight(obstacleOneNegativeHeight=>Math.floor(Math.random() * 150))
      }
    }
    
  },[obstacleLeftDistance, score])

  // move obstacle2
  useEffect(()=>{
    if(!isGameOver){
      if(obstacleTwoLeftDistance > 0 || obstacleTwoLeftDistance > -(obstacleWidth)){
        obstacleTwoLeftInterval = setInterval(()=>{
          setObstacleTwoLeftDistance(obstacleTwoLeftDistance=>obstacleTwoLeftDistance-20)
        },100)
        return()=>clearInterval(obstacleTwoLeftInterval)
      }else{
        setScore(score=>score+1)
        setObstacleTwoLeftDistance(width)
        setObstacleTwoNegativeHeight(obstacleTwoNegativeHeight=>Math.floor(Math.random()  * 100))
      }
    }

    
  },[obstacleTwoLeftDistance, score])

  // game over when touches pipes
  useEffect(()=>{
    // bottom green obstacle condition
    // if((birdBottom < (obstacleHeight-obstacleOneNegativeHeight) && (birdLeft+birdWidth === obstacleLeftDistance))||
    // birdBottom < (obstacleHeight-obstacleOneNegativeHeight) && (obstacleLeftDistance < birdLeft+birdWidth && obstacleLeftDistance>birdLeft)
    // ){
    //   gameOver()
    // }

    // // top green obstacle condition
    // if((birdBottom > (height-(obstacleHeight-obstacleOneNegativeHeight)) && (birdLeft+birdWidth === obstacleLeftDistance)) ||
    // birdBottom > (height-(obstacleHeight-obstacleOneNegativeHeight)) && (obstacleLeftDistance < birdLeft+birdWidth && obstacleLeftDistance>birdLeft)
    // ){
    //   gameOver()
    // }

    // // // bottom red obstacle condition
    // if((birdBottom < (obstacleHeight-obstacleTwoNegativeHeight) && (birdLeft+birdWidth === obstacleTwoLeftDistance))||
    // birdBottom < (obstacleHeight-obstacleTwoNegativeHeight) && (obstacleTwoLeftDistance < birdLeft+birdWidth && obstacleTwoLeftDistance>birdLeft)
    // ){
    //   gameOver()
    // }

    // // top red obstacle condition
    // if((birdBottom > (height-(obstacleHeight-obstacleTwoNegativeHeight)) && (birdLeft+birdWidth === obstacleTwoLeftDistance)) ||
    // birdBottom > (height-(obstacleHeight-obstacleTwoNegativeHeight)) && (obstacleTwoLeftDistance < birdLeft+birdWidth && obstacleTwoLeftDistance>birdLeft)
    // ){
    //   gameOver()
    // }

  },[birdBottom,obstacleLeftDistance, obstacleTwoLeftDistance])

  const flyBird = () => {
    if (!isGameOver && birdBottom < height - 50) {
      setBirdBottom(birdBottom => birdBottom + 50);
    }
  };

  const gameOver = () => {
    setIsGameOver(true);
    clearInterval(obstacleLeftInterval);
    clearInterval(obstacleTwoLeftInterval);
    if(birdBottom<=60){
      clearInterval(birdBottomInterval);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => flyBird()}>
      <ImageBackground
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        source={images.bg.night}
        resizeMode="cover">
        <>
          <Obstacle
            obstacleWidth={obstacleWidth}
            obstacleHeight={obstacleHeight}
            obstacleNegativeHeight={obstacleOneNegativeHeight}
            obstacleLeftDistance={obstacleLeftDistance}
            type={1}
          />
          <Obstacle
            obstacleWidth={obstacleWidth}
            obstacleHeight={obstacleHeight}
            obstacleNegativeHeight={obstacleTwoNegativeHeight}
            obstacleLeftDistance={obstacleTwoLeftDistance}
            type={2}
          />
          <Bird
            birdWidth={birdWidth}
            birdLeft={birdLeft}
            birdBottom={birdBottom}
            isGameOver={isGameOver}
          />
          
          <Ground groundLeft={groundLeft} groundHeight={groundHeight} />

          {isGameOver ? <GameOver score={score} /> : null}

          {isGameOver ? 
            <View style={{
              position: 'absolute',
              top: height*.06,
              left: width*.04
            }}>
            <Pressable onPress={restartGame}>
            <Image
              source={images.restart}
              resizeMode="contain"
              style={{
                width: 60,
                height: 60
              }}/>
            </Pressable></View>: null
          }
        </>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

export default App;
