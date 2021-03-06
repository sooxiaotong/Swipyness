import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    zIndex: -1,
    flex: 1
  },
  headerWrapper: {
  	height: 50,
  	margin: 10,
  },
  header: {
  	flex: 1,
  	flexDirection: 'row',
  	alignItems: 'center'
  },
  profile: {
  	borderRadius: 17.5,
  	height: 35,
  	width: 35,
  	backgroundColor: 'white'
  },
  nameWrapper: {
  	flex: 1,
    flexDirection: 'column',
    
  },
  userName: {
    marginLeft: 20,
    fontSize: 10,
    color: '#357790'
  },
  profileName: {
    marginLeft: 20,
    fontWeight: 'bold'
  },
  contentWrapper: {
  	flex:1
  },
  contentImage: {
  	flex: 1,
  },
  contentText: {
  	margin: 10
  },
  card: {
    flex: 0,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: '80%',
    overflow: 'hidden',
  },
  cardWrapper: {
    flex: 1,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOffset: { height: 10, width: 0 },
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  web: {
  	height: 500
  }
})
