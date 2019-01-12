import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import { connect } from 'react-redux'
import Swiper from 'react-native-deck-swiper'
import Animation from 'lottie-react-native';
import SwipeCard from '../Components/SwipeCard'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeStyle'

class Home extends Component {
  constructor (props) {
    super(props)
    this.json = {
      cards : require('../Fixtures/cardSwipe.json').items
    }
    this.state = {
      showTheThing: false,
      progress: new Animated.Value(0),
    }
  }

  ggwp() {
    this.setState({showTheThing: true})
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start((finished) => this.setState({showTheThing: false}));
  }

  hideWow() {
     this.setState({showTheThing: false})
  }


  render () {
    return (
      <View style={styles.container}>
        <Swiper
            cards={this.json.cards}
            renderCard={(cardData) => {
                return (
                    <SwipeCard {...cardData} style={styles.swiperCard}/>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#F5F5F5'}
            disableBottomSwipe={true}
            stackSize= {3}
            //onSwipedTop={() => this.ggwp()}
            overlayLabels={{
  left: {
    title: 'Merry',
    style: {
      label: {
        zIndex: 100,
        backgroundColor: '#FFB300',
        borderColor: '#FFB300',
        color: 'white',
        borderWidth: 1
      },
      wrapper: {
        zIndex: 100,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: -30
      }
    }
  },
  right: {
    title: 'Cherry',
    style: {
      label: {
        zIndex: 100,
        backgroundColor: '#ef5350',
        borderColor: '#ef5350',
        color: 'white',
        borderWidth: 5
      },
      wrapper: {
        zIndex: 100,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: 30
      }
    }
  },
  top: {
    title: 'Joyful',
    style: {
      label: {
        zIndex: 100,
        backgroundColor: '#00ACC1',
        borderColor: '#00ACC1',
        color: 'white',
        borderWidth: 5
      },
      wrapper: {
        zIndex: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
  }
}}>
        </Swiper>

        { this.state.showTheThing && 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <View
        style={{
            width: 200,
            height: 200,
          }}
        >
        <Animation
          style={{
            width: 200,
            height: 200,
          }}
          progress={this.state.progress}
          source={require('../Animations/love_explosion.json')}
        />
        </View>
        </View>
      }

    </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
