import {create} from 'zustand';

type User = {
  id: number;
  name: string;
};

type UserState = {
  users: User[];
  addUser: (user: User) => void;
  removeUser: (id: number) => void;
};

export const useUsersStore = create<UserState>(set => ({
  users: [],
  addUser: user => set(state => ({users: [...state.users, user]})),
  removeUser: id =>
    set(state => ({users: state.users.filter(user => user.id !== id)})),
}));
