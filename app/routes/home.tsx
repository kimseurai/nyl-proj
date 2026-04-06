import Breadcrumb from "~/components/atoms/breadcrumb";
import type { Route } from "./+types/home";
import Navbar from "~/components/molecule/navbar";
import Socialbutton from "~/components/atoms/socialbutton";
import Header from "~/components/atoms/header";
import Smallheader from "~/components/atoms/smallheader";
import Quicklinks from "~/components/molecule/quicklinks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-187.5 mx-auto flex flex-col gap-12 text font-[Tahoma]">
        <Breadcrumb />
        <Header />
        <Smallheader />
        <div className="h-1 w-full bg-[#DCD9D5]" />
        <Quicklinks />
        <div className="h-1 w-full bg-[#DCD9D5]" />
        <img src="public\articleimage.avif" />
      </div>
    </>
  );
}
