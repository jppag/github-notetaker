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
	item: {
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
	title: {
		fontWeight: 'bold',
		fontFamily: 'Helvetica',
	},
	subText: {
		color: '#555',
	},
};

class Repositories extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View style={styles.container}>
				<ScrollView
					automaticallyAdjustContentInsets={false}
				>
					{this.props.repos.map((item) => (
						<View
							key={item.id}
							style={styles.item}
						>
							<Text style={styles.title}>{item.name}</Text>
							<Text style={styles.subText}>{(item.private ? 'Private' : 'Public')}</Text>
						</View>
					))}
				</ScrollView>
			</View>
		) 
	}
}

export default Repositories;
