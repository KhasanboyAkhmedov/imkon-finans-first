import React from 'react'
import { SeoProps } from './seo.props'
import Head from 'next/head'

const SEO = ({children, metaTitle, metaDescription, metaKeywords} : SeoProps) => {
  return (
    <>
        <Head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5'/>
            <title>{metaTitle}</title>

            <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
            <meta name='keyword' content={metaKeywords}/>
            <meta name='description' content={metaDescription}/>
            <link rel='shortcut icon' href={'./logo.png'} type='image/x-icon'/>
        </Head>
        {children}
    </>
  )
}

export default SEO