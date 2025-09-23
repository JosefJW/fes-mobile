import { ThemedText } from '@/components/themed-text';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Gyroscope, DeviceMotion } from 'expo-sensors';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
export default function RealTimeData() {
    const router = useRouter();
     const [data, setData] = useState({ x: 0, y: 0, z: 0 });
    const [motionData, setMotionData] = useState({});

  useEffect(() => {
    const subscription = Gyroscope.addListener(setData);
    Gyroscope.setUpdateInterval(100); // update every 100ms
    return () => subscription.remove();
  }, []);
  useEffect(() => {
    // Subscribe to device motion updates
    const subscription = DeviceMotion.addListener((data) => {
      setMotionData(data);
    });
     DeviceMotion.setUpdateInterval(100); // every 100ms

    return () => subscription.remove();
  }, []);
    const { acceleration, accelerationIncludingGravity, rotation, rotationRate, orientation } = motionData;
    return (
        <View style={styles.container}>
      <ThemedText type='title'>Gyroscope:</ThemedText>
      <ThemedText>x: {data.x.toFixed(2)}</ThemedText>
      <ThemedText>y: {data.y.toFixed(2)}</ThemedText>
      <ThemedText>z: {data.z.toFixed(2)}</ThemedText>
      <ThemedText type='title'>Device Motion Data</ThemedText>

      <ThemedText>Orientation: {orientation}</ThemedText>

      <ThemedText>
        Acceleration (no gravity):{" "}
        {acceleration ? `${acceleration.x.toFixed(2)}, ${acceleration.y.toFixed(2)}, ${acceleration.z.toFixed(2)}` : "N/A"}
      </ThemedText>

      <ThemedText>
        Acceleration (with gravity):{" "}
        {accelerationIncludingGravity ? `${accelerationIncludingGravity.x.toFixed(2)}, ${accelerationIncludingGravity.y.toFixed(2)}, ${accelerationIncludingGravity.z.toFixed(2)}` : "N/A"}
      </ThemedText>

      <ThemedText>
        Rotation (quaternion):{" "}
        {rotation ? `${rotation.alpha.toFixed(2)}, ${rotation.beta.toFixed(2)}, ${rotation.gamma.toFixed(2)}` : "N/A"}
      </ThemedText>

      <ThemedText>
        Rotation rate:{" "}
        {rotationRate ? `${rotationRate.alpha.toFixed(2)}, ${rotationRate.beta.toFixed(2)}, ${rotationRate.gamma.toFixed(2)}` : "N/A"}
      </ThemedText>
      <ThemedView style={styles.stepContainer}>
                      <TouchableOpacity
                          style={{ alignSelf: 'center'
                          , padding: 10, borderRadius: 8
                          }}
                          onPress={() => {
                              router.replace('/(tabs)');
                          }}
                      >
                          <ThemedText type="link" style={{ fontSize: 18 }}>
                              Home
                          </ThemedText>
                      </TouchableOpacity>
                  </ThemedView>
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: { flex: 1,   paddingTop: 80,left: 10,right: 10},
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 20,marginTop: 20 },
  
  stepContainer: {
        gap: 8,
        marginBottom: 50,
        alignItems: 'center', 
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
});
