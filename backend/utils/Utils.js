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

export const getQueryFilters = (needFilters, filterModel) => {
  let query = {};

  Object.keys(filterModel).forEach(function (key) {
    if (key == "_doc") {
      Object.keys(filterModel[key]).forEach(function (subKey) {
        let val = filterModel[key][subKey];
        needFilters.forEach((element) => {
          if (element == subKey) {
            query[element] = {
              $regex: val,
              $options: "i",
            };
          }
        });
      });
    }
  });

  return query;
};
