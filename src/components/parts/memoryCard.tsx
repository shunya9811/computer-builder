import { useEffect } from "react";
import { Box } from '@mui/material';

const MemoryCard = () => {

    useEffect(() => {
        const fetchMemoryCardData = async () => {
            const res = await fetch("https://api.recursionist.io/builder/computers?type=ram");
            const result = await res.json();
            return result;
        };

        fetchMemoryCardData().then((list) => {
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
            <h2 className="partsHeader">Step3: Select your memory card</h2>
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
                    <p className="form-label">How Many?</p>
                    <select name="ramHowMany" id="ramHowMany" style={{width: "140px"}}>
                        <option value="-" selected>-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Brand</p>
                    <select name="brand" id="memoryCard-brand-select" style={{width: "200px"}}>
                        <option value="Brand" selected>Brand</option>
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Model</p>
                    <select name="model" id="memoryCard-model-select" style={{width: "200px"}}>
                        <option value="Model" selected>Model</option>
                    </select>
                </div>
            </Box>
        </Box>
    );
};

export default MemoryCard;