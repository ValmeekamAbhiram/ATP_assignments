import React from "react";
import Profile from "./Profile";

function Profiles() {
  //State
  const data = [
  {
    title: "News App using ReactJS",
    description: "Fetch news using APIs",
    author: "Mehul Kathuri",
    date: "Aug 14, 2020",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    title: "Medium Like Blogging App",
    description: "Using Angular & Firebase",
    author: "Mehul Kathuri",
    date: "Jan 2, 2024",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    title: "COVID Tracker App",
    description: "Statistics app using API",
    author: "Mehul Kathuri",
    date: "Mar 14, 2026",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg"
  }
]
  //Return react element
  return (
    <div className="flex justify-center gap-6 p-10 flex-wrap">
      {data.map((item, index) => (
        <Profile key={index} data={item} />
      ))}
    </div>
  );
}

export default Profiles;