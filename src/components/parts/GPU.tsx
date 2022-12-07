import { useEffect } from "react";
import { Box } from '@mui/material';

const GPU = () => {

    useEffect(() => {
        const fetchGPUData = async () => {
            const res = await fetch("https://api.recursionist.io/builder/computers?type=gpu");
            const result = await res.json();
            return result;
        };

        fetchGPUData().then((list) => {
            console.log(list);
        })
    }, []);

    return(
        
        <Box
            sx={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            '@media screen and (max-width: 414px)': {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            },
            }}
        >
            <h2 className="partsHeader">Step2: Select your GPU</h2>
            <hr style={{color: "black"}}></hr>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                '@media screen and (max-width: 414px)': {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                }}
            >
                <div className="inputCon">
                    <p className="form-label">Brand</p>
                    <select name="brand" id="gpu-brand-select" style={{width: "200px"}}>
                        <option value="Brand" selected>Brand</option>
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Model</p>
                    <select name="model" id="gpu-model-select" style={{width: "200px"}}>
                        <option value="Model" selected>Model</option>
                    </select>
                </div>
            </Box>
        </Box>
    );
};

export default GPU;