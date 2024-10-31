import { Text, View } from 'react-native';
import { styles } from '../../../config/app-theme';
import { userProfileStore } from '../../store/profile-store';
import { useCounterStore } from '../../store/counter-store';

export const HomeScreen = () => {

  const name = userProfileStore( state => state.name );
  const email = userProfileStore( state => state.email );
  const count = useCounterStore( state => state.count );

  return (
    <View style={ styles.container }>
      <Text>{ name }</Text>
      <Text>{ email }</Text>

      <Text style={ styles.title }>Count: { count }</Text>
    </View>
  );
};