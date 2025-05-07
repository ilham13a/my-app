import { View, ScrollView, StyleSheet, Button } from "react-native"
import { ButtonTabs } from "../components/ButtonTabs"
import React, { useState } from 'react';
import { Info, Materi } from "../components/modules/detail"

const Detail = () => {
    const [activeTabs, setActiveTabs] = useState('info');

    const UIActiveTabs = () => {
        if (activeTabs == 'info') return <Info />
        if (activeTabs == 'index') return <Materi />
        return <Info />
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.buttonTabContainer}>
                    <ButtonTabs
                        title="Description"
                        isActive={activeTabs == 'info'}
                        customStyle={{ flex: 1 }}
                        onPress={() => setActiveTabs('info')} />
                    <ButtonTabs
                        title="Index"
                        customStyle={{ flex: 1 }}
                        isActive={activeTabs == 'index'}
                        onPress={() => setActiveTabs('index')} />
                </View>
                <View style={styles.contentContainer}>
                    <UIActiveTabs />
                </View>
            </View>
            <View style={{ padding: 15 }}>
                <Button
                    title="Let's Go"
                    color="#14116B" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentContainer: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 20
    },
    buttonTabContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white'
    }
})
export default Detail