// 배경(연한 회색) : F9F9F8
// 아이콘(노랑) : FFD76F
// 아이콘(초록) : 144B44
// 아이콘(회색) : B5B5B5
// 텍스트(회색) : 747474
// 텍스트(검정) : 000000
// 텍스트 박스(회색) : D9D9D9

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Image, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import homeImage from './assets/mainimage.png';
import {ImageBackground} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 21,
    textAlign: 'left',
    margin: 10,
  },
  image: {
    width: 270,
    height: 270,
    margin: 10,
  },
  images2: {
    width: 150,
    height: 150,
    margin: 10,
  },
});

const images = [
  {id: '1', src: require('./assets/예약상태.png')},
  {id: '2', src: require('./assets/예약상태.png')},
  {id: '3', src: require('./assets/예약상태.png')},
]

const images2 = [
  {id: '1', src: require('./assets/단기 예약.png')},
  {id: '2', src: require('./assets/정기 예약.png')},
  {id: '3', src: require('./assets/이용 내역.png')},
]

function renderItem({ item }) {
  return <Image source={{ uri: item.src }} style={styles.image} />;
}

function renderItem2({ item }) {
  return <Image source={{ uri: item.src }} style={styles.images2} />;
}

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <ScrollView styles={styles.container}>
      <View style={{ height: 30 }} />
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.text}>오늘도 먼지없는 하루 되세요!!</Text>
      <FlatList
        data={images2}
        renderItem={renderItem2}
        horizontal={true}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

function SearchScreen() {
  return <Text>Search</Text>;
}

function NotificationScreen() {
  return <Text>Notification</Text>;
}

function MessageScreen() {
  return <Text>Message</Text>;
}

function MoreScreen() {
  return <Text>Message</Text>;
}


function BottomTabNavigationApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ImageBackground 
                  source={homeImage}
                  style={{ width: 390, height: 230 }}
                >
                  <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }} />
                  <Text style={{ position: 'absolute', left: 15, bottom: 35, color: 'white', fontSize: 24  }}>
                    김건우 님 안녕하세요.
                  </Text>
                  <Text style={{ position: 'absolute', left: 15, bottom: 15, color: 'white', fontSize: 15 }}>
                    오늘 하루는 어떠신가요?
                  </Text>
                </ImageBackground>
              </View>
            ),
            title: '홈',
            tabBarIcon: ({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            title: '내 예약',
            tabBarIcon: ({color, size}) => (
              <Icon name="people-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={NotificationScreen}
          options={{
            headerShown: false,
            title: '채팅',
            tabBarIcon: ({color, size}) => (
              <Icon name="chatbubble-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Gift"
          component={MessageScreen}
          options={{
            headerShown: false,
            title: '이벤트',
            tabBarIcon: ({color, size}) => (
              <Icon name="gift-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            headerShown: false,
            title: '더보기',
            tabBarIcon: ({color, size}) => (
              <Icon name="ellipsis-horizontal-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigationApp;