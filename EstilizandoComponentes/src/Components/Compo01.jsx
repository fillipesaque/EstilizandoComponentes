function Compo01 (){
    return(
        <div className="pai"
        style={{
            backgroundColor: 'Red', /* Estilizando In-line usando Obj Js  */
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            placeContent: 'center',
            textAlign: 'center'

        }}
        >
            <h1>Conteudo Componente 01</h1>
            <h1
            style={{
                marginTop: '25px'
            }}
            >Conteudo Componente 01</h1>
        </div>
    )
}

export default Compo01;