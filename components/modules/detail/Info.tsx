import { View, ScrollView, Text, StyleSheet } from "react-native"

export const Info = () => {
    return (
        <ScrollView>
            <Text>
                Python is one of the most important programming languages and must be part of any programmer's toolset.
            </Text>

            <View style={{ marginTop: 5 }}>
                <Text style={styles.title}>What Will I Learn?</Text>
                <View style={styles.itemContainer}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.dot} />
                        <Text style={styles.itemText}>Understand and implement basic Python Code.</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.dot} />
                        <Text style={styles.itemText}>Solid understanding of Python programming fundamentals such as data types and structures, variables, loops, and functions.</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.dot} />
                        <Text style={styles.itemText}>Create small programs with Python 2.</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 15 }}>
                <Text style={styles.title}>Who is the target audience?</Text>
                <View style={styles.itemContainer}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.dot} />
                        <Text style={styles.itemText}>Understand and implement basic Python Code.</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.dot} />
                        <Text style={styles.itemText}>Solid understanding of Python programming fundamentals such as data types and structures, variables, loops, and functions.</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.dot} />
                        <Text style={styles.itemText}>Create small programs with Python 2.</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 15 }}>
                <Text style={styles.title}>Who is the target audience?</Text>
                <View style={styles.itemContainer}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.dot} />
                        <Text style={styles.itemText}>Understand and implement basic Python Code.</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.dot} />
                        <Text style={styles.itemText}>Solid understanding of Python programming fundamentals such as data types and structures, variables, loops, and functions.</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.dot} />
                        <Text style={styles.itemText}>Create small programs with Python 2.</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 15 }}>
                <Text style={styles.title}>Who is the target audience?</Text>
                <View style={styles.itemContainer}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.dot} />
                        <Text style={styles.itemText}>Understand and implement basic Python Code.</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.dot} />
                        <Text style={styles.itemText}>Solid understanding of Python programming fundamentals such as data types and structures, variables, loops, and functions.</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.dot} />
                        <Text style={styles.itemText}>Create small programs with Python 2.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 800
    },
    itemContainer: {
        marginLeft: 10
    },
    itemText: {
        marginLeft: 5,
        color: '#161360'
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: '#3B37BD',
        marginTop: 5
    },
})
