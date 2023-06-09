import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import {accRoutes} from './routes/Accounts.ts'
import {friendRoutes} from './routes/Friends.ts'
import {generalRoutes} from './routes/General.ts'
import {postsRoutes} from './routes/Posts.ts'

class NodeServer {
    public server;
    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    }

    private middleware() {
        dotenv.config();
        this.server.use(express.json());
        this.server.use(helmet());
        this.server.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
        this.server.use(morgan("common"));
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({ extended: false }));
        this.server.use(cors());
    }

    private router() {
        this.server.use(express.static('pages'))
        this.server.use(accRoutes)
        this.server.use(friendRoutes)
        this.server.use(generalRoutes)
        this.server.use(postsRoutes)
    }
}

export const App = new NodeServer();
