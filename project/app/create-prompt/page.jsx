"use client"

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


const CreatePrompt = () => {

  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async e => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new",
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          //   // 'Content-Type': 'application/x-www-form-urlencoded',
          // },
          body: JSON.stringify({
            prompt: post.prompt,
            userId: session?.user.id,
            tag: post.tag,
          })
        })
      if (response) {
        router.push('/');
      }

    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form
      verb="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}
export default CreatePrompt;