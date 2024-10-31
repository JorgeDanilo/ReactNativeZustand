import { create } from 'zustand';

export interface ProfileState {
  name: string;
  email: string;

  changProfile: ( name: string, email: string ) => void;
}

export const userProfileStore = create<ProfileState>()( ( set, get ) => ( {

  name: 'Jhon Doe',
  email: 'jhon.doe@gmail.com',

  changProfile: ( name: string, email: string ) => {
    set( { name, email } );
  }

} ) );