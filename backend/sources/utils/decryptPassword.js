import bcrypt from "bcrypt";

async function decryptPasswrod(password,user) {
    
    const hashPassword = await bcrypt.compare(password, user.password); // Compara a senha digitada com a senha criptografada armazenada no banco de dados.

    return hashPassword; // Retorna "true" caso as senhas sejam iguais, ou "false" caso sejam diferentes. 

}

export default decryptPasswrod;