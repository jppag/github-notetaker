import React from 'react';
import {
	View,
	Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Animated,
  Easing,
} from 'react-native';

import API from '../Utils/api';
import Dashboard from './Dashboard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6141F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 88,
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  searchInput: {
    backgroundColor: '#fff',
    color: '#6141F9',
    fontSize: 18,
    marginTop: 30,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    width: 260,
  },
  button: {
    backgroundColor: '#4429c5',
    width: 260,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
  }
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      loading: false,
      error: false,
    };
  }

  componentWillMount() {
    this.animatedToTopTextValue = new Animated.Value(20);
    this.animatedOpacityTextValue = new Animated.Value(0);
    this.animatedToTopInputValue = new Animated.Value(20);
    this.animatedOpacityInputValue = new Animated.Value(0);
    this.animatedToTopButtonValue = new Animated.Value(20);
    this.animatedOpacityButtonValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.setState({
      username: '',
      loading: false,
      error: false,
    });
    
    Animated.stagger(70, [
      Animated.timing(this.animatedToTopTextValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
      }),
      Animated.timing(this.animatedOpacityTextValue, {
        toValue: 1,
        duration: 200,
        easing: Easing.ease,
      }),
      Animated.timing(this.animatedToTopInputValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
      }),
      Animated.timing(this.animatedOpacityInputValue, {
        toValue: 1,
        duration: 200,
        easing: Easing.ease,
      }),
      Animated.timing(this.animatedToTopButtonValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
      }),
      Animated.timing(this.animatedOpacityButtonValue, {
        toValue: 1,
        duration: 200,
        easing: Easing.ease,
      }),
    ]).start();
    
  }

  componentWillUnmount() {
    this.setState({
      username: '',
      loading: false,
      error: false,
    });
  }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text.toLowerCase(),
    });
  }

  handleSubmitButton() {
    this.setState({
      loading: true,
      error: false,
    });

    API.getBio(this.state.username).then((res) => {
      if (res.message === 'Not Found') {
        this.setState({
          error: 'User not found',
          loading: false,
        });
      } else {
        this.props.navigator.push({
          title: res.login || 'Select an Option',
          component: Dashboard,
          passProps: { user: res },
        });
        this.setState({
          username: '',
          loading: false,
          error: false,
        });
      }
    });
  }

	render() {
    const animatedToTopText = {
      transform: [{
        translateY: this.animatedToTopTextValue
      }],
      opacity: this.animatedOpacityTextValue,
    };
    const animatedToTopInput = {
      transform: [{
        translateY: this.animatedToTopInputValue
      }],
      opacity: this.animatedOpacityInputValue,
    };
    const animatedToTopButton = {
      transform: [{
        translateY: this.animatedToTopButtonValue
      }],
      opacity: this.animatedOpacityButtonValue,
    };
		return (
			<View style={styles.container}>
        <Animated.View style={animatedToTopText}>
          <Text style={styles.title}>Search for a Github User</Text>
        </Animated.View>
        <Animated.View style={animatedToTopInput}>
          <TextInput
            style={styles.searchInput}
            value={this.state.username}
            onChange={this.handleChange.bind(this)}
          />
        </Animated.View>
        <Animated.View style={animatedToTopButton}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmitButton.bind(this)}
            underlayColor='#27128e'
          >
            <Text style={styles.buttonText}>SEARCH</Text>
          </TouchableHighlight>
        </Animated.View>
        {this.state.error &&
          <Text style={styles.text}>{this.state.error}</Text>
        }
        <ActivityIndicator
          animating={this.state.loading}
          color='#fff'
          size='large'
        ></ActivityIndicator>
			</View>
		)
	}
}

export default Main;
