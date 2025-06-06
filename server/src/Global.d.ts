import { JwtPayload } from "@Services/Tokens/JwtPayload";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: number;
      };
    };
  };
};