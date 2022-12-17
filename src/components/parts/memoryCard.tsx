import { useEffect } from "react";
import { Box } from '@mui/material';

import { usePcContext } from "../../context";

const MemoryCard = () => {
    const {
        setRamList,
        setRamHashmap,
        setNumber,
        setBrand,
        setModel,
        createBrandList,
        createModelList,
        ramList
    } = usePcContext();

    useEffect(() => {
        const fetchMemoryCardData = async () => {
            const res = await fetch("https://api.recursionist.io/builder/computers?type=ram");
            const result = await res.json();
            return result;
        };

        fetchMemoryCardData().then((list) => {
            setRamList(list);

            let hashmap = new Map<string, number>();
            for (let i = 0; i < list.length; i++){
                hashmap.set(list[i].Model, list[i].Benchmark);
            }

            setRamHashmap(hashmap);
        })
    }, []);

    const numHandleChange = (event: any) => {
        setNumber(event.target.value);
    }

    const brandHandleChange = (event: any) => {
        setBrand(event.target.value, "ram");
    }

    const modelHandleChange = (event: any) => {
        setModel(event.target.value, "ram");
    }

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
                    <select name="ramHowMany" id="ramHowMany" style={{width: "140px"}} onChange={numHandleChange}>
                        <option value="-" >-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Brand</p>
                    <select name="brand" id="memoryCard-brand-select" style={{width: "200px"}} onChange={brandHandleChange}>
                        <option value="-">-</option>
                        {createBrandList(ramList).map((brand, index) => {
                            return (
                                <option value={brand} key={index}>{brand}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Model</p>
                    <select name="model" id="memoryCard-model-select" style={{width: "200px"}} onChange={modelHandleChange}>
                        <option value="-">-</option>
                        {createModelList(ramList, "RAM").map((model, index) => {
                            return (
                                <option value={model} key={index}>{model}</option>
                            )
                        })}
                    </select>
                </div>
            </Box>
        </Box>
    );
};

export default MemoryCard;