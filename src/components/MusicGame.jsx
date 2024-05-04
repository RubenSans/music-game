import * as tone from "../utils/tone";

export const MusicGame = () => {

    const keys = tone.keys;

    window.addEventListener("keydown", tone.handlePressKey);

    window.addEventListener("keydown", (event) => {
        const key = document.querySelector(`button[data-key="${event.key.toUpperCase()}"]`);
        if (key) {
            const classToAdd = key.classList.contains('my-shadow-white') ? 'white-active' : 'black-active';
            key.classList.add(classToAdd);
            setTimeout(() => {
                key.classList.remove(classToAdd);
            }, 200);
        }
    });    

    return (
        <div className="flex my-box relative max-h-[30em]">
            {keys.map((key, index) => {
            return (
                <div key={index} className="flex">
                    <button id="btnKey" data-key={key.key} className={key.note.includes('b') ? 'text-white my-shadow-black w-[60px] h-[250px] -mx-[30px] z-10' : 'border-l border-b border-solid border-[#bbb] my-shadow-white w-[100px] h-[400px]'} onClick={()=> tone.playNote(key.note)}>{key.key}</button>                
                </div>
            );
            })}
        </div>
    );
};