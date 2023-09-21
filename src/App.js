import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Blog from "./components/Blog";
import End from "./components/End";
import UserContext from "./components/Context";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Artist Name");
  const [desc, setDesc] = useState("Lorem ipsum");
  const [profilePic, setProfilePic] = useState(
    "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=ZAXJYLesh6gSd9huAgpy6rjpR4z-IFVH9MpxrKIXCrs="
  );
  const [work, setWork] = useState([
    {
      title: "Example",
      path: "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
      date: "Mar 16, 2020",
      type: "Part Blurry Pic",
    },
  ]);
  const data = {
    name: name,
    setName: setName,
    desc: desc,
    setDesc: setDesc,
    profilePic: profilePic,
    setProfilePic: setProfilePic,
    work: work,
    setWork: setWork,
  };
  return (
    <UserContext.Provider value={data}>
      <Header />
      <About />
      <Blog />
      <End />
    </UserContext.Provider>
  );
}
