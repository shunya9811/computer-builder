import { useEffect } from "react";
import { Box } from '@mui/material';

const Storage = () => {

    useEffect(() => {
        const fetchStorageData = async () => {
            const res = await fetch("https://api.recursionist.io/builder/computers?type=hdd");
            const result = await res.json();
            return result;
        };

        fetchStorageData().then((list) => {
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
            <h2 className="partsHeader">Step4: Select your storage</h2>
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
                    <p className="form-label">HDD or SSD</p>
                    <select name="hddORssd" id="hddORssd" style={{width: "110px"}}>
                        <option value="HDD" selected>HDD</option>
                        <option value="SSD">SSD</option>
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Strage</p>
                    <select name="capacity" id="capacity" style={{width: "110px"}}>
                        <option value="Storage" selected>Storage</option>
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Brand</p>
                    <select name="brand" id="storage-brand-select" style={{width: "200px"}}>
                        <option value="Brand" selected>Brand</option>
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Model</p>
                    <select name="model" id="storage-model-select" style={{width: "200px"}}>
                        <option value="Model" selected>Model</option>
                    </select>
                </div>
            </Box>
        </Box>
    );
};

export default Storage;