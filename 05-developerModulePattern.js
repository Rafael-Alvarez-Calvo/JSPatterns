const result = (() => {
    const x = {}
    //Zona privada o API Privada

    return {
        //Zona Publica o Api publica
        a: () => console.log(x),
        b:(key, val) => x[key] = val
    }
})()

result.a();
result.b("queso", "cabra");
result.a() //Todo esto va a lanzar los valores correspondientes, ya que corresponden

console.log(result.x); //Esto va a lanzar undefined, ya que este valor se encuentra en la zona privada del objeto result