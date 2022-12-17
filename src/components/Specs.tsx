import { usePcContext } from "../context";

const Specs = () => {

    const {
        cpuBrand,
        cpuModel,
        gpuBrand,
        gpuModel,
        ramBrand,
        ramModel,
        hddOrssd,
        capacity,
        storageBrand,
        storageModel,
        calculateGamingPC,
        calculateWorkingPC
    } = usePcContext();

    return (
        <div className="specBox">
            <div className="m-2 pt-3 d-flex justify-content-center">
                <h1 style={{margin: "1rem"}}>Your PC</h1>
            </div>
            <div className="m-2 pt-3 d-flex flex-column">
                <h2 className="specHeader">CPU</h2>
                <hr className="specLine"></hr>
                <div className="specDisplay">
                    <h3>Brand: {cpuBrand}</h3>
                    <h3>Model: {cpuModel}</h3>
                </div>
            </div>
            <div className="m-2 pt-3 d-flex flex-column">
                <h2 className="specHeader">GPU</h2>
                <hr className="specLine"></hr>
                <div className="specDisplay">
                    <h3>Brand: {gpuBrand}</h3>
                    <h3>Model: {gpuModel}</h3>
                </div>
            </div>
            <div className="m-2 pt-3 d-flex flex-column">
                <h2 className="specHeader">RAM</h2>
                <hr className="specLine"></hr>
                <div className="specDisplay">
                    <h3>Brand: {ramBrand}</h3>
                    <h3>Model: {ramModel}</h3>
                </div>
            </div>
            <div className="m-2 pt-3 d-flex flex-column">
                <h2 className="specHeader">Storage</h2>
                <hr className="specLine"></hr>
                <div className="specDisplay">
                    <h3>Disk: {hddOrssd}</h3>
                    <h3>Storage: {capacity}</h3>
                    <h3>Brand: {storageBrand}</h3>
                    <h3>Model: {storageModel}</h3>
                </div>
            </div>
            <hr style={{color: "black", width: "90%"}}></hr>
            <div className="specDisplay">
                <h1>Gaming: {calculateGamingPC()}%</h1>
                <h1>Work: {calculateWorkingPC()}%</h1>
            </div>
        </div>
    );
};

export default Specs;

