// /* eslint-disable prettier/prettier */
// import React from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   ScrollView,
//   TextInput,
// } from 'react-native';

// const App = () => {
//   return (
//     <ScrollView
//       contentContainerStyle={styles.scrollContainer}
//       showsVerticalScrollIndicator={false}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Peonia</Text>

//         {/* Input dengan styling lebih rapi */}
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your name"
//           placeholderTextColor="#888"
//         />

//         {/* Deskripsi */}
//         <Text style={styles.subTitle}>
//           Peony flowers carry a rich history of meaning, medicinal use, and myth
//           and are a delight to grow in the garden.
//         </Text>

//         {/* Container untuk gambar agar lebih sejajar */}
//         <View style={styles.imageContainer}>
//           <Image
//             style={styles.image}
//             source={{
//               uri: 'https://www.compo.de/dam/jcr:499073db-4e36-478e-82ac-571402797a19/peony-light-pink_pfingstrose-rosa.jpg?x=50&y=45',
//             }}
//           />
//           <Image
//             style={styles.image}
//             source={{
//               uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArXDro5rCoBkgsX3eraJ2TrjNyZcAgqIL-w&s',
//             }}
//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   container: {
//     backgroundColor: 'pink',
//     borderColor: 'white',
//     borderWidth: 10,
//     padding: 20,
//     borderRadius: 20,
//     alignItems: 'center',
//     width: '90%',
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: '900',
//     color: 'white',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   subTitle: {
//     fontSize: 16,
//     textAlign: 'center',
//     fontWeight: '500',
//     marginBottom: 20,
//     color: '#333',
//   },
//   input: {
//     width: '80%',
//     borderColor: 'black',
//     borderWidth: 2,
//     borderRadius: 10,
//     padding: 10,
//     fontSize: 18,
//     marginBottom: 20,
//     backgroundColor: 'white',
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     width: '100%',
//     marginTop: 20,
//   },
//   image: {
//     height: 150,
//     width: 150,
//     borderRadius: 10,
//   },
// });
