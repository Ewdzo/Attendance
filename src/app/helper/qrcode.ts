import axios from 'axios';
import QrScanner from 'qr-scanner';

export const scanQRInput = async (qrInput: File) => {
  QrScanner.scanImage(qrInput, { returnDetailedScanResult: true })
    .then(result => result.data.slice(-14))
    .then(result =>
      axios.get(`https://www.sistemas.ufu.br/valida-gateway/id-digital/buscarDadosIdDigital?idIdentidade=${result}`)
        .then(response => response.data.identidadeDigital)
        .then((response) => {return response})
        .catch(e => alert('Não conseguimos encontrar um IDUFU válido na ultima imagem.'))
    )
    .catch(e => alert('Não conseguimos encontrar um QRCode válido na ultima imagem.'));
};