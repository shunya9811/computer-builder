const Specs = () => {
    return (
        <div className="specBox">
            <div className="m-2 pt-3 d-flex justify-content-center">
                <h1 style={{margin: "1rem"}}>Your PC</h1>
            </div>
            <div className="m-2 pt-3 d-flex flex-column">
                <h2 className="specHeader">CPU</h2>
                <hr className="specLine"></hr>
                <div className="specDisplay">
                    <h4>Brand: AMD</h4>
                    <h4>Model: Ryzen 9 5950X</h4>
                </div>
            </div>
            <div className="m-2 pt-3 d-flex flex-column">
                <h2 className="specHeader">GPU</h2>
                <hr className="specLine"></hr>
                <div className="specDisplay">
                    <h4>Brand: Nvidia</h4>
                    <h4>Model: Quadro RTX A6000</h4>
                </div>
            </div>
            <div className="m-2 pt-3 d-flex flex-column">
                <h2 className="specHeader">RAM</h2>
                <hr className="specLine"></hr>
                <div className="specDisplay">
                    <h4>Brand: Crucial</h4>
                    <h4>Model: Ballistix Sport LT DDR4 2400 C16 2x8GB</h4>
                </div>
            </div>
            <div className="m-2 pt-3 d-flex flex-column">
                <h2 className="specHeader">Storage</h2>
                <hr className="specLine"></hr>
                <div className="specDisplay">
                    <h4>Disk: SSD</h4>
                    <h4>Storage: 1TB</h4>
                    <h4>Brand: Samsung</h4>
                    <h4>Model: 970 Evo Plus NVMe PCIe M.2 1TB</h4>
                </div>
            </div>
            <hr style={{color: "black", width: "90%"}}></hr>
            <div className="specDisplay">
                <h1>Gaming: 190%</h1>
                <h1>Work: 134%</h1>
            </div>
        </div>
    );
};

export default Specs;

