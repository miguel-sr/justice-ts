import { NextFunction, Request, Response } from "express";
import jwtService from "../services/jwt.service";

async function auth(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.headers.authorization) {
      return res.status(400).json("Missing authorization header.");
    }

    const token = req.headers.authorization.replace("Bearer ", "");

    const decoded = jwtService.verify(token);

    if (req.path != "/logout") {
      if (decoded.credentials !== "admin") {
        return res.status(401).json("Authorization denied.");
      }
    }

    next();
  } catch (error) {
    return res.status(401).json("Authorization denied.");
  }
}

export default auth;
