const data = require("./index.json");

const generateUpdateQuery = (data, table_name) => {
  const getJsonKeys = Object.keys(data);
  const getJsonValues = Object.values(data);
  let updateString = "";
  for (idx in getJsonKeys) {
    if (getJsonKeys[idx].toLowerCase() === "id") {
      continue;
    }
    updateString += `${getJsonKeys[idx]} = ${JSON.stringify(
      getJsonValues[idx]
    )}, `;
  }
  const updateQuery = `UPDATE ${table_name} SET ${updateString} WHERE id = 1`;
  return updateQuery;
};

console.log(generateUpdateQuery(data, "users"));
