import { baseServices } from "../services/baseServices";

export const baseController = {
  buscar: async (req, res) => {
    const service = baseServices.buscar();
    res.send(service);
  },

  buscarPeloId: (req, res) => {
    
    const service = baseServices.buscarPeloId(req.params.id);
    res.send(service);
  },

  salvar: (req, res) => {
    const olt = baseServices.cadastrar(req.body)
    res.send(olt);
  },
};