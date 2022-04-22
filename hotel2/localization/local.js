import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: { welcome: 'Welcome', 
        enterYourName:'Enter your name', 
        enterYourPass:'Enter your password', 
        login:'Log in', exit:'Exit',
        close:'Close',
        rooms:'Rooms',
        balance:'Balance',
        fio:'Surname name patronymic',
        userdata:'User data',
        roomsbusy:'Sorry rooms busy',
        free:'Free',
        busy:'Busy',
        price:'Price',        
        notenoughmoney:'Not enough money',
        hack:'Increase the balance on the main page',
      },
  ru: { welcome: 'Здравствуйте' , 
        enterYourName:'Введите ваше имя', 
        enterYourPass:'Введите ваш пароль', 
        login:'Вход', 
        exit:'Выход',
        close:'Закрыть',
        rooms:'Комнаты',
        balance:'Баланс',
        fio:'фамилия имя отчество',
        userdata:'Данные пользователя',
        roomsbusy:'Номер занят',
        free:'Свободен',
        busy:'Занят',
        price:'Цена',
        notenoughmoney:'Не достаточно средств',
        hack:'Увеличте баланс на главной странице',
      },
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
//alert(i18n.locale)
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;
export default i18n; 
