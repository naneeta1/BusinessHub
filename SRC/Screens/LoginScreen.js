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
import TextInputWithTitle from '../Components/TextInputWithTitle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import navigationService from '../navigationService';
import { useDispatch } from 'react-redux';
import CardContainer from '../Components/CardContainer';
import { setUserToken } from '../Store/slices/auth';

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <LinearGradient
        style={{
          width: windowWidth,
          height: windowHeight,
          alignItems: 'center',
          justifyContent:'center'
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={Color.themeBgColor}
        // locations ={[0, 0.5, 0.6]}
      >
       <View
          style={{
            height: windowHeight * 0.2,
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
        <CardContainer  style={{paddingVertical: moderateScale(40, 0.3) , alignItems : 'center', justifyContent:'center', marginTop:moderateScale(50,.3)}}>

        <TextInputWithTitle
          iconName={'user'}
          iconType={SimpleLineIcons}
          LeftIcon={true}
          titleText={'username'}
          placeholder={'username'}
          setText={setUserName}
          value={username}
          viewHeight={0.07}
          viewWidth={0.75}
          inputWidth={0.7}
          border={1}
          // borderColor={Color.white}
          backgroundColor={Color.white}
          // marginTop={moderateScale(100, 0.3)}
          color={Color.black}
          placeholderColor={Color.veryLightGray}
          elevation
        />

        <TextInputWithTitle
          iconName={'key-outline'}
          iconType={Ionicons}
          LeftIcon={true}
          titleText={'Password'}
          placeholder={'password'}
          secureText={true}
          setText={setPassword}
          value={password}
          viewHeight={0.07}
          viewWidth={0.75}
          inputWidth={0.7}
          border={1}
          backgroundColor={Color.white}
          // borderColor={'#000'}
          marginTop={moderateScale(30, 0.3)}
          color={Color.black}
          placeholderColor={Color.veryLightGray}
          elevation
        />
          <CustomText
            numberOfLines={1}
            children={'Forgot Password?'}
            style={{
              fontSize: moderateScale(10, 0.6),
              color: 'black',
              width: windowWidth * 0.8,
              textAlign: 'right',
              marginTop:moderateScale(10,.3)
            }}
            onPress={() => {
              console.log('here');
              navigationService.navigate('EnterPhone');
            }}
          />


        <CustomButton
          onPress={()=>{
            dispatch(setUserToken({token:'sajdlka skjdslkdj'}))
          }}
          text={'Login'}
          textColor={Color.white}
          width={windowWidth * 0.4}
          height={windowHeight * 0.06}
          marginTop={moderateScale(30, 0.3)}
          bgColor={Color.yellow}
          borderRadius={moderateScale(5, 0.3)}
          // isGradient
        />
        </CardContainer>

        <CustomText style={styles.txt5}>Don't have an account ?</CustomText>
        <CustomText 
         onPress={() => navigationService.navigate('Signup')}
        isBold style={styles.txt6}>
          SignUp
        </CustomText>
      </LinearGradient>
    </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  txt5: {
    marginTop: moderateScale(25, 0.3),
    fontSize: moderateScale(11, 0.6),
    color:Color.black
  },
  txt6:{
    fontSize:moderateScale(19, 0.6),
    color:Color.white,
    // color:Color.black

  }
});

export default LoginScreen;
