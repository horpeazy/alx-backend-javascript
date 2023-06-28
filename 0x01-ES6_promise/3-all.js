import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  createUser()
  .then((response) => {
    const fullName = response;
    uploadPhoto()
    .then((response) => {
      console.log(`${response.body} ${fullName.firstName} ${fullName.lastName}`);
    })
  })
  .catch(() => console.log('Signup system offline'))
}
