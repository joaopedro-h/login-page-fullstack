import * as Yup from "yup";
import connection from "../database/connection";
import decryptPasswrod from "../utils/decryptPassword";

class LoginUserService {

    async execute ({ email, password }){

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
        })

        if (!(await schema.isValid({email, password}))) {
            throw new Error("Dados inválidos!");  
        }

        const [resultUser] = await connection.execute(
            `SELECT * FROM users
            WHERE email = ?`, [email]
        );

        if (resultUser.length === 0) {
            throw new Error("Nenhum usuário encontrado!");
        }

        const user = resultUser[0];

        const hashPassword = await decryptPasswrod(password, user)

        if (!hashPassword) {
            throw new Error("Senha incorreta!"); 
        }

        return {
            id: user.id,
            email: user.email
        }

    }

}

export default new LoginUserService();