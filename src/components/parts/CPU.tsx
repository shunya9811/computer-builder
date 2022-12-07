import { useEffect } from "react";
import { Box } from '@mui/material';

const CPU = () => {

    useEffect(() => {
        const fetchCPUData = async () => {
            const res = await fetch("https://api.recursionist.io/builder/computers?type=cpu");
            const result = await res.json();
            return result;
        };

        fetchCPUData().then((list) => {
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
            <h2 className="partsHeader">Step1: Select your CPU</h2>
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
                    <select name="brand" id="cpu-brand-select" style={{width: "200px"}}>
                        <option value="Brand" selected>Brand</option>
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Model</p>
                    <select name="model" id="cpu-model-select" style={{width: "200px"}}>
                        <option value="Model" selected>Model</option>
                    </select>
                </div>
            </Box>
        </Box>
    );
};

export default CPU;