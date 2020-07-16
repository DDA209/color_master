window.addEventListener
    /**
     * Variables declartations
     */

    // CSS colors
    var strColor1 = '#e00000ff', // Red
        strColor2 = '#ffe010ff', // Yellow
        strColor3 = '#1030f0ff', // Blue
        strColor4 = '#009000ff', // Green
        strColor5 = '#a000a0ff', // Purple
        strColor6 = '#ff8020ff', // Orange
        strColor7 = '#704010ff', // Maroon
        strColor8 = '#000000ff', // Black
        strColor9 = '#c0c0c0ff'; // Grey

    // Input limits
    var minHiddenColors = 2,
        minNbColors = 2,
        maxHiddenColors = 5,
        maxNbColors = 9;

    /**
     * Function who selects the colors to find
     * @param {number of colors to find from 2 to 5} nbHiddenColors 
     * @param {number of possible colors frome 2 to 9} nbColors 
     * Output arrResult=[array of "nbHiddenColors" stings color CSS value]
     */
    function colorsHidden(nbHiddenColors, nbColors) {
        var arrResult = []
        for (let i = 0; i < nbHiddenColors && i <= maxHiddenColors; i++) {
            var numRandColor = Math.ceil(Math.random() * nbColors);
            // console.log("tour :", i,"- couleur :", numRandColor)
            switch (numRandColor) {
                case 1: // red
                    arrResult[i] = strColor1
                    break;
                case 2: // yellow
                    arrResult[i] = strColor2
                    break;
                case 3: // blue
                    arrResult[i] = strColor3
                    break;
                case 4: // green
                    arrResult[i] = strColor4
                    break;
                case 5: // purple
                    arrResult[i] = strColor5
                    break;
                case 6: // orange
                    arrResult[i] = strColor6
                    break;
                case 7: // marron
                    arrResult[i] = strColor7
                    break;
                case 8: // black
                    arrResult[i] = strColor8
                    break;
                case 9: // grey
                    arrResult[i] = strColor9
                    break;
                    
                default:
                    return ['none']
            }
        }
        return arrResult;
    } // /colorsHidden -> arrResult=[array of "nbHiddenColors" stings color CSS value]



    var inputDifficulty = 4,
        inputNbColors = 4;

    console.log(colorsHidden(inputDifficulty, inputNbColors));