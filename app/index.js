import React, { useLayoutEffect } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, icons, images } from '../constants'; 
import {Welcome,Popularjobs,Nearbyjobs,ScreenHeaderBtn } from '../components'; 


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.lightWhite,
      },
      headerShadowVisible: false,
      headerLeft: () => (
        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={() => {}} />
      ),
      headerRight: () => (
        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" handlePress={() => {}} />
      ),
      headerTitle: '',
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
