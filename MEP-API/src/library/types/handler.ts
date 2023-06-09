import { Request, Response } from "express";
import { readFile } from "fs";
import config from "../../config.json";
export function handler(filename: string, sucessFn: any, errorFn: any) {
    readFile(filename, (err, data) => {
        if (err) errorFn(err);
        sucessFn(data);
    });
}

const parse = require("url").parse,
    types: any = config.types,
    rootFolder = config.rootFolder,
    defaultFolder = config.defaultFolder,
    styles = config.styles,
    scripts = config.scripts,
    images = config.assets;

export function handleRequest(req: Request, res: Response) {
    console.log(req.url);
    let constructedPath: string;
    let pathExtension: string,
        filename = parse(req.url).pathname;
    if (filename === "/") filename = defaultFolder;
    if (filename === "/login") filename = "/login.html";

    constructedPath = rootFolder + filename;
    pathExtension = String(filename.substring(filename.lastIndexOf(".") + 1));
console.log(pathExtension);

    if (pathExtension === "css") constructedPath = styles + filename;
    if (pathExtension === "js") constructedPath = scripts + filename;
    if (pathExtension === "png" || pathExtension === "jpg") constructedPath = images + filename;

    let realPath = constructedPath ? constructedPath : rootFolder + defaultFolder;

    handler(
        realPath,
        function (data: any) {
            res.writeHead(200, {
                "Content-Type": types[pathExtension] || "text/plain",
                "Content-Length": data.length,
            }).end(data);

            
        },
        (err: any) => {
            res.writeHead(404);
            res.end();
        }
    );
}
