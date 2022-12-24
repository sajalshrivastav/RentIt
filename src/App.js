import React from "react";
import * as Components from './Components';
function App() {
  const [signIn, toggle] = React.useState(true);
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
          <Components.Button>Sign Up</Components.Button>

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
          <Components.LeftOverLayPanel signinIn={signIn}>

            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To Keep Connecting with us please Login with your Info
            </Components.Paragraph>
            <Components.GhostButton onclick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverLayPanel>
          <Components.RightOverLayPanel signinIn={signIn}>
            <Components.Title>Hello, Friends</Components.Title>
            <Components.Paragraph> Enter your Detail and Start your Journey with us   </Components.Paragraph>
            <Components.GhostButton onclick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
         
          </Components.RightOverLayPanel>
        </Components.OverLay>
      </Components.OverLayContainer>
    </Components.Container>
  )
}
export default App;