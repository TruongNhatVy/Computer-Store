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

export const addQueryNearlyRight = (query, needFilters, filterModel, regex) => {
  Object.keys(filterModel).forEach(function (key) {
    if (key == "_doc") {
      Object.keys(filterModel[key]).forEach(function (subKey) {
        let val = filterModel[key][subKey];

        needFilters.forEach((element) => {
          if (element == subKey) {
            query[element] = {
              $regex: new RegExp(val, "i"),
              //$regex: regexFiltersNearlyRight(val),
            };
          }
        });
      });
    }
  });
};

export const addQueryIgnoreCase = (query, ignoreCase, filterModel) => {
  Object.keys(filterModel).forEach(function (key) {
    if (key == "_doc") {
      Object.keys(filterModel[key]).forEach(function (subKey) {
        let val = filterModel[key][subKey];

        ignoreCase.forEach((element) => {
          if (element == subKey) {
            query[element] = {
              $regex: new RegExp("^" + val + "$", "i"),
            };
          }
        });
      });
    }
  });
};

export const addQueryLeft = (query, addedQuery, filterModel) => {
  Object.keys(filterModel).forEach(function (key) {
    if (key == "_doc") {
      Object.keys(filterModel[key]).forEach(function (subKey) {
        let val = filterModel[key][subKey];

        if (!addedQuery.includes(subKey)) {
          query[subKey] = val;
        }
      });
    }
  });
};
