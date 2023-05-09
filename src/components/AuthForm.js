import {
  TextInput,
  Button,
} from 'react95'

export default function AuthForm() {
  return (
    <>
      <p style={{textAlign: 'center', marginTop: 120}}>
        Restricted access
      </p>
      <br />
      <div style={{margin: '0 auto', maxWidth: 250}}>
        <TextInput
          placeholder='username'
          fullWidth
          style={{marginBottom: 15}}
        />
        <TextInput
          placeholder='password'
          fullWidth
          style={{marginBottom: 15}}
        />
        <Button onClick={() => alert('Incorrect access data, try again')}>Enter</Button>
      </div>
    </>
  )
}