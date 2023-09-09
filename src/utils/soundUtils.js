import Sound from 'react-native-sound';

Sound.setCategory('Playback');

function birdFlying() {
  const sound = new Sound('wing.wav', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Error loading sound:', error);
    } else {
      sound.play(success => {
        if (success) {
          // console.log('Sound played successfully');
        } else {
          console.log('Error playing sound');
        }
      });
    }
  });
}

function birdColloide() {
  const sound = new Sound('hit.wav', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Error loading sound:', error);
    } else {
      sound.play(success => {
        if (success) {
          // console.log('Sound played successfully');
        } else {
          console.log('Error playing sound');
        }
      });
    }
  });
}

function birdDie() {
    const sound = new Sound('die.wav', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Error loading sound:', error);
      } else {
        sound.play(success => {
          if (success) {
            // console.log('Sound played successfully');
          } else {
            console.log('Error playing sound');
          }
        });
      }
    });
}

function earnPoints() {
    const sound = new Sound('point.wav', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Error loading sound:', error);
      } else {
        sound.play(success => {
          if (success) {
            // console.log('Sound played successfully');
          } else {
            console.log('Error playing sound');
          }
        });
      }
    });
}

export {birdFlying, birdColloide, birdDie, earnPoints};
