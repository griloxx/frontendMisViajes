const Comentarios = ({ comentarios, estadoComentarios }) => {
    
return (
        <div className={estadoComentarios?"caja-comentarios ocultar-comentarios":"caja-comentarios"}>
            <div className="comentarios">
                {comentarios.map((comentario, index) => (
                    <div key={index} className="comentario">
                        <img src={comentario.avatar}  alt={`Foto de ${comentario.name}`} />
                        <div>
                            <p>{comentario.name}</p>
                            <p>{comentario.comentario}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comentarios;