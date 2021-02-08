import { Routes } from './routes'
import { NavItem } from './interfaces'

export const UserNavItems: NavItem[] = [
  {
    id: 1,
    name: 'Account',
    path: Routes.ACCCOUNT,
  },
  {
    id: 2,
    name: 'Order History',
    path: Routes.ORDER_HISTORY,
  },
  {
    id: 3,
    name: 'Meal Planner',
    path: Routes.PLANNER,
  },
]