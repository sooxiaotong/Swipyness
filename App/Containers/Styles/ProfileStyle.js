import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  rankingWrapper: {
	flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ranking: {
  	paddingLeft:5,
  },
  header: {
  	margin: 20,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
    profile: {
  	borderRadius: 50,
  	height: 100,
  	width: 100,
  	backgroundColor: 'white'
  },
  profileWrapper: {
  	flex: 1,
  	alignItems: 'center',
  },
  userName: {
  	padding: 5,
  	fontSize: 20,
  	color: '#3E2723'
  }
})
