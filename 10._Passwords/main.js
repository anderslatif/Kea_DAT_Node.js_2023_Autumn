import bcrypt from "bcrypt";

const saltRounds = 14;

const plainTextPassword = "hunter123";
const hashedPasswordOutput = "$2b$14$mPc9kx7m31aSqOtq.9YOpeMkewuxteKmu1cA7hZ3jkqUCe5SiPWG."

// const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);

const compareResult = await bcrypt.compare(plainTextPassword, hashedPasswordOutput);
console.log(compareResult);


