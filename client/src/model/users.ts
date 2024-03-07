import data from "../data/users.json";

export interface User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    email: string
    phone: string
    password: string
    birthDate: string
    image: string
    address: Address
  }
 
  export interface Address {
    address: string
    city: string
    coordinates: {
        lat: number
        lng: number
    }
    postalCode: string
    state: string
  }
  
    export function getUsers(): User[] {
        return data.items;
    }