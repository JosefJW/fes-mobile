import { Image, Platform, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();
    return (
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={
            <Image
              source={require('@/assets/images/partial-react-logo.png')}
              style={styles.reactLogo}
            />
          }>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Welcome To FES!</ThemedText>
            <HelloWave />
          </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <TouchableOpacity
                    style={{ alignSelf: 'flex-start' 
                    , padding: 10, borderRadius: 8, backgroundColor: '#fafafaff'
                    }}
                    onPress={() => {
                        console.log('Navigating to Real-Time Data screen');
                        // Use Expo Router's Link component for navigation
                        router.replace('/RealTimeData');
                    }}
                >
                    <ThemedText type="link" style={{ fontSize: 18 }}>
                        Real-Time Data
                    </ThemedText>
                </TouchableOpacity>
            </ThemedView>
        </ParallaxScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
      stepContainer: {
        gap: 8,
        marginBottom: 8,
      },
      reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
      },
    });scm-history-item:c%3A%5CUsers%5Cmayan%5Cfes-mobile?%7B%22repositoryId%22%3A%22scm0%22%2C%22historyItemId%22%3A%2201065544a7ef3cddeaf7a38259e85163be2ccd38%22%2C%22historyItemParentId%22%3A%22561bbb1ed7a25d531e176d92e08a933273819165%22%2C%22historyItemDisplayId%22%3A%220106554%22%7D