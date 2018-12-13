import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, WebView, Button } from 'react-native';
import RNPrint from 'react-native-print';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=';

export default class EndScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    static navigationOptions = {
        header: null,
    };

    async printHTML(html) {
        await RNPrint.print({
            html: html
        })
    }

    async printPDF() {
        const results = await RNHTMLtoPDF.convert({
            html: html,
            fileName: 'test',
            base64: true,
        })

        await RNPrint.print({ filePath: results.filePath })
    }

    render() {
        const { navigation } = this.props;
        const images = navigation.getParam("images", null)

        //#region html document
        const html = `<!DOCTYPE html>
        <html>
            <head>
                <title>Print example</title>
                <style>
                    *{
                        margin: 0;
                        border: none;
                    }
                    body{
                        background-color: white;
                    }
                    .imageCard{
                        background-color: rgba(0, 0, 0, 0.3);
                        position: relative;
                        width: 300px;
                        padding-top: 900px;
                        box-sizing: border-box;
                    }
                    .images{
                        /background-color: rgba(100, 0, 0, 0.3);
                        position: absolute;
                        
                        display: flex;
                        flex-direction: column;
                        top: 0;
                        width: 100%;
                        /*height: 65%;*/
                        padding-bottom: 5px;
                        box-sizing: border-box;
                    }
                    .imageContainer{
                        /background-color: rgba(0, 0, 100, 0.3);
                        box-sizing: border-box;
                        width: 100%;
                        padding: 5px 5px 0 5px;
        
                    }
                    .image{
                        width: 100%;
                        padding-top: 75%;
                        background: url("./ratio_16x9.jpg");
                        background-size: cover;
                        background-position: center;
                    }
                    .logo-container{
                        /background-color: rgba(0, 100, 0, 0.3);
                        width: 100%;
                        height: 25%;
                        position: absolute;
                        bottom: 0;
                        
                    }
                    .logo{
                        width: 100%;
                        position: absolute;
                        bottom: 0;
                    }
                    
                    @media print{
                        -webkit-print-color-adjust: exact;
                    }
        
                    .test{
                      width: 100px;
                       height: 100px;
                        background-color: blue;
                         position: absolute;
                          top: 0;
                           left: 0;
                    }
                </style>
            </head
            <body>
            
           ${(() => {
                let imgArr = ""
                for (let i = 0; i < images.length; i++) {
                    let imageUri = 'data:image/png;base64,' + images[i]
                    imgArr += "<div style='width: 400px; height: 300px; background: url(" + imageUri + "); background-size: cover; alt='logo'/></div>"
                }
                return imgArr
            })()}
            <!--    <div class="imageCard">
                    <div class="images">
                        <div class="imageContainer"><div class="image"></div></div>
                        <div class="imageContainer"><div class="image"></div></div>
                        <div class="imageContainer"><div class="image"></div></div>
                    </div>
                    
                    <div class="logo-container"><img src="logo.png" class="logo"></div>
                    
                </div>-->
                <script>
                  
                </script>
            </body>
        </html>`
        //#endregion


        return (
            <View style={styles.wrapper}>
                <View style={{
                    flex: 1, 
                    justifyContent: 'space-around',
                    // borderStyle: 'solid',
                    // borderWidth: 10
                }}>
                    <WebView 
                    scalesPageToFit = {true}
                    style={{
                    borderStyle: 'solid',
                    borderWidth: 10,
                    borderColor: 'red',
                }}source={{ html: html }}></WebView>
                </View>
                <Button title="press me" onPress={() => this.printHTML(html)}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
});
