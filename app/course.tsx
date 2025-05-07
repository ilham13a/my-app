import { useState, useEffect } from 'react';
import { BackHandler, View, ScrollView, Alert } from 'react-native';
import { router, useNavigation } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Topic from '../components/modules/course/Topic';
import Quiz from '../components/modules/course/Quiz';

// Sample course data, including topics and quizzes.
const courseData = {
  content: [
    // Materi
    {
      type: 'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value: [
        { id: 1, description: 'JSX adalah sintaks khusus...', bold: true },
        { id: 2, description: 'Keuntungan utama menggunakan JSX...' },
        { id: 3, description: 'Sintaks dasar JSX sangat mirip dengan HTML...' },
        { id: 4, description: 'JSX memungkinkan kita untuk memasukkan ekspresi...' },
        { id: 5, description: 'JSX digunakan untuk mendefinisikan komponen...' },
      ],
    },
    {
      type: 'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value: [
        { id: 1, description: 'Elemen JSX adalah elemen UI...', bold: true },
        { id: 2, description: 'Komponen JSX memungkinkan kita untuk membangun UI...' },
        { id: 3, description: 'Props adalah cara untuk mengirim data...' },
        { id: 4, description: 'State digunakan untuk menyimpan dan mengelola data...' },
        { id: 5, description: 'Komponen fungsi lebih sederhana dan sering digunakan...' },
      ],
    },
    {
      type: 'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value: [
        { id: 1, description: 'Menghubungkan event dengan JSX sangat mudah...', bold: true },
        { id: 2, description: 'Event handling di JSX memungkinkan kita untuk menangani interaksi...' },
        { id: 3, description: 'Binding event dengan state memungkinkan kita untuk menangani perubahan...' },
        { id: 4, description: 'Formulir di JSX melibatkan input pengguna...' },
        { id: 5, description: 'Validasi formulir dengan JSX sangat penting...' },
      ],
    },
    {
      type: 'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value: [
        { id: 1, description: 'Conditional rendering di JSX memungkinkan kita...', bold: true },
        { id: 2, description: 'Menggunakan .map() untuk merender list...' },
        { id: 3, description: 'JSX memungkinkan kita untuk menggunakan kondisi if/else...' },
        { id: 4, description: 'Operator ternary memungkinkan kita untuk merender...' },
        { id: 5, description: 'Rendering berdasarkan kondisi sangat berguna...' },
      ],
    },
    {
      type: 'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value: [
        { id: 1, description: 'JSX dapat digunakan bersama fungsi JavaScript...', bold: true },
        { id: 2, description: 'Variabel dalam JSX memungkinkan kita untuk memasukkan data dinamis...' },
        { id: 3, description: 'JSX dapat digunakan dengan perulangan dalam JavaScript...' },
        { id: 4, description: 'Menyusun JSX dalam array memungkinkan kita menangani elemen dinamis...' },
        { id: 5, description: 'JSX memungkinkan kita untuk menyusun logika kompleks...' },
      ],
    },
    // ... (other "materi" content)
    // Quiz content
    {
      type: 'quiz',
      ilustration: null,
      value: {
        question: 'Apa itu JSX?',
        options: [
          { value: 1, label: 'Sintaks JavaScript yang digunakan untuk styling' },
          { value: 2, label: 'Sintaks HTML dalam JavaScript' },
          { value: 3, label: 'JavaScript Object' },
          { value: 4, label: 'XML' },
        ],
        answer: 2,
      },
    },
    {
      type: 'quiz',
      ilustration: null,
      value: {
        question: 'Apa keuntungan utama menggunakan JSX?',
        options: [
          { value: 1, label: 'Membuat kode lebih bersih dan mudah dipahami' },
          { value: 2, label: 'Menambah ukuran aplikasi' },
          { value: 3, label: 'Memperlambat aplikasi' },
          { value: 4, label: 'Menghapus elemen HTML' },
        ],
        answer: 1,
      },
    },
    {
      type: 'quiz',
      ilustration: null,
      value: {
        question: 'Bagaimana cara memasukkan ekspresi JavaScript dalam JSX?',
        options: [
          { value: 1, label: 'Menggunakan tanda kurung `[]`' },
          { value: 2, label: 'Menggunakan tanda kurung `{}`' },
          { value: 3, label: 'Menggunakan tanda kutip `""`' },
          { value: 4, label: 'Menggunakan tanda petik `' },
        ],
        answer: 2,
      },
    },
    {
      type: 'quiz',
      ilustration: null,
      value: {
        question: 'Apa itu props dalam JSX?',
        options: [
          { value: 1, label: 'Cara mengirim data dari komponen induk ke komponen anak' },
          { value: 2, label: 'Fungsi dalam komponen' },
          { value: 3, label: 'Sebuah jenis event handler' },
          { value: 4, label: 'Penyimpanan data internal komponen' },
        ],
        answer: 1,
      },
    },
    {
      type: 'quiz',
      ilustration: null,
      value: {
        question: 'Apa yang dimaksud dengan state dalam JSX?',
        options: [
          { value: 1, label: 'Penyimpanan data internal komponen yang bisa berubah' },
          { value: 2, label: 'Data yang diterima dari props' },
          { value: 3, label: 'Sebuah jenis event handler' },
          { value: 4, label: 'Komponen yang dirender oleh React' },
        ],
        answer: 1,
      },
    },
    {
      type: 'quiz',
      ilustration: null,
      value: {
        question: 'Bagaimana cara menghubungkan event dengan JSX?',
        options: [
          { value: 1, label: 'Dengan menambahkan properti event handler, seperti `onClick`' },
          { value: 2, label: 'Dengan menambahkan tag `<event>`' },
          { value: 3, label: 'Dengan menambahkan event handler di file CSS' },
          { value: 4, label: 'Dengan menggunakan `addEventListener` di dalam JavaScript' },
        ],
        answer: 1,
      },
    },
    {
      type: 'quiz',
      ilustration: null,
      value: {
        question: 'Apa itu conditional rendering dalam JSX?',
        options: [
          { value: 1, label: 'Merender elemen berdasarkan kondisi' },
          { value: 2, label: 'Menambahkan elemen statis ke UI' },
          { value: 3, label: 'Menambahkan CSS ke elemen' },
          { value: 4, label: 'Menambahkan interaksi dengan state' },
        ],
        answer: 1,
      },
    },
    {
      type: 'quiz',
      ilustration: null,
      value: {
        question: 'Bagaimana cara merender list di JSX?',
        options: [
          { value: 1, label: 'Menggunakan tag `<list>`' },
          { value: 2, label: 'Dengan menggunakan `.map()`' },
          { value: 3, label: 'Dengan menggunakan `.reduce()`' },
          { value: 4, label: 'Dengan menggunakan `forEach()`' },
        ],
        answer: 2,
      },
    },
    {
      type: 'quiz',
      ilustration: null,
      value: {
        question: 'Bagaimana cara menyisipkan logika JavaScript dalam JSX?',
        options: [
          { value: 1, label: 'Menggunakan `{}`' },
          { value: 2, label: 'Menggunakan `[]`' },
          { value: 3, label: 'Menggunakan `""`' },
          { value: 4, label: 'Menggunakan `""` dengan kode di luar JSX' },
        ],
        answer: 1,
      },
    },
    {
      type: 'quiz',
      ilustration: null,
      value: {
        question: 'Apa yang dimaksud dengan variabel dalam JSX?',
        options: [
          { value: 1, label: 'Tempat untuk menyimpan data statis' },
          { value: 2, label: 'Data dinamis yang bisa dimasukkan ke dalam elemen UI' },
          { value: 3, label: 'Jenis props' },
          { value: 4, label: 'Event handler untuk elemen UI' },
        ],
        answer: 2,
      },
    },
  ],
};

export default function Course() {
  const navigation = useNavigation();
  const [activeContent, setActiveContent] = useState(0);
  const [topicsRead, setTopicsRead] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleBackNavigation = () => {
    const readTopics = courseData.content.slice(0, activeContent).filter(c => c.type === 'materi').length;
    const answeredQuizzes = courseData.content.slice(0, activeContent).filter(c => c.type === 'quiz').length;

    router.replace({
      pathname: '/(tabs)/progres',
      params: {
        topics: readTopics.toString(),
        quizzes: answeredQuizzes.toString(),
        correct: correctAnswers.toString(),
      },
    });
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      handleBackNavigation();
      return true;
    });

    return () => backHandler.remove();
  }, [activeContent, correctAnswers]);

  const onNextContent = (answered = true, correct = false) => {
    const current = courseData.content[activeContent];

    if (current?.type === 'materi') setTopicsRead((prev) => prev + 1);
    if (current?.type === 'quiz' && answered) {
      setQuizAnswered((prev) => prev + 1);
      if (correct) setCorrectAnswers((prev) => prev + 1);
    }

    const isLast = activeContent >= courseData.content.length - 1;

    if (isLast) {
      router.replace({
        pathname: '/(tabs)/progres',
        params: {
          topics: (topicsRead + (current?.type === 'materi' ? 1 : 0)).toString(),
          quizzes: (quizAnswered + (answered ? 1 : 0)).toString(),
          correct: (correctAnswers + (correct ? 1 : 0)).toString(),
        },
      });
    } else {
      setActiveContent((prev) => prev + 1);
    }
  };

  const renderProgressBar = () => {
    const progress = ((activeContent + 1) / courseData.content.length) * 100;

    return (
      <View style={{
        height: 12,
        backgroundColor: 'white',
        borderRadius: 6,
        marginVertical: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
      }}>
        <View style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: 'green',
          borderRadius: 6,
        }} />
      </View>
    );
  };

  const CourseController = () => {
    const item = courseData.content[activeContent];
    if (!item) return null;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#000', paddingBottom: 20 }}>
        <View style={{
          marginHorizontal: 16,
          backgroundColor: 'white',
          borderRadius: 10,
          overflow: 'hidden',
          paddingBottom: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
          }}>
          {item.type === 'materi' && <Topic onNextContent={() => onNextContent()} topic={item.value} />}
          {item.type === 'quiz' && <Quiz onNextContent={onNextContent} content={item.value} />}
          </View>
          
          markdown
          Salin
          Edit
              {renderProgressBar()}
            </ScrollView>
          );
          };
          
          return (
          <SafeAreaProvider>
          <CourseController />
          </SafeAreaProvider>
          );
          }
          
