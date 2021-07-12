import React, { useState} from 'react'
//import firebase  from "../utils/firebase";

import Nav from "../components/Nav";
import Title from "../components/Title";
import UploadForm from "../components/UploadForm";
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";

export default function Home() {
    const [selectedImg, setSelectedImg] = useState(null);

return (
        <div className="App">
            <Nav />
            <Title/>
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>

 );
    
}