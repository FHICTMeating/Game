import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { axios } from 'axios';


export default class PhotoScreen extends React.Component {
    static navigationOptions = {
        title: 'Photo piece',
    };

    componentWillMount() {
        // axios call naar api
        // this.getPieceOfImage
        //     .then(function (response) {
        //         // handle success
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image source={require('../assets/images/Ana-Cheri.jpg')}/>
            </ScrollView>
        );
    }

    getPieceOfImage = () => {
        return axios.get('');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
