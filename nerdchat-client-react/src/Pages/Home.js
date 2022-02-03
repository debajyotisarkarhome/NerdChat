import Banner from "../Components/Banner/Banner";
import logo from "../assets/images/banner.png";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{console.log("homeeffecttrigged")})
  return(<>
  <Banner path={logo}/>
  </>);
}
