import { useState, createContext, useContext, ReactNode } from "react";

import { sortCapacity, sortModel } from "./sort";
 
interface Parts {
    Type: string;
    PartNumber: string;
    Brand: string;
    Model: string;
    Rank: number;
    Benchmark: number;
}

type PcContextInterface = {
    cpuBrand: string | null;
    cpuModel: string | null;
    cpuList: Parts[];
    setCpuList(list: Parts[]): void;
    cpu: Parts | null;
    setCpu(cpu: Parts): void;

    gpuBrand: string | null;
    gpuModel: string | null;
    gpuList: Parts[];
    setGpuList(list: Parts[]): void;

    numOfRam: string | null;
    setNumber(number: string): void;
    ramBrand: string | null;
    ramModel: string | null;
    ramList: Parts[];
    setRamList(list: Parts[]): void;

    hddOrssd: string | null;
    selecthddOrssd(type: string): void;
    capacity: string | null;
    setCapacity(capacity: string): void;
    storageBrand: string | null;
    storageModel: string | null;
    storageList: Parts[];
    setStorageList(list: Parts[]): void;

    setBrand(brand: string, type: string): void;
    setModel(model: string, type: string): void;
    createBrandList(list: Parts[]): string[];
    createModelList(list: Parts[], type: string): string[];
    createCapacityList(list: Parts[]): string[];

    cpuHashmap: Map<string, number> | undefined;
    setCpuHashmap(map: Map<string, number>): void;
    gpuHashmap: Map<string, number>;
    setGpuHashmap(map: Map<string, number>): void;
    ramHashmap: Map<string, number>;
    setRamHashmap(map: Map<string, number>): void;
    storageHashmap: Map<string, number>;
    setStorageHashmap(map: Map<string, number>): void;

    calculateGamingPC(): number;
    calculateWorkingPC(): number;
}

// Type AssertionでdefaultValueに対し型を与える
// これを行うことで、参照するコンポーネントから型を指定されていないエラーを解決できる
export const PcContext = createContext<PcContextInterface>({} as PcContextInterface);

export const usePcContext = () => {
    return useContext(PcContext);
}

export const PcContextProvider = ({children}: {children: ReactNode} ) => {
    const [cpuBrand, setCpuBrand] = useState("");
    const [cpuModel, setCpuModel] = useState("");
    const [cpuList, setCpuList] = useState([] as unknown as Parts[]);
    const [cpu, setCpu] = useState({} as unknown as Parts);

    const [gpuBrand, setGpuBrand] = useState("");
    const [gpuModel, setGpuModel] = useState("");
    const [gpuList, setGpuList] = useState([] as unknown as Parts[]);

    const [numOfRam, setNumber] = useState("-");
    const [ramBrand, setRamBrand] = useState("");
    const [ramModel, setRamModel] = useState("");
    const [ramList, setRamList] = useState([] as unknown as Parts[]);

    const [hddOrssd, selecthddOrssd] = useState("HDD");
    const [capacity, setCapacity] = useState("");
    const [storageBrand, setStorageBrand] = useState("");
    const [storageModel, setStorageModel] = useState("");
    const [storageList, setStorageList] = useState([] as unknown as Parts[]);

    const [cpuHashmap, setCpuHashmap] = useState(new Map<string, number>());
    const [gpuHashmap, setGpuHashmap] = useState(new Map<string, number>());
    const [ramHashmap, setRamHashmap] = useState(new Map<string, number>());
    const [storageHashmap, setStorageHashmap] = useState(new Map<string, number>());

    const setBrand = (brand: string, type: string) => {
        switch(type){
            case "cpu":{
                setCpuBrand(brand);
                break;
            }
            case "gpu":{
                setGpuBrand(brand);
                break;
            }
            case "ram":{
                setRamBrand(brand);
                break;
            }
            case "storage":{
                setStorageBrand(brand);
                break;
            }
        }
    }
    
    const setModel = (model: string, type: string) => {
        switch(type){
            case "cpu":{
                setCpuModel(model);
                break;
            }
            case "gpu":{
                setGpuModel(model);
                break;
            }
            case "ram":{
                setRamModel(model);
                break;
            }
            case "storage":{
                setStorageModel(model);
                break;
            }
        }
    }

    const createBrandList = (list: Parts[]): string[] => {
        let res: string[] = [];

        let hashmap: any = {};
        
        for (let i = 0; i < list.length; i++){
            if (hashmap[list[i].Brand] === undefined){
                hashmap[list[i].Brand] = list[i].Brand;
            }
        }

        for (let key in hashmap){
            res.push(hashmap[key]);
        }

        return res.sort();
    }

    const createModelList = (list: Parts[], type: string): string[] => {
        let res: string[] = [];
        let brand: string = "";

        switch(type){
            case "CPU":{
                brand = cpuBrand;
                break;
            }
            case "GPU":{
                brand = gpuBrand
                break;
            }
            case "RAM":{ 
                brand = ramBrand;
                break;
            }
            case "storage":{
                brand = storageBrand;
                break;
            }
        }

        for (let i = 0; i < list.length; i++){
            if (type === "RAM"){
                let number = list[i].Model.split(" ").slice(-1)[0][0];
                if (number === numOfRam && list[i].Brand === brand){
                    res.push(list[i].Model);
                }
            } else if (type === "storage"){
                let modelData = list[i].Model.replace(/\s\(.+\)/g, "");//年数を消した
                let tempCapacity = modelData.split(" ").slice(-1)[0];
                if (list[i].Type === hddOrssd && tempCapacity === capacity && list[i].Brand === brand){
                    res.push(list[i].Model);
                }
            } else {
                if (list[i].Brand === brand){
                    res.push(list[i].Model);
                }
            }
        }

        return res.sort(sortModel);
    }

    const createCapacityList = (list: Parts[]): string[] => {
        let res: string[] = [];

        for (let i = 0; i < list.length; i++){
            if (list[i].Type === hddOrssd){
                let modelData = list[i].Model.replace(/\s\(.+\)/g, ""); //年数を消した
                res.push(modelData.split(" ").slice(-1)[0]);
            }
        }
        

        res = [...new Set(res)];

        return res.sort(sortCapacity);
    }

    const calculateGamingPC = (): number => {
        let res: number = 0;

        res += cpuHashmap.get(cpuModel) as number * 0.25;
        res += gpuHashmap.get(gpuModel) as number * 0.6;
        res += ramHashmap.get(ramModel) as number * 0.125;
        res += storageHashmap.get(storageModel) as number * 0.025;

        return Math.floor(res);
    }

    const calculateWorkingPC = (): number => {
        let res: number = 0;

        res += cpuHashmap.get(cpuModel) as number * 0.6;
        res += gpuHashmap.get(gpuModel) as number * 0.25;
        res += ramHashmap.get(ramModel) as number * 0.1;
        res += storageHashmap.get(storageModel) as number * 0.05;

        return Math.floor(res);
    }

    const value: PcContextInterface | null = {
        cpuBrand,
        cpuModel,
        cpuList,
        setCpuList,
        cpu,
        setCpu,

        gpuBrand,
        gpuModel,
        gpuList,
        setGpuList,

        numOfRam,
        setNumber,
        ramBrand,
        ramModel,
        ramList,
        setRamList,

        hddOrssd,
        selecthddOrssd,
        capacity,
        setCapacity,
        storageBrand,
        storageModel,
        storageList,
        setStorageList,

        setBrand,
        setModel,
        createBrandList,
        createModelList,
        createCapacityList,

        cpuHashmap,
        setCpuHashmap,
        gpuHashmap,
        setGpuHashmap,
        ramHashmap,
        setRamHashmap,
        storageHashmap,
        setStorageHashmap,

        calculateGamingPC,
        calculateWorkingPC
    }

    return <PcContext.Provider value={value}>{children}</PcContext.Provider>
}