import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Markdown(props: { body: string }) {
  return (
    <ReactMarkdown
      className='text-sm'
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ node, ...props }) => <a className='text-blue-600 underline my-1' {...props}></a>,
        h1: ({ node, ...props }) => <h1 className='text-3xl my-1' {...props}></h1>,
        h2: ({ node, ...props }) => <h2 className='text-2xl my-1' {...props}></h2>,
        h3: ({ node, ...props }) => <h3 className='text-xl font-medium my-1' {...props}></h3>,
        h4: ({ node, ...props }) => <h4 className='text-xl my-1' {...props}></h4>,
        h5: ({ node, ...props }) => <h5 className='text-lg font-medium my-1' {...props}></h5>,
        h6: ({ node, ...props }) => <h6 className='text-lg my-1' {...props}></h6>,
        p: ({ node, ...props }) => <p className='text-md my-1' {...props}></p>,
        pre: ({ node, ...props }) => <pre className='rounded-md border border-slate-500 bg-slate-200 p-4 overflow-x-auto my-1' {...props}></pre>,
        code: ({ node, ...props }) => <code className='rounded-md border  bg-slate-200 p-0.5 px-1' {...props}></code>
      }}
    >{props.body}</ReactMarkdown>
  )
}
