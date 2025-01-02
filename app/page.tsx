import React from 'react'
import Intro from '@/components/intro'   
import { MDXRemote } from 'next-mdx-remote/rsc'

const page = () => {
  const content = `
  #  I'm a software engineer based in Lahore, Pakistan. I'm passionate about learning new technologies and sharing knowledge with others.
  `
  return (
    <section className="py-24">
    <div className="container max-w-3xl">
     <Intro/>

     <MDXRemote source={content} />
     </div>
  </section>
  )
}

export default page


