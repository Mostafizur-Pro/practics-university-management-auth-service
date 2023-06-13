import { User } from './user.model'

// Find last user
// cause last user id number lagbe new user add korte
export const findLastUserId = async () => {
  const lastUser = await User.findOne(
    {},
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}

export const generateUserId = async () => {
  // padStart holo total 5 ta number exp: 00000
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  //   increament user id
  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementId
}
