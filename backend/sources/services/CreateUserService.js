import * as Yup from "yup";
import connection from "../database/connection";
import encryptPassword from "../utils/encryptPassword";

class CreateUserService {

    async execute ({ email, password }) {

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
        })

        if (!(await schema.isValid({email, password}))) {
            throw new Error("Dados inválidos!");  
        }

        const [emailExists] = await connection.execute(
            `SELECT * FROM users
            WHERE email = ?`, [email]
        );

        if (emailExists.length > 0) {
            throw new Error("Email já em uso por outro usuário!");
        }

        const hashPassword = await encryptPassword(password);

        const [createUserResult] = await connection.execute(
        `INSERT INTO users (email, password)
        VALUES (?,?)`, [email, hashPassword]);

        return {
            id: createUserResult.insertId,
            email
        };

    }
}

export default new CreateUserService();