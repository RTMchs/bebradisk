import axios from 'axios';

// send fileId and Recieve link and some stuff
export const RecieveFileInfo = async (fileId) => {
    try {
        const response = await axios.post('/file', fileId);
        alert(`message from server ${response}`);
    }
    catch (e){
        alert("error");
    }
}
