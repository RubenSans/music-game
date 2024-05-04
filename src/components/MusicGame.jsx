import * as tone from "../utils/tone";

export const MusicGame = () => {

    window.addEventListener("keydown", tone.handlePressKey);

    return (
        <div className="flex align-center justify-center">
            {/* <h2 className="text-center">Music Game</h2> */}
            <div className="flex justify-center">
                <button className="bg-white border border-black w-[100px] h-[400px]" onClick={tone.playC4}>C4</button>
                <button className="bg-black text-white w-[60px] h-[250px] -mx-[30px] z-10" onClick={tone.playDb4}>Db4</button>
                <button className="bg-white border border-black w-[100px] h-[400px]" onClick={tone.playD4}>D4</button>
                <button className="bg-black text-white w-[60px] h-[250px] -mx-[30px] z-10" onClick={tone.playEb4}>Eb4</button>
                <button className="bg-white border border-black w-[100px] h-[400px]" onClick={tone.playE4}>E4</button>
                <button className="bg-white border border-black w-[100px] h-[400px]" onClick={tone.playF4}>F4</button>
                <button className="bg-black text-white w-[60px] h-[250px] -mx-[30px] z-10" onClick={tone.playGb4}>Gb4</button>
                <button className="bg-white border border-black w-[100px] h-[400px]" onClick={tone.playG4}>G4</button>
                <button className="bg-black text-white w-[60px] h-[250px] -mx-[30px] z-10" onClick={tone.playAb4}>Ab4</button>
                <button className="bg-white border border-black w-[100px] h-[400px]" onClick={tone.playA4}>A4</button>
                <button className="bg-black text-white w-[60px] h-[250px] -mx-[30px] z-10" onClick={tone.playBb4}>Bb4</button>
                <button className="bg-white border border-black w-[100px] h-[400px]" onClick={tone.playB4}>B4</button>
                <button className="bg-white border border-black w-[100px] h-[400px]" onClick={tone.playC5}>C5</button>
            </div>
        </div>
    );
};