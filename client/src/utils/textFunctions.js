// Text Cutter cuts the text with the limited size
export const textCutter = (text, length) => {
    let newText = text.slice(0, length);
    if (text.length > length) newText += '...';
    return newText;
}
