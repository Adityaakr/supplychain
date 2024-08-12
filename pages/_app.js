import {TrackingProvider} from "../Context/Tracking";
import { navbar, Footer } from '@/Components';


export default function App({ Component, pageProps }) {
  return (
    <>
    <TrackingProvider>
    <navbar/>
    <Component {...pageProps} />
    </TrackingProvider>
    <Footer/>
    </>
  )
}