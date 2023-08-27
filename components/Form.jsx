import Link from 'next/link'
export const Form=({
  type,
  post,
  setPost,
  submitting,
  handleSubmit
})=> {
  return (
    <section className="w-full max-w-full flex-star flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span> 
      </h1>
      <p className="desc text-left max-w-md">
        {type } and share amazing prompts with the, word let your imagination run wild with any AI-powered platform
      </p>
      <form action=""
      className="mt-10 w-fullmax-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor="prompt">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea 
          value={post.prompt}
          onChange={(e)=>{setPost({...post,prompt: e.target.value})}}
          placeholder='write your prompt here...'
          required
          className='form_textarea'
            >

          </textarea>
        </label>
        <label htmlFor="tag">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {' '}
            <span className='font-normal'>
              ( #product, #webdevelopement, #idea)
            </span>
          </span>
          <input 
          value={post.tag}
          onChange={(e)=>{setPost({...post,tag: e.target.value})}}
          placeholder='write your tag here...'
          required
          className='form_input'
            />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4 ">
          <Link
          href="/"
          className="text-gray-500 text-sm" 
          >
          Cancel
          </Link>
          <button type='submit'
          disabled={submitting}
          onClick={handleSubmit}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
          {submitting ? `${type}...`:type}
          </button>
        </div>
      </form>
    </section>
  )
}
