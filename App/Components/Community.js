import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableHighlight,
	ScrollView,
} from 'react-native';

const styles = {
	container: {
		marginTop: 88,
		flex: 1,
		height: '100%',
    width: '100%',
	},
	text: {
		color: '#000',
		fontFamily: 'Helvetica',
	},
	profileContent: {
		paddingTop: 0,
	},
	imageContainer: {
		height: 30,
		width: 30,
		borderRadius: 30,
		overflow: 'hidden',
	},
	image: {
		height: '100%',
		width: '100%',
	},
	item: {
		paddingRight: 15,
		paddingLeft: 15,
		height: 60,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#402ebd52',
	},
	title: {
		fontWeight: 'bold',
		fontFamily: 'Helvetica',
	},
	subText: {
		color: '#555',
	},
};

class Community extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View style={styles.container}>
				<ScrollView
					automaticallyAdjustContentInsets={false}
				>
					{this.props.community.map((item) => (
						<View
							key={item.id}
							style={styles.item}
						>
							<View style={styles.imageContainer}>
								<Image
									style={styles.image}
									source={{uri: item.avatar_url}}
								/>
							</View>
							<Text style={styles.title}>{item.login}</Text>
						</View>
					))}
				</ScrollView>
			</View>
		) 
	}
}

export default Community;
