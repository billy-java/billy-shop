interface Menu {
  activ: boolean;
  titel: string;
  url: string;
}

export const menus: Menu[] = [
  {
    activ: false,
    titel: 'Home',
    url: '/',
  },
  { activ: false, titel: 'Frauen', url: '/frau' },
  { activ: false, titel: 'Männer', url: '/man' },
  { activ: false, titel: 'Kinder', url: '/kind' },
  { activ: false, titel: 'Cart', url: '/cart' },
];
