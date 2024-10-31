import { Pressable, Text, View } from 'react-native';
import { userProfileStore } from '../../store/profile-store';
import { styles } from '../../../config/app-theme';

export const ProfileScreen = () => {

  const name = userProfileStore( state => state.name );
  const email = userProfileStore( state => state.email );
  const changeProfile = userProfileStore( state => state.changProfile );

  return (
    <View style={ styles.container }>
      <Text>{ name }</Text>
      <Text>{ email }</Text>

      <Pressable
        style={ styles.primayButton }
        onPress={ () => userProfileStore.setState( { name: 'Jorge Silva' } ) }>
        <Text style={ styles.title }>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        onPress={ () => userProfileStore.setState( { email: 'jorge.gsilva@catho.com' } ) }
        style={ styles.primayButton }>
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        onPress={ () => changeProfile( 'Jhon Doe', 'jhon.doe@gmail.com' ) }
        style={ styles.primayButton }>
        <Text>Regressar a Jhon</Text>
      </Pressable>

    </View>
  );
};