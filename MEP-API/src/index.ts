import {App}  from "./app/app"
App.server.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on Port: ${process.env.PORT}`);
});