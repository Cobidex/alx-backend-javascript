import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((r) => (
      r.map((ob) => ({
        status: ob.status,
        value: ob.status === 'fulfilled' ? ob.value : String(ob.err),
      }))
    ));
}
