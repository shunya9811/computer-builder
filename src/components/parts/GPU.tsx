import { useEffect } from "react";
import { Box } from '@mui/material';

import { usePcContext } from "../../context";

const GPU = () => {
    const {
        setGpuList,
        setGpuHashmap,
        setBrand,
        setModel,
        createBrandList,
        createModelList,
        gpuList
    } = usePcContext();

    useEffect(() => {
        const fetchGPUData = async () => {
            const res = await fetch("https://api.recursionist.io/builder/computers?type=gpu");
            const result = await res.json();
            return result;
        };

        fetchGPUData().then((list) => {
            setGpuList(list);

            let hashmap = new Map<string, number>();
            for (let i = 0; i < list.length; i++){
                hashmap.set(list[i].Model, list[i].Benchmark);
            }

            setGpuHashmap(hashmap);
        })
    }, []);

    const brandHandleChange = (event: any) => {
        setBrand(event.target.value, "gpu");
    }

    const modelHandleChange = (event: any) => {
        setModel(event.target.value, "gpu");
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
                    <select name="brand" id="gpu-brand-select" style={{width: "200px"}} onChange={brandHandleChange}>
                        <option value="-">-</option>
                        {createBrandList(gpuList).map((brand, index) => {
                            return (
                                <option value={brand} key={index}>{brand}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="inputCon">
                    <p className="form-label">Model</p>
                    <select name="model" id="gpu-model-select" style={{width: "200px"}} onChange={modelHandleChange}>
                        <option value="-">-</option>
                        {createModelList(gpuList, "GPU").map((model, index) => {
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

export default GPU;