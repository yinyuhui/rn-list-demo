import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Page1 = (props) => {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <Text>Page1</Text>
            <Button
                title="go back"
                onPress={() => {
                    navigation.goBack()
                }}
            />
            <Button
                title="go page2"
                onPress={() => {
                    navigation.navigate('Page2')
                }}
            />
            <Button
                title="open drawer navigator"
                onPress={() => {
                    navigation.openDrawer()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 20,
    },
})
export default Page1
