import { CookingPot, ShoppingBasket } from "lucide-react"
import type { Route } from "./route.interface"
import SidebarItem from "./SidebarItem"

export default function UserNav() {

    const routes: Route[] = [
        {
            label: ('Recipes'),
            href: '/',
            icon: CookingPot
        },
        {
            label: ('Basket'),
            href: '/basket',
            icon: ShoppingBasket
        },
    ]
  return (
    <div className='space-y-2 px-2 pt-4 lg:pt-0'>
      {routes.map((route, index) => (
        <SidebarItem key={index} route={route} />
      ))}
    </div>
  )
}
