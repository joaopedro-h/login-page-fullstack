import CreateUserService from "../services/CreateUserService";

class RegisterController {

    async store(req, res){

        const { email, password } = req.body;

        try {
            
            const user = await CreateUserService.execute({
                email, 
                password
            });

            return res.status(201).json(user);

        } catch (error) {
            
            return res.status(400).json({
                error: error.message
            });

        }

    }
}

export default new RegisterController();