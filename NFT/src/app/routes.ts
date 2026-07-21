import { createBrowserRouter } from 'react-router'
import Root from './Root'
import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import BuyNFT from '../pages/BuyNFT'
import FAQ from '../pages/FAQ'
import Contact from '../pages/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'gallery', Component: Gallery },
      { path: 'buy', Component: BuyNFT },
      { path: 'faq', Component: FAQ },
      { path: 'contact', Component: Contact },
    ],
  },
])
