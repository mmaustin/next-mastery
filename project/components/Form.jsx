import Link from "next/link"



const Form = ({ verb, post, setPost, submitting, handleSubmit }) => {
  //console.log(props.post);
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{verb} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {verb} and share amazing prompts with the world.
      </p>
      <form onSubmit={handleSubmit} className="mt-10 w-full max-w 2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            className="form_textarea"
            value={post.prompt}
            onChange={(e) => (
              setPost({ ...post, prompt: e.target.value })
            )}
            placeholder="Write Your Prompt Here . . . "
            required
          >
          </textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag&nbsp;
            <span className="font-normal">(#product, #web development, #idea)</span>
          </span>

          <input
            className="form_input"
            value={post.tag}
            onChange={(e) => (
              setPost({ ...post, tag: e.target.value })
            )}
            placeholder="#tag"
            required
          >
          </input>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
            {submitting ? `${verb}ing . . . ` : verb}
          </button>
        </div>
      </form>
    </section>
  )
}
export default Form