"use client"

import Form from "@components/Form";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";


const EditPrompt = () => {

  const router = useRouter();
  const searchParams = useSearchParams;
  const promptId = searchParams.length('id');

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
export default EditPrompt;