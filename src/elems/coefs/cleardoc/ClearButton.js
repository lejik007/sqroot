export default function ClearDoc() {
    return (
        <div className="but">
            <input type="button" id="ClearDoc" value="Очистить документ" onClick={GetClear} />
            {/*<input type="text" id="name" name="name" required minLength="4" maxLength="8" size="10" />*/}
        </div>
    );
}

function GetClear() {
    document.writeln("Документ чистый")
}