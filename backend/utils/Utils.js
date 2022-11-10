import bcrypt, { hash } from "bcrypt";

const SALT = await bcrypt.genSalt(10);

export const hashPassword = async (password) => {
  return bcrypt.hash(password, SALT);
};

export const comparePasswordAndHash = async (
  plainTextPassword,
  hashPassword
) => {
  return bcrypt.compare(plainTextPassword, hashPassword);
};

export const cleanObject = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (isEmpty(obj[key])) delete obj[key];
  });
};

export const isEmpty = (value) => {
  return (
    (typeof value == "string" && !value.trim()) ||
    typeof value == "undefined" ||
    value === null
  );
};
