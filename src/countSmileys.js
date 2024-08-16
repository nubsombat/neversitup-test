
const eyeMarked = [':', ';'];
const noseMarked = ['-', '~'];
const mouthMarked = [')', 'D'];

const findSmiley = (arrStr = []) => {
    let eyeValid = false, noseValid = false, mouthValid = false;

    for (let i = 0; i < arrStr.length; i++) {
        const element = arrStr[i];

        if (!eyeValid && eyeMarked.includes(element)) {
            eyeValid = true;
            continue;
        }
        if (!mouthValid && mouthMarked.includes(element)) {
            mouthValid = true;
            break;
        }
        if (eyeValid && !noseValid && noseMarked.includes(element)) {
            noseValid = true;
        }
    }

    return eyeValid && mouthValid || (eyeValid && noseValid && mouthValid);
}

const countSmileys = (arr = []) => {
    return arr.reduce((count, face) => count + findSmiley(face.split('')), 0);
}

module.exports = countSmileys;
