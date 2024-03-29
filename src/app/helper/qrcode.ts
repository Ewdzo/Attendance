import axios from 'axios';
import QrScanner from 'qr-scanner';
import ImageIcon from "../assets/image.svg";
import { Dispatch, SetStateAction } from 'react';

export const scanQRInput = async (qrInput: File, fn: Dispatch<SetStateAction<any>>) => {
  QrScanner.scanImage(qrInput, { returnDetailedScanResult: true })
    .then(result => result.data.slice(-14))
    .then(result =>
      axios.get(`https://www.sistemas.ufu.br/valida-gateway/id-digital/buscarDadosIdDigital?idIdentidade=${result}`)
        .then(response => response.data.identidadeDigital)
        .then((response) => fn({...response, foto: "data:image/png;base64," + response.foto}))
    )
    .catch(e => fn({foto: ImageIcon, default: true, error: "QRCode Inválido" }));
};