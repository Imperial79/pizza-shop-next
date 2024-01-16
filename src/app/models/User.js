import { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    fullname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      max: 10,
      validate: (ph) => {
        if (ph.length < 10) {
          new Error("Phone number must be at least 10 digits long");
          return false;
        }
      },
    },
    address: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (pass.length < 6) {
          new Error("Password must be at least 6 characters long");
        }
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", async function (user) {
  const pass = user.password.toString();
  const salt = await bcrypt.genSalt(10);
  user.password = bcrypt.hashSync(pass, salt);
});

export const User = models?.User || model("User", UserSchema);
