import React, { useState } from 'react'
import { View, Text,TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const JobTypes = ["Full Time", "Part Time", "Contract", "Intern"]

const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState("Full Time")
  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.userName}>Hello AJ</Text>
      <Text style={styles.welcomeMessage}>Find Your Perfect Job!</Text>
    </View>

    <View style={styles.searchContainer}>
     <View style={styles.searchWrapper}>
          <TextInput style={styles.serchInput} value='' onChange={() => {}} placeholder='What are you looking for!' />
     </View>
     <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
      <Image source={icons.search} style={styles.searchBtnImage} resizeMode='contain' />
     </TouchableOpacity>
    </View>

    <View style={styles.tabsContainer}>
     <FlatList keyExtractor={item => item} data={JobTypes} renderItem={({item}) => (
        <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={() => {
          setActiveJobType(item);
          router.push(`/search/${item}`)
        }}>
          <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
        </TouchableOpacity>
     )} horizontal contentContainerStyle={{columnGap: SIZES.small}} />
    </View>
    </View>
  )
}

export default Welcome