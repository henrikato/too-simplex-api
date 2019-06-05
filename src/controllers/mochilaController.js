import { mochila } from './../services/mochilaService';

export const Post = async (req, res) => {
    try {
        if(req.body === null || req.body.itens === null || req.body.capacidade === null){
            res.status(422).json({
                mensagem: "Existem dados que não foram informados. Tente novamente mais tarde."
            });
        }

        //Retorna o valor máximo e os itens selecionados
        var retorno = mochila(req.body.itens, req.body.capacidade);

        res.status(200).json(retorno);
    } catch (error) {
        res.status(422).json({
            message: "O que vc tá fazendo?",
            erro: error.message
        })
    }
}