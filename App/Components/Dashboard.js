import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableHighlight,
	ScrollView,
} from 'react-native';

import API from '../Utils/api';
import Repositories from './Repositories';
import Community from './Community';

const styles = {
	container: {
		marginTop: 88,
		flex: 1,
		height: '100%',
    width: '100%',
	},
	tab: {
    backgroundColor: '#5C47F0',
    flex: 1,
    paddingTop: 20,
		paddingBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#402EBD',
		borderRightWidth: 1,
		borderRightColor: '#402EBD',
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlignVertical: 'center',
		textAlign: 'center',
		fontFamily: 'Helvetica',
		fontSize: 12,
  },
	image: {
		height: 350,
	},
	text: {
		color: '#000',
		fontFamily: 'Helvetica',
	},
	tabsContainer: {
		backgroundColor: '#5C47F0',
		width: '100%',
		flexDirection: 'row',
	},
	profileContent: {
		paddingTop: 0,
	},
	profileItem: {
		paddingTop: 20,
		paddingRight: 15,
		paddingLeft: 15,
		paddingBottom: 20,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#402ebd52',
	},
	profileTitleText: {
		fontWeight: 'bold',
		fontFamily: 'Helvetica',
	}
};

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	getResposHandler() {
		API.getRepos(this.props.user.login)
			.then(response => {
				this.props.navigator.push({
          title: 'Repositories',
          component: Repositories,
          passProps: { repos: response },
        });
			});
	}

	getFollowersHandler() {
		API.getFollowers(this.props.user.login)
			.then(response => {
				this.props.navigator.push({
          title: 'Followers',
          component: Community,
          passProps: { community: response },
        });
			});
	}

	getFollowingHandler() {
		API.getFollowing(this.props.user.login)
			.then(response => {
				this.props.navigator.push({
          title: 'Following',
          component: Community,
          passProps: { community: response },
        });
			});
	}

	render() {
		return(
			<View style={styles.container}>
				<Image
					source={{uri: this.props.user.avatar_url}}
					style={styles.image}
				/>
				<View style={styles.tabsContainer}>
					<TouchableHighlight
						style={styles.tab}
						onPress={this.getResposHandler.bind(this)}
						underlayColor='#402EBD'
					>
						<Text style={styles.tabText}>REPOS</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.tab}
						onPress={this.getFollowersHandler.bind(this)}
						underlayColor='#402EBD'
					>
						<Text style={styles.tabText}>FOLLOWERS</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.tab}
						onPress={this.getFollowingHandler.bind(this)}
						underlayColor='#402EBD'
					>
						<Text style={styles.tabText}>FOLLOWING</Text>
					</TouchableHighlight>
				</View>
				<ScrollView
					style={styles.profileContent}
					automaticallyAdjustContentInsets={false}
				>
					<View style={styles.profileItem}>
						<Text style={styles.profileTitleText}>Name</Text>
						<Text style={styles.profileTitleDescription}>{this.props.user.name || 'Not Provided'}</Text>
					</View>
					<View style={styles.profileItem}>
						<Text style={styles.profileTitleText}>Email</Text>
						<Text style={styles.profileTitleDescription}>{this.props.user.email || 'Not Provided'}</Text>
					</View>
					<View style={styles.profileItem}>
						<Text style={styles.profileTitleText}>Company</Text>
						<Text style={styles.profileTitleDescription}>{this.props.user.company || 'Not Provided'}</Text>
					</View>
					<View style={styles.profileItem}>
						<Text style={styles.profileTitleText}>Location</Text>
						<Text style={styles.profileTitleDescription}>{this.props.user.location || 'Not Provided'}</Text>
					</View>
					<View style={styles.profileItem}>
						<Text style={styles.profileTitleText}>Followers</Text>
						<Text style={styles.profileTitleDescription}>{this.props.user.followers}</Text>
					</View>
					<View style={styles.profileItem}>
						<Text style={styles.profileTitleText}>Following</Text>
						<Text style={styles.profileTitleDescription}>{this.props.user.following}</Text>
					</View>
					<View style={styles.profileItem}>
						<Text style={styles.profileTitleText}>Available for hire</Text>
						<Text style={styles.profileTitleDescription}>{this.props.user.hireable ?  'Yes' : 'No'}</Text>
					</View>
					<View style={styles.profileItem}>
						<Text style={styles.profileTitleText}>Profile Url</Text>
						<Text style={styles.profileTitleDescription}>{this.props.user.html_url}</Text>
					</View>
				</ScrollView>
			</View>
		) 
	}
}

export default Dashboard;
