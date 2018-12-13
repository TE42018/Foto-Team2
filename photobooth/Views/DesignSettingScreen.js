import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableNativeFeedback, TouchableWithoutFeedback, Slider } from 'react-native';
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge';

export default class DesignSettingScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>DESIGN</Text>
                </View>
                <View style={styles.body}>
                    <View style={settingsStyles.container}>
                        <View style={settingsStyles.row}>
                            <View style={styles.flex2}>
                                <View style={settingsStyles.rowHeader}>
                                    <Text style={styles.bodyText}>GIF</Text>
                                </View>
                                <View style={settingsStyles.rowImages}>
                                    {image(0, require('../Assets/Images/DesignScreen/GIF1.png'))}
                                    {image(20, require('../Assets/Images/DesignScreen/GIF2.png'))}
                                </View>
                            </View>
                            <View style={styles.flex4}>
                                <View style={settingsStyles.rowHeader}>
                                    <Text style={styles.bodyText}>Layout</Text>
                                </View>
                                <View style={settingsStyles.rowImages}>
                                    {image(0, require('../Assets/Images/DesignScreen/LAYOUT1.png'))}
                                    {image(20, require('../Assets/Images/DesignScreen/LAYOUT2.png'))}
                                    {image(20, require('../Assets/Images/DesignScreen/LAYOUT3.png'))}
                                    {image(20, require('../Assets/Images/DesignScreen/LAYOUT4.png'))}
                                    {image(20, require('../Assets/Images/DesignScreen/LAYOUT42.png'))}
                                    {image(20, require('../Assets/Images/DesignScreen/LAYOUT32.png'))}
                                </View>
                            </View>
                        </View>







                        <View style={settingsStyles.row}>
                            <View style={styles.flex2}>

                                <View style={settingsStyles.rowHeader}>
                                    <Text style={styles.bodyText}>Effect</Text>
                                </View>

                                <View style={settingsStyles.rowImages}>

                                    <TouchableNativeFeedback >
                                        <Text style={settingsStyles.button}>Evening</Text>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>

                            <View style={styles.flex4}>
                                <View style={settingsStyles.rowHeader}>
                                    <Text style={styles.bodyText}>Crop</Text>
                                </View>

                                <View style={settingsStyles.rowImages}>
                                    {image(0, require('../Assets/Images/DesignScreen/CROP1.png'))}
                                    {image(75, require('../Assets/Images/DesignScreen/CROP2.png'))}
                                    {image(75, require('../Assets/Images/DesignScreen/CROP3.png'))}
                                </View>
                            </View>
                        </View>







                        <View>
                            <View>
                                <Text style={styles.bodyText}>Margins</Text>
                                <Slider thumbStyle={{}}

                                />
                            </View>
                        </View>
                        <View>
                            <View>
                                <Text style={styles.bodyText}>Corners</Text>
                                <Slider

                                />
                            </View>
                        </View>



                        <View style={settingsStyles.row}>
                            <View style={styles.flex2}>

                                <View style={settingsStyles.rowHeader}>
                                    <Text style={styles.bodyText}>Logo</Text>
                                </View>

                                <View style={settingsStyles.rowImages}>

                                    <TouchableNativeFeedback >
                                        <Text style={settingsStyles.button}>Logo</Text>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>

                            <View style={styles.flex4}>
                                <View style={settingsStyles.rowHeader}>
                                    <Text style={styles.bodyText}>Logo Position</Text>
                                </View>

                                <View style={settingsStyles.rowImages}>
                                    {image(0, require('../Assets/Images/DesignScreen/LOGOPOSITION1.png'))}
                                    {image(75, require('../Assets/Images/DesignScreen/LOGOPOSITION2.png'))}
                                    {image(75, require('../Assets/Images/DesignScreen/LOGOPOSITION3.png'))}
                                </View>
                            </View>
                        </View>


                        <View style={settingsStyles.row}>
                            <View style={styles.flex2}>

                            <View style={settingsStyles.rowHeader}>
                                    <Text style={styles.bodyText}>Overlay image</Text>
                                </View>

                                <View style={settingsStyles.rowImages}>
                                    {image(0, require('../Assets/Images/DesignScreen/OVERLAY.png'))}
                                </View>
                            </View>
                        </View>

                        <View style={settingsStyles.row}>
                            <View style={styles.flex2}>

                            <View style={settingsStyles.rowHeader}>
                                    <Text style={styles.bodyText}>Margins Background</Text>
                                </View>

                                <View style={settingsStyles.rowImages}>
                                    {image(0, require('../Assets/Images/DesignScreen/MARGINS.png'))}
                                </View>
                            </View>
                        </View>




                    </View>







                    <View style={styles.preview}>

                    </View>





                </View>
            </View>


        );
    }
}

const image = (marginLeft, source) => {
    const imgStyle = StyleSheet.create({
        GIF: {
            marginLeft: marginLeft,
        }
    });

    return (
        <TouchableWithoutFeedback>
            <Image style={imgStyle.GIF} source={source}></Image>
        </TouchableWithoutFeedback>
    )

}

const settingsStyles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 4,
    },
    row: {
        marginTop: 30,
        flexDirection: 'row',
        marginBottom: 10,
    },
    rowHeader: {
        paddingBottom: 20,
    },
    rowImages: {
        flexDirection: 'row',
    },
    button: {
        padding: 20,
        backgroundColor: '#1a1a1a',
        color: '#fff',
        flex: 1,
        marginRight: 40,
        textAlign: 'center',
        fontSize: 20,
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        padding: 20,
    },
    header: {
        paddingTop: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#e5e5e5',
    },
    body: {
        flexDirection: 'row',
        flex: 1,
    },
    bodyText: {
        fontSize: 20,
        color: '#e5e5e5',
    },
    preview: {
        padding: 10,
        flex: 2,
    },
    flex2: {
        flex: 2,
    },
    flex4: {
        flex: 4,
    },
});