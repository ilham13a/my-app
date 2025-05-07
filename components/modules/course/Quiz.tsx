import React, { useState } from "react";
import { View, Text, Button, ScrollView, Alert } from "react-native";
import { RadioButton } from "@/components/RadioButton"; // Adjust the import based on your project structure

interface QuizProps {
  onNextContent: (answered: boolean, correct: boolean) => void;
  content: {
    question: string;
    options: Array<{ value: any; label: string }>;
    answer: number | null;
  };
}

const Quiz: React.FC<QuizProps> = ({ onNextContent, content }) => {
  const [userAnswer, setUserAnswer] = useState<number | null>(null);

  const checkAnswer = () => {
    if (userAnswer === null) {
      Alert.alert("Pilih jawaban terlebih dahulu!");
      return;
    }
    const isCorrect = userAnswer === content.answer;
    onNextContent(true, isCorrect);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ padding: 15 }}>
        <Text>{content.question}</Text>
        {content.options.map((option, index) => (
          <View key={index}>
            <RadioButton
              onSelect={(val) => setUserAnswer(val)}
              label={option.label}
              value={option.value}
              selected={userAnswer === option.value}
            />
          </View>
        ))}
      </ScrollView>
      <View style={{ padding: 15 }}>
        <Button title="Submit" color="#841584" onPress={checkAnswer} />
      </View>
    </View>
  );
};

export default Quiz;
