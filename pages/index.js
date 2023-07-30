import toast, { Toaster } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import icon from '../public/capi.png'
import {
    Connection,
    SystemProgram,
    Transaction,
    PublicKey,
    LAMPORTS_PER_SOL,
    clusterApiUrl,
    SendTransactionError,
} from "@solana/web3.js";
import { useStorageUpload } from "@thirdweb-dev/react";

import axios from "axios";

const SOLANA_NETWORK = "devnet";

const Home = () => {
    const [publicKey, setPublicKey] = useState(null);
    const router = useRouter();
    const [ready, setReady] = useState(false);
    const [explorerLink, setExplorerLink] = useState(null);

    const [url, setUrl] = useState(null);
    const [params, setParams] = useState({});
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (explorerLink) setExplorerLink(null);
        const urlParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlParams.entries());
        console.log(params);
        setParams(params);
        setUrl(params.img);
        console.log(icon)
    }, []);

    const createNFT = async () => {
        setLoading(true);
        const url = await urlToBLob();
        await generateNFT(url);
        setLoading(false);
        setReady(true);
    }

    //Funcion para Iniciar sesion con nuestra Wallet de Phantom

    const signIn = async () => {
        //Si phantom no esta instalado
        const provider = window?.phantom?.solana;
        const { solana } = window;

        if (!provider?.isPhantom || !solana.isPhantom) {
            toast.error("Phantom no esta instalado");
            setTimeout(() => {
                window.open("https://phantom.app/", "_blank");
            }, 2000);
            return;
        }
        //Si phantom esta instalado
        let phantom;
        if (provider?.isPhantom) phantom = provider;

        const { publicKey } = await phantom.connect(); //conecta a phantom
        console.log("publicKey", publicKey.toString()); //muestra la publicKey
        setPublicKey(publicKey.toString()); //guarda la publicKey en el state
        window.localStorage.setItem("publicKey", publicKey.toString()); //guarda la publicKey en el localStorage

        toast.success("Tu Wallet esta conectada 👻");
    };

    //Funcion para cerrar sesion con nuestra Wallet de Phantom

    const signOut = async () => {
        if (window) {
            const { solana } = window;
            window.localStorage.removeItem("publicKey");
            setPublicKey(null);
            solana.disconnect();
            router.reload(window?.location?.pathname);
        }
    };

    //Función para subir archivos a IPFS

    const { mutateAsync: upload } = useStorageUpload();

    const uploadToIpfs = async (file) => {
        const uploadUrl = await upload({
            data: [file],
            options: {
                uploadWithGatewayUrl: true,
                uploadWithoutDirectory: true,
            },
        });
        return uploadUrl[0];
    };

    // URL a Blob
    const urlToBLob = async (file) => {
        await fetch(url)
            .then((res) => res.blob())
            .then((myBlob) => {
                // logs: Blob { size: 1024, type: "image/jpeg" }

                myBlob.name = "blob.png";

                file = new File([myBlob], "image.png", {
                    type: myBlob.type,
                });
            });

        const uploadUrl = await uploadToIpfs(file);
        console.log("uploadUrl", uploadUrl);

        return uploadUrl;
    };

    //Funcion para crear un NFT
    const generateNFT = async (ipfsUrl) => {
        try {
            const mintedData = {
                name: params.title,
                imageUrl: ipfsUrl,
                publicKey,
            };
            console.log("Este es el objeto mintedData:", mintedData);
            const { data } = await axios.post("/api/mintnft", mintedData);
            const { signature: newSignature } = data;
            const solanaExplorerUrl = `https://solscan.io/tx/${newSignature}?cluster=${SOLANA_NETWORK}`;
            console.log("solanaExplorerUrl", solanaExplorerUrl);
        } catch (error) {
            console.error("ERROR GENERATE NFT", error);
            toast.error("Error al generar el NFT");
        }
    };

    return (
        <div className="caja">
            <a href={`http://localhost:3000/?title=${encodeURI(params.title)}&user=${encodeURI(params.user)}&issuer=${encodeURI(params.issuer)}&img=${encodeURI(params.img)}`}></a>
            <div className="caja-header">
                <div className="icon">
                    <img src={icon.src} alt="Icon"/>
                </div>
                <h1 className="capi">CAPI</h1>
            </div>
            <div className="info">
                <p className="title">{params.title}</p>
                <p className="nombre">{params.user}</p>
                <p className="institucion">Certificado por: {params.issuer}</p>
            </div>
            
            { publicKey ? (
                <button className="pago" onClick={createNFT} disabled={loading || ready}>
                { ready ? '¡Listo!' : loading ? '...' : 'Adquirir Certificado'}
                </button>
            ) : (
                <button className="pago" onClick={signIn}>
                Connectar Wallet
                </button>
            )}

            
    </div >
    );
};

export default Home;
