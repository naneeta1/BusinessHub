import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import navigationService from '../navigationService';

const GetStarted = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <LinearGradient
        style={{
          width: windowWidth,
          alignItems: 'center',
          //   justifyContent: 'center',
          height: windowHeight,
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={Color.themeBgColor}
        // locations ={[0, 0.5, 0.6]}
      >
        <View
          style={{
            height: windowHeight * 0.5,
            width: windowWidth * 0.9,
            // marginTop:moderateScale(30,.3),
            // marginBottom:moderateScale(20,.3),
            paddingVertical: moderateScale(20, 0.6),
            // backgroundColor:'black'
          }}>
          <CustomImage
            resizeMode="contain"
            source={require('../Assets/Images/logo.png')}
            style={{
              width: '100%',
              height: '100%',
              marginTop: moderateScale(25, 0.3),
            }}
          />
        </View>
      
     <View style ={{backgroundColor:'white',bottom:0,position:'absolute', width:windowWidth*0.98, height:windowHeight*0.4, borderTopStartRadius:moderateScale(30,.6), borderTopEndRadius:moderateScale(30,.6)}}>
      
        <CustomButton
          text={
            isLoading ? (
              <ActivityIndicator color={'#FFFFFF'} size={'small'} />
            ) : (
              'Buyer'
            )
          }
          textColor={Color.yellow}
          width={windowWidth * 0.8}
          height={windowHeight * 0.06}
          marginTop={moderateScale(100, 0.3)}
          onPress={() => {
            navigationService.navigate('Signup');
          }}
          bgColor={Color.white}
          borderColor={Color.yellow}
          
          borderWidth={1}
          // borderRadius={moderateScale(30, 0.3)}
        
        />
        <CustomButton
          text={
            isLoading ? (
              <ActivityIndicator color={'#FFFFFF'} size={'small'} />
            ) : (
              'Seller'
            )
          }
          textColor={Color.white}
          width={windowWidth * 0.8}
          height={windowHeight * 0.06}
          marginTop={moderateScale(20, 0.3)}
          onPress={() => {
            navigationService.navigate('LoginScreen');
          }}
          bgColor={Color.yellow}
          borderColor={Color.white}
          borderWidth={1}
          // borderRadius={moderateScale(30, 0.3)}
        />
        </View>
      
      </LinearGradient>
    </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: 'center',
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.themeColor,
  },
  bottomImage: {
    width: windowWidth * 0.5,
  },
  // textContainer: {
  //   flexDirection: "row",
  //   alignSelf :'center',
  //   width : windowWidth * 0.4,
  //   height :windowWidth * 0.4,
  //   borderRadius : moderateScale(windowWidth* 0.7 / 2 , 0.3),
  //   justifyContent : 'center',
  //   alignItems : 'center',
  //   // backgroundColor : Color.white,

  // },
  LogoText: {
    fontSize: moderateScale(35, 0.3),
    fontWeight: 'bold',
  },
});

export default GetStarted;
