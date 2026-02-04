import jwt from 'jsonwebtoken';

const auth = async(req, res, next) =>{
    const {token} = req.headers;
    if(!token){
        return res.json({success: false, message: "Not authorized login again"});
    }
    try {
        const token_decoded =  jwt.verify(token, process.env.JWT_SECRET);
        req.user = token_decoded.id;
        next();
    } catch (error) {
        console.log(error)
        return res.json({success: false, message: "Error: auth"});
    }
};

export default auth;