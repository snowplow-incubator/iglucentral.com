export type Schema = {
  fullName: string;
  fullPath: string;
  name: string;
  vendor: string;
  version: string;
  type: string;
};

type SchemaKey = {
  vendor: string;
  name: string;
  format: string;
  version: string;
};

export type SelfDescribingSchema = {
  self: SchemaKey;
  description?: string;
  properties?: string;
  items?: string;
  required?: string[];
  additionalProperties?: boolean;
  type?: string;
  $schema: string;
};
