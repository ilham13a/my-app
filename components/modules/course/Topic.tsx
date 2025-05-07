import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { useState } from 'react';

interface CourseTopicProps {
  onNextContent: () => void;
  topic: Array<{ id: number; description: string }>;
}

export default function CourseTopic(props: CourseTopicProps) {
  const [activeTopic, setActiveTopic] = useState(0);

  const isShowNext = props.topic.length === activeTopic;

  const onContinue = () => {
    if (activeTopic < props.topic.length) {
      setActiveTopic(activeTopic + 1);
    }
  };

  const onNextTopic = () => {
    setActiveTopic(0);
    props.onNextContent();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={styles.image}
        />

        <View style={styles.contentContainer}>
          {props.topic.map((item, index) => (
            <View key={index} style={styles.topicContainer}>
              {index <= activeTopic && (
                <Text style={styles.courseItem}>{item.description}</Text>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        {!isShowNext && (
          <View style={styles.continueButton}>
            <Button
              onPress={onContinue}
              title="Tap to continue"
              color="#7e3ff2"
            />
          </View>
        )}

        {isShowNext && (
          <View style={styles.nextButton}>
            <Button
              onPress={onNextTopic}
              title="Next Topic"
              color="#4287f5"
            />
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#f0f0f0',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  topicContainer: {
    marginBottom: 15,
  },
  courseItem: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    fontFamily: 'Arial',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  footerContainer: {
    paddingTop: 20,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 8,
  },
  nextButton: {
    width: '100%',
    borderRadius: 8,
  },
});