import React from 'react';
import { ActivityIndicator, View, FlatList, Text } from 'react-native';
import { Button, Avatar, IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import { ICoin } from 'app/models/data/Coin';
import NavigationService from 'app/navigation/NavigationService';

import ApiConfig from 'app/config/api-config';

import styles from './styles';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const onForgot = () => NavigationService.navigate('Add');
  const [myCoins, SetMyCoins] = React.useState([]);
  const [progress, SetProgress] = React.useState(false);
  const [coinList, SetCoin] = React.useState([]);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  const Item = item => (
    <View style={styles.item}>
      <View style={styles.row}>
        <Avatar.Icon
          size={40}
          icon={
            item?.item?.symbol ? item?.item?.symbol : 'alpha-b-circle-outline'
          }
        />
        <View style={styles.nameContainer}>
          <Text>{item?.item?.name}</Text>
          <Text style={styles.txtSymbol}>{item?.item?.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>
          {formatter.format(item?.item?.price_usd)}
        </Text>
        <View style={styles.currencyContainer}>
          <Text
            style={
              item?.item?.percent_change_usd_last_24_hours < 0
                ? styles.down
                : styles.up
            }>
            {Number(item?.item?.percent_change_usd_last_24_hours).toFixed(2)}%
          </Text>
          <IconButton
            icon={
              item?.item?.percent_change_usd_last_24_hours < 0
                ? 'arrow-bottom-left'
                : 'arrow-top-right'
            }
            size={10}
            color={
              item?.item?.percent_change_usd_last_24_hours < 0
                ? '#F51720'
                : '#18A558'
            }
          />
        </View>
      </View>
    </View>
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      var coins: ICoin[] = [];
      try {
        myCoins.map(item => {
          fetch(ApiConfig.BASE_URL + ApiConfig.ASSETS + '/' + item + '/metrics')
            .then(results => results.json())
            .then(metrics => {
              let MyCoin: ICoin = {
                name: metrics?.data?.name,
                price_usd: metrics?.data?.market_data?.price_usd,
                percent_change_usd_last_24_hours:
                  metrics?.data?.market_data?.percent_change_usd_last_24_hours,
                slug: metrics?.data?.slug,
                symbol: metrics?.data?.symbol,
              };

              if (metrics?.data?.name !== undefined) {
                coins.push(MyCoin);

                SetCoin(coins);
              }
            });
        });
      } catch (e) {
        console.log(e);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [myCoins]);
  React.useEffect(() => {
    AsyncStorage.getItem('@app_coin_list').then(data => {
      SetMyCoins(JSON.parse(data));
    });
  }, []);

  return progress ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={coinList}
        renderItem={Item}
        keyExtractor={item => item.name}
      />
      <Button icon="plus" mode="outlined" onPress={onForgot}>
        Add a CryptoCurrency
      </Button>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Home;
