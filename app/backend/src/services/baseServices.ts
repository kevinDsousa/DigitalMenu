import * as fs from 'fs';

const PATH_OLTs = "./data/olt.json";

function salvarOltNoArquivo(olt) {
  return 'oi'
}

function buscarOltsNoArquivo() {
  return 'oi'
}

export const baseServices = {
  buscar: () => {
    return buscarOltsNoArquivo();
  },

  buscarPeloId: (id) => {
    const olts = buscarOltsNoArquivo();
    return olts[id-1]
  },

  cadastrar: (olt) => {
    salvarOltNoArquivo(olt);
    return olt;
  },
};