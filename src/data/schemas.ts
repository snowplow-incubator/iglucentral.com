import { Schema } from "./types";

export const getSchemas = async () => {
  //make request to /schemas setup proxy to fix in dev
  //iglucentral.com/schemas
  const res = await fetch("/schemas");
  const j = await res.json();
  const schemas = j
    .map((schemaPath: string) => {
      const [vendor, name, type, version] = schemaPath
        .replace("iglu:", "")
        .split("/");
      const schema: Schema = {
        fullName: `${vendor}/${name}`,
        name,
        vendor,
        type,
        version,
      };
      return schema;
    })
    .sort((s1: Schema, s2: Schema) => {
      return (
        s1.vendor.localeCompare(s2.vendor) || s1.name.localeCompare(s2.name)
      );
    });
  return schemas;
};

export const getSchema = async (
  fullName: string,
  type: string,
  version: string
) => {
  const res = await fetch(`/schemas/${fullName}/${type}/${version}`);
  const j = await res.json();
  return j;
};
