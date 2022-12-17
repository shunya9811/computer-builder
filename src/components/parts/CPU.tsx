import { useEffect } from "react";
import { Box } from '@mui/material';

import { usePcContext } from "../../context";

const CPU = () => {
    const {
        setCpuList,
        setCpuHashmap,
        setBrand,
        setModel,
        createBrandList,
        createModelList,
        cpuList
    } = usePcContext();

    useEffect(() => {
        const fetchCPUData = async () => {
            const res = await fetch("https://api.recursionist.io/builder/computers?type=cpu");
            const result = await res.json();
            return result;
        };

        fetchCPUData().then((list) => {
            setCpuList(list);
            
            let hashmap = new Map<string, number>();
            for (let i = 0; i < list.length; i++){
                hashmap.set(list[i].Model, list[i].Benchmark);
            }

            setCpuHashmap(hashmap);
        })
    }, []);

    const brandHandleChange = (event: any) => {
        setBrand(event.target.value, "cpu");
    }

    const modelHandleChange = (event: any) => {
        setModel(event.target.value, "cpu");
    }

    return(
        
        <Box
            sx={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
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
                }}
            >
                <div className="inputCon">
                    <p className="form-label">Brand</p>
                    <select name="brand" id="cpu-brand-select" style={{width: "200px"}} onChange={brandHandleChange}>
                        <option value="-">-</option>
                        {createBrandList(cpuList).map((brand, index) => {
                            return (
                                <option value={brand} key={index}>{brand}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Model</p>
                    <select name="model" id="cpu-model-select" style={{width: "200px"}} onChange={modelHandleChange}>
                        <option value="-">-</option>
                        {createModelList(cpuList, "CPU").map((model, index) => {
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

export default CPU;