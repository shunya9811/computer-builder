import Specs from './Specs';
import { Button } from '@mui/material';

const Results = () => {
    let showSpecs = false;
    return(
        <>
            <Button 
                variant='outlined' 
                sx={{ width: "250px", background: "#ffffff", margin: "1rem"}}
            >
                Show specs of your pc
            </Button>
            <div className='showSpecs'>
                {showSpecs ? <Specs/> : ""}
            </div>
        </>
    );
};

export default Results;