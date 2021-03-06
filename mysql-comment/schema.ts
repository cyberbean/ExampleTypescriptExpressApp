import { Schema } from "jsonschema";

export const postBodySchema: Schema = {
  type: "object",
  properties: {
    post_id: {
      type: "number",
    },
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    body: {
      type: "string",
    },
  },
  required: ["post_id", "email", "body"],
};

export const paramIdSchema: Schema = {
  type: "number",
};
