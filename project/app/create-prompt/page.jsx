"use client"

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";


const CreatePrompt = () => {

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = e => {

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