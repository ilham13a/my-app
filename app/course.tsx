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
    // Topik 1: Pengenalan JSX
    {
      type: 'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value: [
        {
          id: 1,
          description: 'JSX adalah sintaks khusus yang memungkinkan kita menulis HTML di dalam JavaScript, yang digunakan di React. Meskipun terlihat seperti HTML, JSX sebenarnya adalah JavaScript yang diperluas untuk mempermudah pembuatan tampilan aplikasi.',
          bold: true,
        },
        {
          id: 2,
          description: 'Keuntungan utama menggunakan JSX adalah kemampuannya untuk membuat kode lebih bersih dan mudah dipahami. JSX memungkinkan pengembang untuk menulis HTML secara langsung dalam JavaScript.',
        },
        {
          id: 3,
          description: 'Sintaks dasar JSX sangat mirip dengan HTML, namun ada perbedaan penting seperti penggunaan tanda kurung untuk menempatkan ekspresi JavaScript.',
        },
        {
          id: 4,
          description: 'JSX memungkinkan kita untuk memasukkan ekspresi JavaScript langsung di dalam tag HTML dengan menempatkannya di dalam kurung kurawal {}.',
        },
        {
          id: 5,
          description: 'JSX digunakan untuk mendefinisikan komponen dan elemen UI, memungkinkan pembuatan tampilan aplikasi secara lebih modular dan deklaratif.',
        },
      ],
    },
    // Topik 2: Elemen dan Komponen JSX
    {
      type: 'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value: [
        {
          id: 1,
          description: 'Elemen JSX adalah elemen UI yang ditulis dalam sintaks mirip HTML. Setiap elemen JSX pada dasarnya adalah objek JavaScript yang mendeskripsikan bagian dari UI.',
          bold: true,
        },
        {
          id: 2,
          description: 'Komponen JSX memungkinkan kita untuk membangun antarmuka pengguna (UI) dalam aplikasi React. Komponen dapat berupa fungsi atau kelas yang merender elemen JSX.',
        },
        {
          id: 3,
          description: 'Props adalah cara untuk mengirim data dari komponen induk ke komponen anak di JSX, membuat aplikasi lebih fleksibel dan dapat digunakan kembali.',
        },
        {
          id: 4,
          description: 'State digunakan untuk menyimpan dan mengelola data internal komponen yang dapat berubah seiring waktu, membuat aplikasi lebih interaktif.',
        },
        {
          id: 5,
          description: 'Komponen fungsi lebih sederhana dan lebih sering digunakan, sementara komponen kelas memberikan lebih banyak fitur seperti metode lifecycle.',
        },
      ],
    },
    // Topik 3: Manipulasi dan Event dalam JSX
    {
      type: 'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value: [
        {
          id: 1,
          description: 'Menghubungkan event dengan JSX sangat mudah dengan menambahkan properti event handler, seperti onClick, onChange, atau onSubmit.',
          bold: true,
        },
        {
          id: 2,
          description: 'Event handling di JSX memungkinkan kita untuk menangani interaksi pengguna dalam aplikasi, seperti klik tombol atau perubahan input.',
        },
        {
          id: 3,
          description: 'Binding event dengan state memungkinkan kita untuk menangani perubahan data dalam aplikasi, mengubah state dan merender ulang komponen.',
        },
        {
          id: 4,
          description: 'Formulir di JSX melibatkan input pengguna yang perlu diproses, menggunakan event handler seperti onSubmit untuk menangani pengiriman form.',
        },
        {
          id: 5,
          description: 'Validasi formulir dengan JSX sangat penting untuk memastikan data yang dimasukkan oleh pengguna valid sebelum diproses lebih lanjut.',
        },
      ],
    },
    // Topik 4: Rendering dan Kondisional JSX
    {
      type: 'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value: [
        {
          id: 1,
          description: 'Conditional rendering di JSX memungkinkan kita untuk merender elemen tertentu berdasarkan kondisi, menggunakan pernyataan kondisional seperti if/else atau operator ternary.',
          bold: true,
        },
        {
          id: 2,
          description: 'Menggunakan .map() untuk merender list memungkinkan kita untuk merender elemen UI secara dinamis berdasarkan data array.',
        },
        {
          id: 3,
          description: 'JSX memungkinkan kita untuk menggunakan kondisi if/else dalam render untuk memilih elemen mana yang akan ditampilkan berdasarkan kondisi.',
        },
        {
          id: 4,
          description: 'Operator ternary memungkinkan kita untuk merender elemen berdasarkan kondisi dalam satu baris kode yang ringkas dan mudah dibaca.',
        },
        {
          id: 5,
          description: 'Rendering berdasarkan kondisi sangat berguna ketika kita perlu menampilkan elemen yang berbeda dalam situasi yang berbeda, seperti menampilkan pesan kesalahan atau loading spinner.',
        },
      ],
    },
    // Topik 5: Integrasi JSX dengan JavaScript Lainnya
    {
      type: 'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value: [
        {
          id: 1,
          description: 'JSX dapat digunakan bersama dengan fungsi JavaScript untuk memproses dan menampilkan data. Fungsi ini dapat dipanggil di dalam JSX untuk menghasilkan hasil yang dinamis.',
          bold: true,
        },
        {
          id: 2,
          description: 'Variabel dalam JSX memungkinkan kita untuk memasukkan data dinamis ke dalam elemen UI menggunakan {}.',
        },
        {
          id: 3,
          description: 'JSX dapat digunakan dengan perulangan dalam JavaScript untuk merender elemen secara dinamis, misalnya menggunakan .map() untuk merender array elemen.',
        },
        {
          id: 4,
          description: 'Menyusun JSX dalam array memungkinkan kita untuk menangani kumpulan elemen dinamis yang bisa di-render dalam sebuah komponen.',
        },
        {
          id: 5,
          description: 'JSX memungkinkan kita untuk menyusun logika yang lebih kompleks dengan memadukan ekspresi JavaScript, fungsi, dan event handling untuk menghasilkan UI yang responsif.',
        },
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
          
