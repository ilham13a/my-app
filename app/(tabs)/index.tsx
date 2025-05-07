import { Text, View, StyleSheet, Image, Button, ScrollView } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from "expo-router";

const Home = () => {
    const onGoToDetail = () => {
        router.push('/detail')
    }

    const onStartCourse = () => {
        router.push('/course')
    }

    return (
        <SafeAreaProvider>
            <ScrollView style={styles.container}>
                <View style={styles.cardContainer}>
                    <View>
                        <Image
                            source={{ uri: 'https://reactjs.org/logo-og.png' }}
                            style={styles.imageStyle} />
                    </View>
                    <View style={styles.cardInfo}>
                        <View style={[styles.infoHeader]}>
                            <View>
                                <Text style={styles.chip}>Category</Text>
                            </View>
                            <Text style={{ flex: 1, textAlign: 'right' }}>Maret 2025</Text>
                        </View>
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <Text style={[styles.title, { verticalAlign: 'top' }]}>React Native Navigation</Text>
                            <Text style={{ verticalAlign: 'top' }}>When the text is rendered, the onLayout function gets called with the</Text>
                        </View>
                        <View style={{ marginBottom: 10, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Button
                                    onPress={onGoToDetail}
                                    title="Preview" color="#841584" />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Button
                                    title="Start"
                                    onPress={onStartCourse}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                {/* <View style={styles.cardContainer}>
                    <View>
                        <Image
                            source={{ uri: 'https://reactjs.org/logo-og.png' }}
                            style={styles.imageStyle} />
                    </View>
                    <View style={styles.cardInfo}>
                        <View style={[styles.infoHeader]}>
                            <View style={{}}>
                                <Text style={styles.chip}>Category</Text>
                            </View>
                            <Text style={{ flex: 1, textAlign: 'right' }}>Maret 2025</Text>
                        </View>
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <Text style={[styles.title, { verticalAlign: 'top' }]}>React Native Navigation</Text>
                            <Text style={{ verticalAlign: 'top' }}>When the text is rendered, the onLayout function gets called with the</Text>
                        </View>
                        <View style={{ marginBottom: 10, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Button
                                    onPress={() => { }}
                                    title="Preview" color="#841584" />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Button
                                    title="Start"
                                    onPress={() => { }}
                                />
                            </View>
                        </View>
                    </View>
                </View> */}

            </ScrollView >
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    imageStyle: {
        width: 120,
        height: 200,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: 'white',
        borderColor: '#f6f7f5',
        marginTop: 15
    },
    cardInfo: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    infoHeader: {
        flexDirection: 'row'
    },
    chip: {
        backgroundColor: '#e6e4e1',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        flexWrap: 'wrap'
    }
})

export default Home