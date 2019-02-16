import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Alert
} from 'react-native';
import styles from './styles';

import Button from '../../../components/button';

import RegistrationSteps from './steps';

type Props = {
};


class Registration extends React.Component<Props> {
    static navigationOptions = ({ navigation }) => ({
        header : null,
    });
    

    constructor(props) {
        super(props);
        this.state = {
            currentStep : 0,
        };
    }

    onPressBack = () => {
        const { currentStep } = this.state;
        if( currentStep === 0 ) {
            const { navigation } = this.props;
            navigation.goBack();
        } else {
            this.setState({currentStep : this.state.currentStep - 1});
        }
    }

    onPressNext = () => {
        const { currentStep } = this.state;
        if( currentStep === 1 ) {
            Alert.alert(
                'Terms & Conditions',
                '...',
                [
                    {
                        text: 'I agree',
                        onPress: () => {
                            alert('TO REGISTER');
                            this.props.navigation.navigate('Login');
                        },
                    },
                    {
                        text: 'Cancel',
                        onPress: () => {},
                        style: 'cancel',
                    },
                ],
                {cancelable: false},
            );
        } else {
            this.setState({currentStep : this.state.currentStep + 1});
        }
    }

    onChangeFields = (newKeyPairs) => {
        this.setState({
            ...this.state,
            ...newKeyPairs,
        });
    }

    render() {
        const { currentStep } = this.state;
        const _styles = styles('seculacer');

        return (
            <View style={_styles.mainContainer}>
                <View style={_styles.controlsWrapper}>
                    <RegistrationSteps onChangeFields={this.onChangeFields} currentStep={currentStep} />
                </View>
                <View style={_styles.buttonsWrapper}>
                    <Button
                        title="BACK"
                        style={_styles.buttons}
                        onPress={this.onPressBack}
                        titleStyle={_styles.titleStyle}
                    />
                    <Button
                        title="NEXT"
                        style={_styles.buttons}
                        onPress={this.onPressNext}
                        titleStyle={_styles.titleStyle}
                    />
                </View>
            </View>
        );
    }
}
const mapStateToProps = store => ({
});
const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);
