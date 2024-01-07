import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (pass.length < 6) {
          throw new Error("Password must be at least 6 characters long");
        }
      },
    },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", UserSchema);
