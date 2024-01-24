import React from 'react';
import {useUsersStore} from '../../store/users/users';
import {Button, Text, View} from 'react-native';

export const User = () => {
  const {users, addUser, removeUser} = useUsersStore();

  console.log('Render User----');

  return (
    <View>
      <Text>Usuários</Text>
      <Button
        title="Add Usuário"
        onPress={() =>
          addUser({
            id: Math.floor(Math.random() * 100),
            name: `Usuário ${Math.floor(Math.random() * 100)}`,
          })
        }
      />

      {users.length > 0 && (
        <Button
          title="Remove Usuário"
          onPress={() => removeUser(users[0].id)}
        />
      )}

      {users.map((user, index) => (
        <Text key={index}>{user.name}</Text>
      ))}
    </View>
  );
};
