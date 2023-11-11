import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate('creator');

    if (!prompt) return new Response("Prompt not found", { status: 404 })

    return new Response(JSON.stringify(prompt), { status: 200 });

  } catch (error) {
    return new Response('No prompt with this id exists', { status: 500 });
  }
};


