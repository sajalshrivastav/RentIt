import React from "react";
import * as Components from './Components';
function App() {
  const [signIn] = React.useState(true);
  return (
    <Components.Container>
      <Components.SingUpContainer signinIn={signIn}
      >
        <Components.Form>
          <Components.Titles>
            Create Account</Components.Titles>
          <Components.Input type='text' placeholder='Name' />
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' placeholder='Password' />



        </Components.Form>
      </Components.SingUpContainer>
      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>
            Sign In
          </Components.Title>
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' placeholder='Password' />
          <Components.Anchor href='#'>Forget Your Password</Components.Anchor>
          <Components.Button>Sign In</Components.Button>

        </Components.Form>
      </Components.SignInContainer>
<Components.OverLayContainer signIn={signIn}>
  <Components.OverLay signIn={signIn}>
<Components.Title>Welcome Back!</Components.Title>
<Components.Paragraph>
  To Keep Connecting with us please Loginb with your Info
</Components.Paragraph>
  </Components.OverLay>
</Components.OverLayContainer>
    </Components.Container>
  )
}
export default App;