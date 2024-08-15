import React, { useState } from 'react';
import { View, Dimensions, Text, Button, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button3D from '../components/Buttons/Button3D';

const { height } = Dimensions.get('window');

export default function WaterMonitoring() {
  

  return (
    <View className="container mx-auto">
      <LinearGradient colors={['#1E8FBB', 'white']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
        
       

    <Button3D>
      Debris
    </Button3D>
         
          

      </LinearGradient>
    </View>
  );
}


