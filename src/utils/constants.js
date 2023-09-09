const images = {
  greenPipes:{
    top: require('@app/res/images/pipe-green-top.png'),
    bottom: require('@app/res/images/pipe-green-bottom.png'),
  },
  redPipes:{
    top: require('@app/res/images/pipe-red-top.png'),
    bottom: require('@app/res/images/pipe-red-bottom.png'),
  },
  bird:{
    blue: require('@app/res/images/bluebird-downflap.png')
  },
  bg:{
    day: require('@app/res/images/background-day.png'),
    night: require('@app/res/images/background-night.png')
  },
  gameOver: require('@app/res/images/gameover.png'),
  path: require('@app/res/images/base.png'),
  restart: require('@app/res/images/restart.png'),
}

const getScoreImages=(number)=>{
  if(number == 1){
      return require('@app/res/images/1.png')
  }else if(number == 2){
      return require('@app/res/images/2.png')
  }else if(number == 3){
      return require('@app/res/images/3.png')
  }else if(number == 4){
      return require('@app/res/images/4.png')
  }else if(number == 5){
      return require('@app/res/images/5.png')
  }else if(number == 6){
      return require('@app/res/images/6.png')
  }else if(number == 7){
      return require('@app/res/images/7.png')
  }else if(number == 8){
      return require('@app/res/images/8.png')
  }else if(number == 9){
      return require('@app/res/images/9.png')
  }else if(number == 0){
      return require('@app/res/images/0.png')
  }
}

export {
  images,
  getScoreImages
}