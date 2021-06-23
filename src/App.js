import React from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div>
      <h1>Hello from Aws Amplify</h1>
      <h1>This was built and deployed from a Github "push"</h1>
      <AmplifySignOut> </AmplifySignOut>
    </div>
  )
}

export default withAuthenticator(App)