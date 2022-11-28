import {createBrowserRouter, RouterProvider, Route, useParams, Link} from "react-router-dom";
import Main from "./Main";
import {RecieveFileInfo, TestRecieveFileInfo} from "../action/sendFile";
import axios from "axios";




function File() {

    let user = {
        fileId: String
    }



    let ob = {
        "name": "test.txt"
    }

    const {fileId} = useParams();
    user.fileId = {fileId}.fileId;
    console.log(user)
    const json = JSON.stringify(user);

    RecieveFileInfo(user);
    // sendToServer {fileId}
    // wait answer from server

    // render file and download link button
    //if()
    return (
        <div>

        </div>)
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/file/:fileId",
        element: <File />,
    },
]);


export default function Router() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}