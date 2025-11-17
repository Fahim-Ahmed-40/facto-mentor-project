import { Outlet } from "react-router";
import Header from "~/components/layout/Header";
import Herocards from "~/components/pages/home/Hero-cards";
import HeroSection from "~/components/pages/home/Hero-section";

export default function BaseLayout() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Herocards/>
      <Outlet />
    </>
  );
}
