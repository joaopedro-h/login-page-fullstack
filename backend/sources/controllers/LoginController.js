import LoginUserService from "../services/LoginUserService";

class LoginController {

    async store(req, res) {

        const { email, password } = req.body;
        
        try {

            const user = await LoginUserService.execute({
                email,
                password
            })          
            
            return res.status(200).json(user);

        } catch (error) {
            
            return res.status(400).json({
                error: error.message
            });

        }

    }
}

export default new LoginController();