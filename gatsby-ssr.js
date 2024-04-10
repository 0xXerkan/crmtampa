// Import React so that you can use JSX in HeadComponents
const React = require("react")

const HeadComponents = [
  <link key="my-link-1" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />,
  // <link key="my-link-2" rel="preconnect" href="https://fonts.googleapis.com" />,
  // <link key="my-link-3" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />,
  <title key="head-component-4">Cerberus Risk Management</title>,
]


const PostBodyComponents = [
  <script 
    key='my-script-1'
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossOrigin="anonymous" />
]

exports.onRenderBody = ({
  setHeadComponents,
  setPostBodyComponents
}, pluginOptions) => {
  setHeadComponents(HeadComponents)
  setPostBodyComponents(PostBodyComponents)
}