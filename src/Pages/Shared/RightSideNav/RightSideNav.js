import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useContext } from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';
import { AuthContext } from '../../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    
    const handleGoogleSignIn = event =>{
        
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error));
    }

    return (
        <div>
    <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with google</Button>
        <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
    </ButtonGroup>

        <div className='mt-5'>
            <h5>Find us on</h5>
        <ListGroup>
            <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
            <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
        </div>
        <div>
            <BrandCarosel></BrandCarosel>
        </div>

        </div>
    );
};

export default RightSideNav;