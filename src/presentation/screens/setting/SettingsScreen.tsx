import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config/app-theme';
import { useCounterStore } from '../../store/counter-store';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {

  const incrementBy = useCounterStore( state => state.incrementBy );
  const count = useCounterStore( state => state.count );
  const navigation = useNavigation();

  useEffect( () => {
    navigation.setOptions( {
      headerTitle: () => <Text style={ styles.title }>Count: { count }</Text>
    } );
  }, [ count ] );


  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Count: { count }</Text>

      <Pressable
        style={ styles.primayButton }
        onPress={ () => { incrementBy( +1 ); } }>
        <Text style={ styles.title }>+1</Text>
      </Pressable>

      <Pressable
        style={ styles.primayButton }
        onPress={ () => { incrementBy( -1 ); } }>
        <Text style={ styles.title }>-1</Text>
      </Pressable>

    </View>
  );
};

// change name Menu Settings to => Count:xxxx