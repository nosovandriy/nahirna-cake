import { FbMessenger, Instagram, Telegram, Facebook, Viber } from '@icons/social';

export const defaultContacts = {
  instagram: 'https://www.instagram.com/viktoriia.nahirna/',
  facebook: 'https://www.facebook.com/viktoria.nosova.18',
  facebookMessanger: 'https://m.me/viktoria.nosova.18',
  telegram: 'https://t.me/Nahirna_Vika',
  viber: 'viber://chat?number=%2B380961682394',
};

export const iconContacts = [
  {
    title: defaultContacts.instagram,
    icon: <Instagram />,
  },
  {
    title: defaultContacts.facebookMessanger,
    icon: <FbMessenger />,
  },
  {
    title: defaultContacts.telegram,
    icon: <Telegram />,
  },
  {
    title: defaultContacts.viber,
    icon: <Viber />,
  },
  {
    title: defaultContacts.facebook,
    icon: <Facebook />,
  },
];

