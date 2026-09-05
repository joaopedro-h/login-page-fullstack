import bcrypt from "bcrypt";

async function encryptPassword(password) {
    
    const hashPassword = await bcrypt.hash(password, 10); // Criptografa a senha enviada pelo parâmetro da função.

    return hashPassword; // Retorna a senha criptografada.

}

export default encryptPassword;