import { useEffect } from "react";
import { Box } from '@mui/material';

import { usePcContext } from "../../context";

const Storage = () => {
    const {
        setStorageList,
        setStorageHashmap,
        selecthddOrssd,
        setCapacity,
        setBrand,
        setModel,
        createBrandList,
        createCapacityList,
        createModelList,
        storageList
    } = usePcContext();

    useEffect(() => {
        const fetchStorageData = async () => {
            const res1 = await fetch("https://api.recursionist.io/builder/computers?type=hdd");
            const res2 = await fetch("https://api.recursionist.io/builder/computers?type=ssd");
            const result1 = await res1.json();
            const result2 = await res2.json();
            return result1.concat(result2);
        };

        fetchStorageData().then((list) => {
            setStorageList(list);

            let hashmap = new Map<string, number>();
            for (let i = 0; i < list.length; i++){
                hashmap.set(list[i].Model, list[i].Benchmark);
            }

            setStorageHashmap(hashmap);
        })
    }, []);

    const typeHandleChange = (event: any) => {
        selecthddOrssd(event.target.value);
    }

    const capacityHandleChange = (event: any) => {
        setCapacity(event.target.value);
    }

    const brandHandleChange = (event: any) => {
        setBrand(event.target.value, "storage");
    }

    const modelHandleChange = (event: any) => {
        setModel(event.target.value, "storage");
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
                    <select name="hddORssd" id="hddORssd" style={{width: "110px"}} onChange={typeHandleChange}>
                        <option value="HDD">HDD</option> 
                        <option value="SSD">SSD</option>
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Storage</p>
                    <select name="capacity" id="capacity" style={{width: "110px"}} onChange={capacityHandleChange}>
                        <option value="-">-</option>
                        {createCapacityList(storageList).map((capacity, index) => {
                            return (
                                <option value={capacity} key={index}>{capacity}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Brand</p>
                    <select name="brand" id="storage-brand-select" style={{width: "200px"}} onChange={brandHandleChange}>
                        <option value="-">-</option>
                        {createBrandList(storageList).map((brand, index) => {
                            return (
                                <option value={brand} key={index}>{brand}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Model</p>
                    <select name="model" id="storage-model-select" style={{width: "200px"}} onChange={modelHandleChange}>
                        <option value="-">-</option>
                        {createModelList(storageList, "storage").map((model, index) => {
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

export default Storage;