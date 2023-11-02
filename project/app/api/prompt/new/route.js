import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


export const promptPost = async req => {
  const { userId, prompt, tag } = req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag
    })
    await newPrompt.save();
    return Response(JSON.stringify(newPrompt), { status: 201 })
  } catch (error) {
    return new Response('Failed to create a new prompt', { status: 500 })
  }
}

