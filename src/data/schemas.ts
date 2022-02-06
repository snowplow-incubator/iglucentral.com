import { Schema } from "./types";

export const getSchemas = async () => {
  //make request to /schemas setup proxy to fix in dev
  //iglucentral.com/schemas
  const res = await fetch("/schemas");
  const j = await res.json();
  const schemas = j.map((schemaPath: string) => {
    const [vendor, name, type, version] = schemaPath
      .replace("iglu:", "")
      .split("/");
    const schema: Schema = {
      name: `${vendor}/${name}`,
      type,
      version,
    };
    return schema;
  });
  return schemas;
};
