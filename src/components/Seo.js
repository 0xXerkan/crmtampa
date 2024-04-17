import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { withAssetPrefix } from 'gatsby'

export const Seo = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    // image: `${siteUrl}${image}`,
    // url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{title ? `${seo.title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={title ? `${seo.title} | ${defaultTitle}` : defaultTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={withAssetPrefix("/favicon.ico")} />
      {children}
    </>
  )
}