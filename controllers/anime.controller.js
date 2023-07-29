
export const findAll = (req, res) => {
    try {
        res.status(200).json({ code: 200, message: "ok"});
        
    } catch (error) {
        res.status(500).json({ code: 500, message: "Error al leer los datos solicitados de anime"});
    }
}