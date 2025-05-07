import { View, FlatList, Text, StyleSheet } from "react-native"

const DATA = [
    { id: '1', title: 'First Item', describe: 'Where is Python used?' },
    { id: '2', title: 'Second Item', describe: 'Where is Python used?' },
    { id: '3', title: 'Third Item', describe: 'Where is Python used?' },
    { id: '4', title: 'Third Item', describe: 'Where is Python used?' },
    { id: '5', title: 'Third Item', describe: 'Where is Python used?' },
    { id: '7', title: 'Third Item', describe: 'Where is Python used?' },
    { id: '8', title: 'Third Item', describe: 'Where is Python used?' },
    { id: '9', title: 'Third Item', describe: 'Where is Python used?' },
    { id: '10', title: 'Third Item', describe: 'Where is Python used?' },
];

type ItemProps = {
    title: string;
    describe: string
};

const Item = ({ title, describe }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.describe}>{describe}</Text>
    </View>
);

export const Materi = () => {
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item
                    title={item.title}
                    describe={item.describe}
                />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#E8E8E8'
    },
    title: {
        fontWeight: 800,
    },
    describe: {
        color: '#9D9B9B'
    }

})