var size = 100;

//Основная функция

function chess(arrWhite, arrBlack) {

    var field = document.createElement('div');
    field.className = 'mainField';
    document.body.appendChild(field);

    chessFields(field, arrWhite, arrBlack);

    var inv = document.getElementsByClassName('inverse');
    for (var i = 0; i < inv.length; i++) {
        inv[i].style.transform = 'rotate(180deg)';
    }
}

//------------------------------------------------------------------

// Доска

function chessFields(parrentDiv, arrWhite, arrBlack) {

    lettersForChess(parrentDiv, 'straight');

    for (var i = 1; i < 9; i++) {
        var chessRow = document.createElement('div');
        chessRow.className = 'chessRow';
        parrentDiv.appendChild(chessRow);
        chessRow.style.display = 'flex';

        numsForChess(i, chessRow, 'straigt');

        for (var j = 1; j < 9; j++) {
            var chessField = document.createElement('div');
            chessField.className = 'chessField';
            chessField.id = 'chessField-' + i + '-' + j;
            fieldStyle(chessField);
            fontStyle(chessField);
            chessField.style.fontSize = size * 0.8 + 'px';
            chessField.style.color = '#000';
            if (i == 1) {
                chessField.innerHTML = arrBlack[j];
            } else if (i == 8) {
                chessField.innerHTML = arrWhite[j];
            }
            if (i == 2) {
                chessField.innerHTML = arrBlack[0];
            } else if (i == 7) {
                chessField.innerHTML = arrWhite[0];
            }
            chessRow.appendChild(chessField);
            if ((i + j) % 2 == 0) {
                chessField.style.backgroundColor = 'white';
            } else {
                chessField.style.backgroundColor = '#8B4513';

            }
        }

        numsForChess(i, chessRow, 'inverse');
    }

    lettersForChess(parrentDiv, 'inverse');
}

//Буквы

function lettersForChess(parrentDiv, fieldClass) {
    var chessColName = document.createElement('div');
    chessColName.className = 'chessRow';
    parrentDiv.appendChild(chessColName);
    chessColName.style.display = 'flex';

    var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '']
    for (var letter in letters) {
        var chessLetter = document.createElement('div');
        chessLetter.className = 'letterField ' + fieldClass;
        chessColName.appendChild(chessLetter);
        fontStyle(chessLetter);
        fieldStyle(chessLetter);
        chessLetter.innerHTML = letters[letter];
    }
}

//Цифры

function numsForChess(i, parrentDiv, fieldClass) {
    var chessRowNum = document.createElement('div');
    chessRowNum.className = 'numField ' + fieldClass;
    parrentDiv.appendChild(chessRowNum);
    fieldStyle(chessRowNum);
    fontStyle(chessRowNum);
    chessRowNum.style.textAlign = 'right';
    chessRowNum.innerHTML = i;
}



//------------------------------------------------------------------

//Параметры ячейки

function fieldStyle(field) {
    field.style.boxSizing = 'border-box';
    //    field.style.borderColor = '#8B4513';
    //    field.style.borderWidth = '1px';
    //    field.style.borderStyle = 'solid';
    field.style.width = size + 'px';
    field.style.height = size + 'px';
}

//Стили текста ячейки

function fontStyle(field) {
    field.style.backgroundColor = '#D2B48C';
    field.style.color = 'white';
    field.style.lineHeight = size * 0.8 + 'px';
    field.style.padding = size / 10 + 'px';
    field.style.fontSize = size / 4 + 'px';
    field.style.fontWeight = 'bold';
    field.style.textAlign = 'center';
}
