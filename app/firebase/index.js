import firebase from 'firebase';

try{
    var config = {
    apiKey: "AIzaSyDwF0nO5eQNxnkhWxvd8UAD96OdX6Wry9k",
    authDomain: "todo-app-d9df3.firebaseapp.com",
    databaseURL: "https://todo-app-d9df3.firebaseio.com",
    storageBucket: "todo-app-d9df3.appspot.com",
    messagingSenderId: "60926295299"
  };

    firebase.initializeApp(config);
}catch (e){
    
}

export var firebaseRef = firebase.database().ref();
export default firebase;