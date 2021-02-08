import { Routes } from './routes'
import { NavItem } from './interfaces'

export const MainNavItems: NavItem[] = [
  {
    id: 1,
    name: 'Menu',
    path: Routes.MENU,
  },
  {
    id: 2,
    name: 'About',
    path: Routes.ABOUT,
  },
  {
    id: 3,
    name: 'Contact',
    path: Routes.CONTACT,
  },
  {
    id: 4,
    name: 'Delivery',
    path: Routes.DELIVERY,
  },
]