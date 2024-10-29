interface Menu {
  activ: boolean;
  titel: string;
  url: string;
}

export const menus: Menu[] = [
  { activ: false, titel: 'Cart', url: '/cart' },
  {
    activ: false,
    titel: 'Home',
    url: '/',
  },
  { activ: false, titel: 'Produkte', url: '/produkte' },
  { activ: false, titel: 'Frauen', url: '/frauen' },
  { activ: false, titel: 'Männer', url: '/maenner' },
  { activ: false, titel: 'Kinder', url: '/kinder' },
];
