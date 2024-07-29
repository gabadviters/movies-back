import * as bcrypt from "bcrypt"
const saltRounds = 10;
export const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error('Error al encriptar la contraseña:', error);
    throw error;
  }
};
export const verifyPassword = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    console.error('Error al verificar la contraseña:', error);
    throw error;
  }
};