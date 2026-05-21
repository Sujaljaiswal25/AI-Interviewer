import jwt from "jsonwebtoken";
import blackListModel from "../models/blacklist.model.js";


const authMiddleware = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlackListed = await blackListModel.findOne({ token });

    if (isBlackListed) {
         return res.status(401).json({
            message: "token is invalid"
        })
    }

    try {

        const decode = jwt.verify( token, process.env.JWT_SECRET );

        req.user = decode;

        next()
        
    } catch (error) {
         return res.status(401).json({
            message: "Invalid token."
        })
    }
}


export default authMiddleware;