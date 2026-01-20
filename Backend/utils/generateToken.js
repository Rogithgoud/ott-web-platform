import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndSetCookie= (userId,res) =>{
    const token= jwt.sign({userId}, ENV_VARS.JWT_SECRET,{expiresIn:"15d"});
    res.clearcookie("jwt-netflix",token,{
        maxAge:15*24*60*60*1000, //15 days in ms
        httpOnly:true,    //prevents XSS attacks cross site scripting attacks,make it not be accessed by js
        sameSite:"none", //CSRF attacks cross-site request forgery attacks
        secure: true,

    });
    return token;

}