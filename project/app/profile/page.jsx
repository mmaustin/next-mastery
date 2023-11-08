"use client";

import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const MyProfile = () => {

  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);
  //console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    }
    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = () => {

  };

  const handleDelete = async () => {

  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}
export default MyProfile;