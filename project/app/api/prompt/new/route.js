import { connectToDB } from "@utils/database";

export const promptPost = async req => {
  const { userId, prompt, tag } = req.json();

  try {
    await connectToDB();
  } catch (error) {
    console.log(error);
  }
}

