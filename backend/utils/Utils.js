import bcrypt, { hash } from "bcrypt";

const SALT = await bcrypt.genSalt(10);

export const HashPassword = async (password) => {
  return bcrypt.hash(password, SALT);
};

export const ComparePasswordAndHash = async (plainTextPassword, hashPassword) => {
  return bcrypt.compare(plainTextPassword, hashPassword);
};

