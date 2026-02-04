import { useContext, useEffect } from "react"
import Button from "react-bootstrap/esm/Button"
import Container from "react-bootstrap/esm/Container"
import { Link, useNavigate } from "react-router-dom"
import { Storecontext } from "../context/Storecontext"

const LandingPage = () => {
    const {token} = useContext(Storecontext);
    const nevigate = useNavigate();
    useEffect(()=>{
        if(token){
            nevigate("/mynotes");
        }
    },[])
    return (
        <div className="d-flex justify-center items-center my-30 ">
            <Container className="text-center d-flex flex-col gap-5 bg-body-tertiary rounded-2xl p-5 w-auto">
                <div className="d-flex flex-col gap-2">
                    <h1 className="">Welcome To NotesWriter</h1>
                    <p className="text-xl">One safe place for all your notes</p>
                </div>
                <div className="d-flex justify-around">
                    <Link to='/login' className="hover:text-white no-underline!">
                        <Button variant="outline-success">
                            Login
                        </Button>
                    </Link>
                    <Link to='/signin' className='no-underline!'>
                        <Button variant="outline-primary">
                            SignIn
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default LandingPage
