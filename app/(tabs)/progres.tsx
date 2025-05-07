import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

interface MaterialProgress {
  id: number;
  title: string;
  isRead: boolean;
}

interface QuizResult {
  answered: number;
  correct: number;
  total: number;
}

export default function Progress() {
  const { topics = '0', quizzes = '0', correct = '0' } = useLocalSearchParams();

  const [materials, setMaterials] = useState<MaterialProgress[]>([]);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    // Dummy materi (5 topik)
    const dummyMaterials: MaterialProgress[] = [
      { id: 1, title: 'Pengenalan JSX', isRead: Number(topics) >= 1 },
      { id: 2, title: 'Elemen dan Komponen JSX', isRead: Number(topics) >= 2 },
      { id: 3, title: 'Manipulasi dan Event dalam JSX', isRead: Number(topics) >= 3 },
      { id: 4, title: 'Rendering dan Kondisional JSX', isRead: Number(topics) >= 4 },
      { id: 5, title: 'Integrasi JSX dengan JavaScript Lainnya', isRead: Number(topics) >= 5 },
    ];

    const totalQuiz = 10;
    const dummyQuizResult: QuizResult = {
      answered: Number(quizzes),
      correct: Number(correct),
      total: totalQuiz,
    };

    setMaterials(dummyMaterials);
    setQuizResult(dummyQuizResult);
  }, [topics, quizzes, correct]);

  const renderMaterialItem = ({ item }: { item: MaterialProgress }) => (
    <View style={styles.materialItem}>
      <Text style={styles.materialTitle}>{item.title}</Text>
      <Text style={item.isRead ? styles.read : styles.unread}>
        {item.isRead ? '✅ Sudah dibaca' : '❌ Belum dibaca'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📘 Progress Materi JSX React</Text>

      <FlatList
        data={materials}
        renderItem={renderMaterialItem}
        keyExtractor={(item) => item.id.toString()}
        style={{ marginBottom: 20 }}
      />

      <Text style={styles.heading}>📝 Hasil Kuis</Text>
      {quizResult ? (
        <View style={styles.quizBox}>
          <Text>Soal dijawab: {quizResult.answered}/{quizResult.total}</Text>
          <Text>Jawaban benar: {quizResult.correct}</Text>
          <Text>Skor: {(quizResult.correct / quizResult.total) * 100}%</Text>
          <Text style={{ fontWeight: 'bold', color: quizResult.correct >= 7 ? 'green' : 'red' }}>
            {quizResult.correct >= 7 ? 'Lulus ✅' : 'Belum lulus ❌'}
          </Text>
        </View>
      ) : (
        <Text>Belum mengerjakan kuis.</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/course')}>
        <Text style={styles.buttonText}>Reset & Coba Lagi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  materialItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 8,
    borderRadius: 8,
  },
  materialTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  read: {
    color: 'green',
  },
  unread: {
    color: 'red',
  },
  quizBox: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
