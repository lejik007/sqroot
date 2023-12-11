export default function ClearButton() {
    return (
        <div className="but">
            <input type="button" id="ClearButton" value="Очистить" onClick={GetClear} />
            {/*<input type="text" id="name" name="name" required minLength="4" maxLength="8" size="10" />*/}
        </div>
    );
}

function GetClear() {
    document.getElementById('CoefA').value =
        document.getElementById('CoefB').value =
            document.getElementById('CoefC').value =
                document.getElementById('Root1').value =
                    document.getElementById('Root2').value = 0
}