import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/AppNavigator';

type LoadingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Loading'>;

const LoadingScreen = () => {
  const navigation = useNavigation<LoadingScreenNavigationProp>();
  
  // Animation values
  const spinAnimation = new Animated.Value(0);
  const floatAnimation1 = new Animated.Value(0);
  const floatAnimation2 = new Animated.Value(0);
  const floatAnimation3 = new Animated.Value(0);
  const floatAnimation4 = new Animated.Value(0);
  const floatAnimation5 = new Animated.Value(0);
  const floatAnimation6 = new Animated.Value(0);
  
  // Screen dimensions for responsive positioning
  const { width, height } = useWindowDimensions();

  // Start animations when component mounts
  useEffect(() => {
    // Spinning circle animation
    Animated.loop(
      Animated.timing(spinAnimation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Floating animations for decorative elements
    const startFloatingAnimation = (animation: Animated.Value, duration: number, delay: number = 0) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 1,
            duration: duration,
            delay: delay,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 0,
            duration: duration,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          })
        ])
      ).start();
    };

    startFloatingAnimation(floatAnimation1, 3000);
    startFloatingAnimation(floatAnimation2, 2500, 200);
    startFloatingAnimation(floatAnimation3, 2800, 400);
    startFloatingAnimation(floatAnimation4, 3200, 300);
    startFloatingAnimation(floatAnimation5, 3500, 100);
    startFloatingAnimation(floatAnimation6, 2600, 500);
    
    // Navigate to ReviewTranslatedData screen after 3 seconds
    const navigationTimer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'ReviewTranslatedData' }],
      });
    }, 3000);
    
    // Clear timeout if component unmounts
    return () => clearTimeout(navigationTimer);
  }, [navigation]);

  // Spin interpolation
  const spin = spinAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Floating element interpolations for vertical movement
  const getFloatingTransform = (animation: Animated.Value, range: number = 20) => {
    return animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, range]
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Decorative Elements */}
        <Animated.View 
          style={[
            styles.decorativeElement, 
            { 
              top: height * 0.2, 
              left: width * 0.3,
              transform: [{ translateY: getFloatingTransform(floatAnimation1) }] 
            }
          ]}
        >
          <View style={[styles.dot, styles.lightBlue]} />
        </Animated.View>
        
        <Animated.View 
          style={[
            styles.decorativeElement, 
            { 
              top: height * 0.25, 
              left: width * 0.15,
              transform: [{ translateY: getFloatingTransform(floatAnimation2) }] 
            }
          ]}
        >
          <View style={[styles.dot, styles.blue]} />
        </Animated.View>
        
        <Animated.View 
          style={[
            styles.decorativeElement, 
            { 
              top: height * 0.35, 
              left: width * 0.7,
              transform: [{ translateY: getFloatingTransform(floatAnimation3) }] 
            }
          ]}
        >
          <View style={[styles.dot, styles.lightBlue]} />
        </Animated.View>
        
        <Animated.View 
          style={[
            styles.decorativeElement, 
            { 
              top: height * 0.4, 
              left: width * 0.25,
              transform: [{ translateY: getFloatingTransform(floatAnimation4) }] 
            }
          ]}
        >
          <View style={[styles.dot, styles.blue]} />
        </Animated.View>

        {/* Document Icon */}
        <Animated.View 
          style={[
            styles.documentIcon, 
            { 
              transform: [{ translateY: getFloatingTransform(floatAnimation5, 15) }] 
            }
          ]}
        >
          <Icon name="document-text-outline" size={50} color="#2D7CFF" />
          <View style={styles.documentLines}>
            <View style={styles.documentLine} />
            <View style={styles.documentLine} />
            <View style={[styles.documentLine, styles.shortLine]} />
          </View>
        </Animated.View>

        {/* Main Spinning Circle */}
        <Animated.View 
          style={[
            styles.spinningCircle, 
            { transform: [{ rotate: spin }] }
          ]}
        >
          <View style={styles.circleRing} />
        </Animated.View>
        
        {/* Text */}
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>
            Translating your document...
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decorativeElement: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  blue: {
    backgroundColor: '#2D7CFF',
  },
  lightBlue: {
    backgroundColor: '#BFD7FF',
  },
  documentIcon: {
    position: 'absolute',
    top: '35%',
    backgroundColor: '#FFFFFF',
    width: 85,
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2D7CFF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#E8F2FF',
  },
  spinningCircle: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  circleRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: '#2D7CFF',
    borderTopColor: 'transparent',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#333',
    marginVertical: 2,
  },
  inlineBlueCircle: {
    marginHorizontal: 4,
    width: 8,
    height: 8,
  },
  documentLines: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  documentLine: {
    width: 35,
    height: 2,
    backgroundColor: '#BFD7FF',
    marginVertical: 1,
    borderRadius: 1,
  },
  shortLine: {
    width: 22,
  },
});

export default LoadingScreen;