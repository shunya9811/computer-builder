import CPU from './parts/CPU';
import GPU from './parts/GPU';
import MemoryCard from './parts/memoryCard';
import Storage from './parts/storage';
import Results from './Result';

// 後で変更 memoをつけるかどうかはあとで検討

const Content = () => {
    return (
        <>
            <CPU/>
            <GPU/>
            <MemoryCard/>
            <Storage/>
            <Results/>
        </>
    );

};

export default Content;