import Specs from './Specs';
import { Button } from '@mui/material';

import { usePcContext } from "../context";
import { useState } from 'react';

const Results = () => {
    const [showSpecs, setShowSpecs] = useState(false);

    const {
        cpuModel,
        gpuModel,
        ramModel,
        storageModel
    } = usePcContext();

    const handleClick = () => {
        if (cpuModel !== "" && gpuModel !== "" && ramModel !== "" && storageModel !== ""){
            setShowSpecs(true);
        }
    }

    return(
        <>
            <Button 
                variant='outlined' 
                sx={{ width: "250px", background: "#ffffff", margin: "1rem"}}
                onClick={handleClick}
            >
               run a benchmark test
            </Button>
            <div className='showSpecs'>
                {showSpecs ? <Specs/> : ""}
            </div>
        </>
    );
};

export default Results;