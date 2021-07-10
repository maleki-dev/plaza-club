export const addUser = (user, users) => {
  if (!user.id) return users;
  const existingUser = users.find(item => item.id === user.id);
  if (existingUser) return users;
  else return [...users, user];
};
