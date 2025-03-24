/* eslint-disable prettier/prettier */
// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   ScrollView,
//   SafeAreaView,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';

// const Exercises2 = () => {
//   const [message, setMessage] = useState('');

//   return (
//     <SafeAreaView style={styles.safeContainer}>
//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false}>
//         {/* Nama dan Jabatan */}
//         <Text style={styles.NAMA}>AIKO HANAKO LASUT</Text>
//         <Text style={styles.subTitle}>MAHASISWA SISTEM INFORMASI</Text>
//         <Text style={styles.subTitle}>FOUNDER AND PRESIDENT OF UVICS</Text>

//         {/* Foto Profil */}
//         <View style={styles.imageContainer}>
//           <Image
//             style={styles.image}
//             source={{
//               uri: 'https://media.licdn.com/dms/image/v2/D5603AQE0G38Vdi_oYg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684202832243?e=2147483647&v=beta&t=s1lYkgjIyGkulbpgX5WRajwEEq5PZRlOCs6k58aAVw0',
//             }}
//           />
//         </View>

//         {/* PENDIDIKAN */}
//         <View style={styles.container}>
//           <Text style={styles.poinutama}>EDUCATION</Text>
//           <Text style={styles.educationText}>
//             📌 Universitas Klabat - Sistem Informasi (2023 - Now)
//           </Text>
//           <Text style={styles.educationText}>
//             📌 SMA Sekolah Lanjutan Advent Tompaso 2 - IPA (2019 - 2022)
//           </Text>
//         </View>

//         {/* ABOUT ME */}
//         <View style={styles.container}>
//           <Text style={styles.poinutama}>ABOUT ME</Text>
//           <Text style={styles.ABOUT}>
//             Hi, I am Aiko! I am a passionate learner who enjoys exploring new
//             experiences. I find it fulfilling to engage in social activities as
//             it allows me to learn and share knowledge through writing and social
//             communication. I thrive when faced with challenges that push me to
//             grow and discover my potential. As an enthusiastic and dedicated
//             individual, I am always on the lookout for new opportunities to
//             learn and grow. I am excited about the possibilities that the future
//             holds.
//           </Text>
//         </View>

//         {/* CONTACT ME */}
//         <View style={styles.container}>
//           <Text style={styles.poinutama}>CONTACT ME</Text>
//           <Text style={styles.contactText}>
//             📧 Email: aikohanako.work@gmail.com
//           </Text>
//           <Text style={styles.contactText}>
//             🔗 LinkedIn:
//             https://www.linkedin.com/in/aiko-hanako-lasut-458065247/
//           </Text>
//           <Text style={styles.contactText}>📷 Instagram: @theonlyaiko_</Text>
//         </View>

//         {/* LEAVE A MESSAGE */}
//         <View style={styles.container}>
//           <Text style={styles.poinutama}>LEAVE A MESSAGE</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Write your message here..."
//             placeholderTextColor="#ddd"
//             value={message}
//             onChangeText={setMessage}
//           />
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => Alert.alert('Message Sent', message)}>
//             <Text style={styles.buttonText}>Send Message</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Exercises2;

// const styles = StyleSheet.create({
//   safeContainer: {
//     flex: 1,
//     backgroundColor: '#F2EFE7',
//     paddingTop: 20,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     alignItems: 'center',
//     padding: 20,
//   },
//   container: {
//     backgroundColor: '#609ED3',
//     borderColor: 'white',
//     borderWidth: 3,
//     padding: 20,
//     borderRadius: 15,
//     alignItems: 'center',
//     width: '90%',
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//     marginBottom: 15,
//   },
//   NAMA: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#48A6A7',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   subTitle: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//   },
//   poinutama: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 10,
//   },
//   skill: {
//     fontSize: 14,
//     color: '#666',
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'white',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     color: 'white',
//     backgroundColor: '#5078A0',
//   },
//   ABOUT: {
//     fontSize: 16,
//     textAlign: 'center',
//     fontWeight: '500',
//     marginBottom: 10,
//     color: 'white',
//     lineHeight: 22,
//   },
//   educationText: {
//     fontSize: 14,
//     color: 'white',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   contactText: {
//     fontSize: 14,
//     color: 'white',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   imageContainer: {
//     marginTop: 15,
//     marginBottom: 15,
//   },
//   image: {
//     height: 150,
//     width: 150,
//     borderRadius: 75,
//     borderWidth: 3,
//     borderColor: 'white',
//   },
//   skillContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//     width: '90%',
//   },
//   button: {
//     backgroundColor: '#48A6A7',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//     width: '100%',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
